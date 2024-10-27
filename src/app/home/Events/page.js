import React from 'react'
import Card from '@/app/components/card'
export default function Page() {
  return (
    <>
      <div className='text-center my-5'>
        Events
      </div>
      <div className='grid grid-cols-4 gap-10 py-5 place-items-center'>
        <Card title={'Event1'} link={'/home/Events/Event1'} />
        <Card title={'Event2'} link={'/home/Events/Event2'} />
        <Card title={'Event3'} link={'/home/Events/Event3'} />
        <Card title={'Event4'} link={'/home/Events/Event4'} />
        <Card title={'Event5'} link={'/home/Events/Event5'} />
        <Card title={'Event6'} link={'/home/Events/Event6'} />
        <Card title={'Event7'} link={'/home/Events/Event7'} />
      </div>
    </>
  )
}
