import React from 'react'
import Card from '@/app/components/card'

export default function Page() {
  return (
    <>
      <div>PID</div>
      <div className='flex gap-12 py-10 justify-center'>
        <Card title={'Search PID'} desc={'click here to Search PIDs'} link={'/home/PID/SearchPid'}  />
        <Card title={'Genrate PID'} desc={'click here to gen PIDs'} link={'/home/PID/GenratePid'} />
        <Card title={'All PIDs'} desc={'click here to see all PIDs'} link={'/home/PID/AllPid'} />
      </div>

    </>
  )
}
