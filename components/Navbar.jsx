import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <header>
        <div className='container flex flex-row  justify-between px-5 py-2 bg-yellow-500'>
            <span>LaCooperativa</span>
            <nav className='flex flex-row gap-1'>
                <Link href={"/about-us"}>About</Link>
                <Link href={"/"}>Home</Link>
                <Link href={"/platillos"}>Platillos</Link>
            </nav>
        </div>
    </header>
  )
}

export default Navbar