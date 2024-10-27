'use client'
import React, { useEffect, useState } from 'react';

export default function Page() {

  const [tids,setTids] = useState([]);

  useEffect(() => {
    const fetchTids = async () => {
        try {
            const response = await fetch(`/api/TID/AllTid`);
            if (!response.ok) throw new Error('Failed to fetch');
            const data = await response.json();
            console.log("Fetched TIDs:", data);
            setTids(data);
        } catch (error) {
            console.error("Error fetching TIDs:", error);
        }
    };
    fetchTids();
}, []);
  return (
    <>
      <div className='text-center font-bold text-3xl py-10'>
        <h1>All TIDs</h1>
      </div>
      <div className='tids-list'>
        {tids.length > 0 ? (
          tids.map((tid) => (
            <div key={tid.id} className='p-2 border-b'>
              <h3 className='font-semibold text-xl'>TID: {tid.id}</h3>
              <div>
                <p className="font-semibold">Associated PIDs:</p>
                {tid.PID.length > 0 ? (
                  tid.PID.map((pid) => (
                    <p key={pid.id} className="ml-2">
                      {`PID: ${pid.Pid}, Name: ${pid.Name},RollNo : ${pid.RollNo}`}
                    </p>
                  ))
                ) : (
                  <p>No associated PIDs</p>
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
