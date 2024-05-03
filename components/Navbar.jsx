import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <header>
        <div className='container flex flex-row  justify-between px-5 py-2 bg-slate-500 text-white'>
            <span>LaCooperativa</span>
            <nav className='flex flex-row gap-1'>
                <Link href={"/about-us"}>About us</Link>
                <Link href={"/"}>Home</Link>
                <Link href={"/menu"}>Menu</Link>
            </nav>
        </div>
    </header>
  )
}

export default Navbar