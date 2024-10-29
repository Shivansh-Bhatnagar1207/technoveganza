'use client'
import React, { useState, useTransition } from 'react';
import { fetchPidData } from '@/app/action';
export default function Page() {
    const [pid, setPid] = useState('');
    const [pidData, setPidData] = useState(null);
    const [isPending, startTransition] = useTransition();

    // Function to handle form submission and fetch data
    const handleSearch = async (e) => {
        e.preventDefault();

        // Start a transition to fetch data server-side
        startTransition(async () => {
            const data = await fetchPidData(pid);
            setPidData(data);
        });
    }; 
    const excludedEventFields = ['EventID', 'pidInt']



    return (
        <>
            <div className='font-bold font-4xl'>Search PID:</div>
            <form onSubmit={handleSearch} className='flex justify-center items-center py-10 gap-5'>
                <label>
                    PID:
                    <input
                        type='text'
                        value={pid}
                        onChange={(e) => setPid(e.target.value)}
                        className='border-2 border-gray-500'
                        name='searchpid'
                    />
                </label>
                <button
                    type='submit'
                    title='search'
                    className='bg-red-600 px-1 py-1 text-white rounded-xl cursor-pointer'
                    disabled={isPending} // disable the button while loading
                >
                    {isPending ? 'Searching...' : 'Search'}
                </button>
            </form>




            {/* Display Data */}
            <div className="flex justify-center items-center py-5">
                {pidData ? (
                    <table className="table-auto border-collapse border border-gray-400">
                        <thead>
                            <tr>
                                <th className="border px-4 py-2">Field</th>
                                <th className="border px-4 py-2">Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(pidData).map(([key, value]) => (
                                <tr key={key}>
                                    <td className="border px-4 py-2 font-semibold">{key}</td>
                                    <td className="border px-4 py-2">
                                        {/* Check if the value is an object (like Event) */}
                                        {typeof value === 'object' && value !== null ? (
                                            <table className="table-auto border-collapse border border-gray-300 mt-2">
                                                <thead>
                                                    <tr>
                                                        <th className="border px-2 py-1">Event Field</th>
                                                        <th className="border px-2 py-1">Value</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {Object.entries(value)
                                                        .filter(([eventKey]) => !excludedEventFields.includes(eventKey))  // Exclude specific fields
                                                        .map(([eventKey, eventValue]) => (
                                                            <tr key={eventKey}>
                                                                <td className="border px-2 py-1 font-semibold">{eventKey}</td>
                                                                <td className="border px-2 py-1">{eventValue ? 'Yes' : 'No'}</td>
                                                            </tr>
                                                        ))}
                                                </tbody>
                                            </table>
                                        ) : (
                                            key === 'createdAt' ? new Date(value).toLocaleString() : (value ? value.toString() : 'N/A')
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="text-center text-lg font-medium text-gray-600">
                        {isPending ? 'Loading...' : 'No data found for the given PID'}
                    </div>
                )}
            </div>
        </>
    );
}
