import { db } from '@/app/database/connect';
import React from 'react';

export default async function Page() {
  const TID = await db.tID.findMany({
    include: {
      PIDs: true
    }
  })
  
  return (
    <>
      <div className='text-center font-bold text-3xl py-10'>
        <h1>All TIDs</h1>
      </div>
      <div className='tids-list'>
        {TID.length > 0 ? (
          TID.map((tid) => (
            <div key={tid.id} className='p-2 border-b'>
              <h3 className='font-semibold text-xl'>TID: {tid.tid}</h3>
              <div>
                <p className="font-semibold">Associated PIDs:</p>
                {tid.PIDs.length > 0 ? (
                  tid.PIDs.map((pid) => (
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
