import React from 'react'
import { assets, serviceData } from '../../../assets/assets'
import Image from 'next/image'

const Services = () => {
    return (
        <div id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-lg text-center mb-2 font-ovo'>What i offers</h4>
            <h2 className='text-5xl text-center font-ovo'>My services</h2>
            <p className='text-center font-ovo max-w-2xl mx-auto my-5'>I am a frontend developer from California, USA with 10 years of experience in multiple
                companies like Microsoft, Tesla and Apple.
            </p>

            <div className='grid grid-auto gap-6 my-5 sm:my-15'>
                {
                    serviceData.map((service, index) => (
                        <div key={index} className='border border-gray-400 rounded-lg p-5 cursor-pointer
                            hover:bg-[#fcf4ff] duration-500 hover:-translate-y-1 hover:shadow-[4px_4px_0_#000]'>
                            <Image src={service.icon} alt='' width={35} height={35} />
                            <h2 className='text-lg my-5 text-gray-700'>{service.title}</h2>
                            <p className='text-sm text-gray-600 leading-5'>{service.description}</p>
                            <p className='flex items-center gap-2 mt-5'>{service.link}Read more <Image src={assets.right_arrow} alt='' height={16} width={16} /></p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Services