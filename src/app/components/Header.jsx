import Image from 'next/image'
import React from 'react'
import { assets } from '../../../assets/assets'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen w-11/12 mx-auto text-center 
      gap-4 max-w-3xl'>
      <div>
        <Image src={assets.profile_img} alt='' height={100} width={100} className='rounded-full' />
      </div>
      <h2 className='flex items-center gap-1 text-xl md:text-2xl mb-2 font-ovo'>Hi! I am Atiur Rahman.
        <Image src={assets.hand_icon} height={20} width={20} alt='' />
      </h2>
      <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>
        Frontend web developer based in Bangladesh.
      </h1>
      <p className='max-w-2xl mx-auto font-ovo'>
        I am a frontend developer from California, USA with 10 years of experience in multiple
        companies like Microsoft, Tesla and Apple.
      </p>
      <div className='flex flex-col items-center sm:flex-row gap-4 mt-4'>
        <Link href="#contact" className='flex items-center gap-2 bg-black text-white border 
        border-white rounded-full px-10 py-3'>Contact Me<Image src={assets.right_arrow_white} 
        width={16} height={16} alt='' /></Link>

        <Link href="/sample-resume.pdf" download className='flex items-center gap-2 border 
        border-gray-500 rounded-full px-10 py-3'>My Resume<Image src={assets.download_icon} width={16} 
        height={16} alt='' /></Link>
      </div>

    </div>
  )
}

export default Header