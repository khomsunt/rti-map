import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='h-12 bg-blue-700'>
            <div className=" text-white flex justify-between pt-3 px-5">
                <div>Logo</div>
                <div className='space-x-2'>
                    <Link className='p-1 px-2 hover:bg-white hover:text-blue-700 rounded-lg' href="/">Home</Link>
                    <Link className='p-1 px-2 hover:bg-white hover:text-blue-700 rounded-lg' href="/about">About</Link>
                    <Link className='p-1 px-2 hover:bg-white hover:text-blue-700 rounded-lg' href="/map">Map</Link>
                </div>
            </div>

        </nav>
    )
}

export default Navbar