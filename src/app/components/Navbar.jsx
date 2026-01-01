"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { assets } from '../../../assets/assets'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScroll, setIsScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        })
    }, []);

    return (
        <div className=''>
            <div className='hidden md:block fixed top-0 right-0 w-11/12 -z-10 translate-y-[-85%]'>
                <Image src={assets.header_bg_color} alt='' height={100} width={100} className='w-full' />
            </div>
            <nav className={`fixed top-0 z-50 w-full px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between
                ${isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm" : ""}`}>
                <Link href="#top" className="font-bold text-2xl">
                    <span className="text-red-500">AR_</span>ATIK.
                </Link>

                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 
                    ${isScroll ? "" : "bg-white/30 shadow-sm"} `}>
                    <li><Link className='font-ovo' href="#top">Home</Link></li>
                    <li><Link className='font-ovo' href="#about">About</Link></li>
                    <li><Link className='font-ovo' href="#services">Services</Link></li>
                    <li><Link className='font-ovo' href="#contact">Contact</Link></li>
                </ul>
                <div className='flex items-center gap-4'>
                    <button className='cursor-pointer'>
                        <Image src={assets.moon_icon} alt='' width={24} height={24} />
                    </button>
                    <Link
                        href="#contact"
                        className="hidden md:flex items-center gap-3 px-10 py-2.5 border border-gray-500 
                            rounded-full font-ovo">
                        Contact
                        <Image src={assets.arrow_icon} width={10} height={10} alt="arrow" />
                    </Link>
                    <button onClick={() => setMenuOpen(true)} className='cursor-pointer block md:hidden'>
                        <Image src={assets.menu_black} alt='' height={20} width={20} />
                    </button>
                </div>
                {/* mobile menu */}
                <ul className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed right-0 top-0
                        bottom-0 w-64 z-50 h-screen bg-rose-50 transition-transform duration-500
                        ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className='absolute top-6 right-6' onClick={() => setMenuOpen(false)}>
                        <Image src={assets.close_black} alt='' height={20} width={20}
                            className='cursor-pointer' />
                    </div>
                    <li><Link className='font-ovo' onClick={() => setMenuOpen(false)} href="#top">Home</Link></li>
                    <li><Link className='font-ovo' onClick={() => setMenuOpen(false)} href="#about">About</Link></li>
                    <li><Link className='font-ovo' onClick={() => setMenuOpen(false)} href="#services">Services</Link></li>
                    <li><Link className='font-ovo' onClick={() => setMenuOpen(false)} href="#contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar