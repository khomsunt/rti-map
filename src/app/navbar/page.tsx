import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='h-12 bg-blue-700'>
            <div className=" text-white flex justify-center">
                <div>Log</div>
                <div>
                    <Link className='p-3' href="/">Home</Link>
                    <Link className='p-3' href="/about">About</Link>
                    <Link className='p-3' href="/map">Map</Link>

                </div>
            </div>

        </nav>
    )
}

export default Navbar