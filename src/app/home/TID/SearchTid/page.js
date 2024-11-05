'use client'
import React, { useState, useTransition } from 'react';
import { fetchTidData } from '@/app/action';

export default function Page() {
    const [tid, setTid] = useState('');
    const [tidData, setTidData] = useState(null);
    const [isPending, startTransition] = useTransition();

    // Function to handle form submission and fetch data
    const handleSearch = async (e) => {
        e.preventDefault();

        // Start a transition to fetch data server-side
        startTransition(async () => {
            const data = await fetchTidData(tid);
            setTidData(data);
        });
    };

    return (
        <>
            <div className='font-bold font-4xl'>Search TID:</div>
            <form onSubmit={handleSearch} className='flex justify-center items-center py-10 gap-5'>
                <label>
                    TID:
                    <input 
                        type='text' 
                        value={tid} 
                        onChange={(e) => setTid(e.target.value)} 
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

            {/* Display the data once fetched */}
            {tidData && (
                <div>
                    <h3>PID Data:</h3>
                    <pre>{JSON.stringify(tidData, null, 2)}</pre>
                </div>
            )}
        </>
    );
}
