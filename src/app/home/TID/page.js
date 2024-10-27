import Card from '@/app/components/card'
import React from 'react'

export default function Page() {
  return (
    <>
      <div>
        TIDs
      </div>
      <div className='flex gap-10 justify-center py-10'>
        <Card title={'Search TID'} desc={'Click to Search All TIDs'} link={'/home/TID/SearchTid'} />
        <Card title={'Genrate TID'} desc={'Click to genrate TID'} link={'/home/TID/GenrateTid'} />
        <Card title={'All TID'} desc={'Click to See All TIDs'} link={'/home/TID/AllTid'} />
      </div>
    </>
  )
}
