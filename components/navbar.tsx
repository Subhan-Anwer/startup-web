import React from 'react'
import Link from 'next/link'
import Image from "next/image";

const Navbar = () => {
    return (
        <div className='w-full h-[123px] bg-[#74c69d] flex justify-center items-center'>
            <div className='frame flex justify-between items-center w-[1186px] h-[49px] mx-[35px]'>
                <div className='flex items-center gap-3'>
                    <Image src={"/logo.png"} alt="logo" width={60} height={60}></Image>
                    <h1 className='text-white text-[35px]'>Start</h1>
                </div>
                <ul className='sm:flex gap-8 text-white text-[18px] font-light hidden'>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/'>Portfolio</Link></li>
                    <li><Link href='/'>Services</Link></li>
                    <li><Link href='/'>Contact</Link></li>
                </ul>
                <button className='sm:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="w-9 h-9">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Navbar