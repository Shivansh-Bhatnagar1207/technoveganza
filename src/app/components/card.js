import Link from 'next/link'
import React from 'react'

export default function Card({ title, desc, link }) {
    return (
        <div>
            <Link href={link}><div className='flex justify-center items-center text-center h-64 border-black border-solid border-2 w-52 rounded-lg'>{title}<br />{desc}</div>

            </Link>
        </div>
    )
}
