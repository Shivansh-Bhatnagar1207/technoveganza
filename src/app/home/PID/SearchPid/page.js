import React from 'react'

export default function Page() {
    return (
        <>
        <div className='font-bold font-4xl'>Search PID:</div>
        <div className='flex justify-center items-center py-10 gap-5'>
            <lable>
                PID :
            </lable>
            <input type='text' className='border-2 border-gray-500' name='searchpid' />
            <button type='submit' title='search' className='bg-red-600 px-1 py-1 text-white rounded-xl = cursor-pointer'>Search</button>
        </div>
        </>
    )
}
