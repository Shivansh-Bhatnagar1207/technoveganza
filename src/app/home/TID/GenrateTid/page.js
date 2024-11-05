import Card from '@/app/components/card'
import React from 'react'

export default function Page() {
  const events = ['Event1', 'Event2', 'Event3', 'Event4', 'Event5', 'Event6', 'Event7',]
  return (
    <>
      <div>
        TIDs
      </div>
      <div className='grid grid-cols-4 gap-10 py-5 place-items-center'>
        {events.map((event) => (
          <Card title={event} link={`/home/TID/GenrateTid/${event}`} key={event} />
        ))}
      </div>
    </>
  )
}
