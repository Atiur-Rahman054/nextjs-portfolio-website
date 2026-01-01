import React from 'react'
import { assets, workData } from '../../../assets/assets'
import Image from 'next/image'
import Link from 'next/link'

const Work = () => {
    return (
        <div id='' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-lg text-center mb-2 font-ovo'>My portfolio</h4>
            <h2 className='text-5xl text-center font-ovo'>My latest work</h2>
            <p className='text-center font-ovo max-w-2xl mx-auto my-5'>Welcome to my web development portfolio! Explore a collection of projects showcasing
                my expertise in front-end development.
            </p>
            <div className='grid grid-auto gap-5'>
                {
                    workData.map((project, index) => (
                        <div key={index} className='aspect-square bg-no-repeat bg-cover bg-center 
                        rounded-lg cursor-pointer relative group'
                            style={{ backgroundImage: `url(${project.bgImage})` }}>
                            <div className='bg-white flex items-center gap-3 leading-6 w-10/12
                            rounded-md absolute bottom-5 right-5 p-2 group-hover:bottom-7 duration-500'>
                                <div>
                                    <h2 className='font-semibold'>{project.title}</h2>
                                    <p className='text-sm text-gray-700'>{project.description}</p>
                                </div>
                                <div className='flex items-center justify-center p-1 border border-black 
                                    rounded-full shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition-all'>
                                    <Image className='' 
                                    src={assets.send_icon} alt='' height={16} width={16} />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='my-10 sm:my-15'>
                <Link className='flex items-center justify-center gap-2 border-[0.5px] border-gray-700 
                rounded-full py-3 px-7 mx-auto w-max text-gray-700 hover:bg-[#fcf4ff] duration-300' href="">See more<Image src={assets.right_arrow_bold} alt='' height={20} 
                width={20} /></Link>
            </div>
        </div>
    )
}

export default Work