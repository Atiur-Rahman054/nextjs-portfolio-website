import Image from 'next/image'
import React from 'react'
import { assets, infoList, toolsData } from '../../../assets/assets'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] scroll-mt-20'>
      <h4 className='text-lg font-ovo text-center mb-2'>Introduction</h4>
      <h2 className='text-5xl font-ovo text-center'>About Me</h2>
      <div className='flex w-full flex-col lg:flex-row gap-10 lg:gap-20 my-5 sm:my-15'>
        <div className='flex justify-center lg:justify-normal sm:w-65 sm:h-85 shrink-0 '>
          <Image src={assets.user_image} width={260} height={350} alt='user' className='rounded-3xl' />
        </div>
        <div className='flex-1'>
          <p className='mb-5 max-w-2xl font-ovo text-center lg:text-start'>I am an experienced Frontend Developer with over a decade of professional expertise in the
            field. Throughout my career, I have had the privilege of collaborating with prestigious
            organizations, contributing to their success and growth.</p>
          <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {
              infoList.map((item, index) => (
                <li key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer
                hover:bg-[#fcf4ff] duration-500 hover:-translate-y-1 hover:shadow-[4px_4px_0_#000]'>
                  <Image src={item.icon} alt={item.title} height={20} width={20} />
                  <h2 className='font-semibold text-gray-700 my-2'>{item.title}</h2>
                  <p className='text-gray-600 text-sm'>{item.description}</p>
                </li>
              ))
            }
          </ul>
          <div>
            <h4 className='my-3 text-gray-700 font-ovo'>Tools I use</h4>
            <ul className='flex items-center gap-3 sm:gap-5'>
              {
                toolsData.map((tools, index) => (
                  <li key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square 
                  border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                    <Image className='w-5 sm:w-7' src={tools} alt='' height={28} width={28} />
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About