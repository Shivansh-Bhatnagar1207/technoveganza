import React from 'react'
import logo from '../../public/logo.png'
import Link from 'next/link'
import Image from 'next/image'


export default function Navbar() {
    return (
        <div className='h-20 w-full bg-gradient-to-b from-red-900 to-red-600 flex justify-between'>
            <div className='flex items-center'>
                <Image
                    src={logo}
                    alt='logo'
                    style={{
                        height: 80,
                        width: 80,
                    }}
                    priority={true}
                />
                <span className='text-white font-bold '>TECHNOVEGANZA 2024</span>
            </div>
            <div className='flex px-10 gap-10 items-center text-white'>
                <Link href={'/home'} className=' hover:p-1 transition duration-300 ease-in-out hover:rounded-lg'>Home</Link>
                <Link href={'/home/PID'} className=' hover:p-1 transition duration-300 ease-in-out hover:rounded-lg'>PID</Link>
                <Link href={'/home/TID'} className=' hover:p-1 transition duration-300 ease-in-out hover:rounded-lg'>TID</Link>
                <Link href={'/home/Events'} className=' hover:p-1 transition duration-300 ease-in-out hover:rounded-lg'>Events</Link>
            </div>
        </div>
    )
}
