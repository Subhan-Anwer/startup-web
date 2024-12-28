"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from "next/image";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className='w-full bg-[#74c69d] flex flex-col'>
            {/* Main Navbar */}
            <div className='flex justify-center items-center h-[123px]'>
                <div className='flex justify-between items-center w-full max-w-[1186px] px-4'>
                    {/* Logo and Title */}
                    <div className='flex items-center gap-3'>
                        <Image src="/logo.png" alt="logo" width={60} height={60} />
                        <h1 className='text-white text-[35px]'>Start</h1>
                    </div>

                    {/* Desktop Menu */}
                    <ul className='hidden sm:flex gap-8 text-white text-[18px] font-light'>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/portfolio'>Portfolio</Link></li>
                        <li><Link href='/services'>Services</Link></li>
                        <li><Link href='/contact'>Contact</Link></li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <button 
                        className='sm:hidden'
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={3} 
                            stroke="white" 
                            className="w-9 h-9"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className='sm:hidden bg-[#74c69d] w-full'>
                    <ul className='flex flex-col items-center gap-4 py-4 text-white text-[18px] font-light'>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/portfolio'>Portfolio</Link></li>
                        <li><Link href='/services'>Services</Link></li>
                        <li><Link href='/contact'>Contact</Link></li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Navbar