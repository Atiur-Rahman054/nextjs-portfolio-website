"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { assets } from '../../../assets/assets'

const Contact = () => {
    const [result, setResult] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setResult("sending...")

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
            access_key: "4d47ac4c-f798-4e6d-bdb6-f62455e2e7fc", // from web3
        };

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (data.success) {
                setResult("Message sent successfully!");
                e.target.reset();
            } else {
                setResult("Failed to send message.");
            }
        } catch (err) {
            setResult("Something went wrong!");
        }
    };
    return (
        <div id='contact' className='w-full py-5 px-[12%] scroll-mt-20 bg-[url("/footer-bg-color.png")] 
            bg-no-repeat bg-center bg-size-[90%_auto]'>
            <h4 className='text-lg text-center mb-2 font-ovo'>Connect with me</h4>
            <h2 className='text-5xl text-center font-ovo'>Get in touch</h2>
            <p className='text-center font-ovo max-w-2xl mx-auto my-5'>I had love to hear from you! If you have any questions, comments or
                feedback, please use the form below.
            </p>

            <form onSubmit={handleSubmit} className='max-w-2xl mx-auto'>
                <div className='grid grid-auto gap-5 my-10'>
                    <input type="text" name='name' placeholder='Enter your name' required
                        className='p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' />
                    <input type="email" name='email' placeholder='Enter your email' required
                        className='p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' />
                </div>
                <textarea rows={5} placeholder='Enter your message' name='message' required
                    className='p-3 outline-none border-[0.5px] border-gray-400 rounded-md 
                bg-white w-full mb-5'></textarea>

                <button className='w-max flex justify-between items-center gap-2 bg-black/80 py-3 px-8 
                    text-white rounded-full mx-auto cursor-pointer hover:bg-black duration-500'
                    type="submit">Submit Now<Image src={assets.right_arrow_white} alt='' height={20}
                        width={20} />
                </button>
                <p>{result}</p>
            </form>
        </div>
    )
}

export default Contact