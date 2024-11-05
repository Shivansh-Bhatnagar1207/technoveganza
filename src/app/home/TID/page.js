import Card from '@/app/components/card'
import React from 'react'

export default function Page() {
  return (
    <>
      <div>
        Team ID
      </div>
      <div className='flex gap-10 justify-center'>
        <Card title={'Genrate TID'} link={'/home/TID/GenrateTid'} />
        <Card title={'Search TID'} link={'/home/TID/SearchTid'} />
        <Card title={'All TID'} link={'/home/TID/AllTid'} />
      </div>
    </>
  )
}
