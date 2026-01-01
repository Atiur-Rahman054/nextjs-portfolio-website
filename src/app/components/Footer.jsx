import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { assets } from '../../../assets/assets'

const footer = () => {
    return (
        <div className='pt-15 pb-5 w-full py-5 px-[12%] scroll-mt-20'>
            <div className='text-center'>
                <Link href="#top" className="font-bold text-2xl">
                    <span className="text-red-500">AR_</span>ATIK.
                </Link>
            </div>
            <Link className='flex items-center justify-center gap-2 font-ovo mb-5 sm:mb-10'
                href={"https://mail.google.com/mail/u/0/#inbox?compose=new"} target='_blank'><Image src={assets.mail_icon} alt='' height={25} width={25} />
                atiurrahman054@gmail.com
            </Link>
            <div className='text-center sm:flex justify-between border-t border-gray-300 py-5'>
                <p className='text-sm mb-5 sm:mb-0'>© 2025 William Mark. All rights reserved.</p>
                <ul className='text-sm flex gap-5'>
                    <Link href="">Terms of Services</Link>
                    <Link href="">Privacy Policy</Link>
                    <Link href="">Connect with me</Link>
                </ul>
            </div>
        </div>
    )
}

export default footer