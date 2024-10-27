'use client'
import React, { useEffect, useState } from 'react';

export default function Page() {
    const [pids, setPids] = useState([]);

    useEffect(() => {
        const fetchPids = async () => {
            try {
                const response = await fetch('/api/PID/AllPid');
                const data = await response.json();
                setPids(data);
            } catch (error) {
                console.error("Error fetching PIDs:", error);
            }
        };
        fetchPids();
    }, []);
    const getActiveEvents = (event) => {
        const eventNames = [
            { name: 'Event1', active: event.Event1 },
            { name: 'Event2', active: event.Event2 },
            { name: 'Event3', active: event.Event3 },
            { name: 'Event4', active: event.Event4 },
            { name: 'Event5', active: event.Event5 },
            { name: 'Event6', active: event.Event6 },
            { name: 'Event7', active: event.Event7 },
        ];
        return eventNames.filter(e => e.active).map(e => e.name);
    };

    return (
        <>
            <div className='text-center font-bold text-3xl py-10'>All PIDs</div>
            <div className='pids-list'>
                {pids.length > 0 ? (
                    pids.map((pid) => (
                        <div key={pid.id} className='p-2 border-b'>
                            <h3 className='font-semibold text-xl'>PID: {pid.Pid}</h3>
                            <p>Name: {pid.Name}</p>
                            <p>Roll No: {pid.RollNo}</p>
                            <p>Mobile: {pid.Mobile}</p>
                            <p>Branch: {pid.Branch}</p>
                            <p>Course: {pid.Course}</p>
                            <p>College: {pid.College}</p>
                            <p>Gender: {pid.Gender}</p>
                            <div>
                                <p className="font-semibold">Active Events:</p>
                                {pid.Event ? (
                                    getActiveEvents(pid.Event).length > 0 ? (
                                        getActiveEvents(pid.Event).map((eventName, index) => (
                                            <p key={index} className="ml-2">{eventName}</p>
                                        ))
                                    ) : (
                                        <p className="ml-2">No active events</p>
                                    )
                                ) : (
                                    <p className="ml-2">No events available</p>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <p className='text-center'>Loading...</p>
                )}
            </div>
        </>
    );
}
