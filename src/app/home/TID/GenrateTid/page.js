import { GenTID } from '@/app/action'
import React from 'react'

export default function Page() {
  return (
    <>
      <div className='text-3xl font-bold text-center py-10 '>
        Genrate Tid
      </div>
      <form className='flex flex-col items-center gap-4' action={GenTID}>
        <div>
          Event :
          <select className='border-2' name='Event'>
            <option value={'Event1'}>Event1</option>
            <option value={'Event2'}>Event2</option>
            <option value={'Event3'}>Event3</option>
            <option value={'Event4'}>Event4</option>
            <option value={'Event5'}>Event5</option>
            <option value={'Event6'}>Event6</option>
            <option value={'Event7'}>Event7</option>
          </select>
        </div>
        <div>
          ADD PID :
          <input type='text' name='PID' className='border-2' />
        </div>
        <button title='Add PID' type='submit' className='border-2'>Add PID</button>
      </form>
    </>
  )
}
