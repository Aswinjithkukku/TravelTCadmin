import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BiPhoneCall } from 'react-icons/bi'
import { BsWhatsapp } from 'react-icons/bs'

function SocialSection() {
  return (
    <>
    <div className=''>

        <div className='p-7 space-y-4'>
            <div className=' my-10'>
                <h1 className='text-3xl font-bold text-darktext'>Socials</h1>

            </div>

            <div className=' flex w-full'>
                <div className=' w-1/2 px-2'>
                    <div className='flex items-center space-x-2 text-lightblue'>
                        <span className='text-lg text-lightblue'><BiPhoneCall /> </span>
                        <span className='text-lg'>Instagram</span>
                    </div>
                    <div className=''>
                        <input type='text'
                            placeholder='give primary Number'
                            className='px-3 w-full border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-text' />
                    </div>
                </div>

                <div className=' w-1/2 px-2'>
                    <div className='flex items-center space-x-2 text-lightblue'>
                        <span className='text-lg text-lightblue'><BiPhoneCall /> </span>
                        <span className='text-lg'>Facebook</span>
                    </div>
                    <div className=''>
                        <input type='text'
                            placeholder='give secondary number'
                            className='px-3 w-full border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-text' />
                    </div>
                </div>
            </div>

            <div className=' flex w-full'>
                <div className=' w-1/2 px-2'>
                    <div className='flex items-center space-x-2 text-lightblue'>
                        <span className='text-lg text-lightblue'><BsWhatsapp /> </span>
                        <span className='text-lg'>Twitter</span>
                    </div>
                    <div className=''>
                        <input type='text'
                            placeholder='give whatsapp Number'
                            className='px-3 w-full border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-text' />
                    </div>
                </div>

                <div className=' w-1/2 px-2'>
                    <div className='flex items-center space-x-2 text-lightblue'>
                        <span className='text-lg text-lightblue'><AiOutlineMail /> </span>
                        <span className='text-lg'>demo</span>
                    </div>
                    <div className=''>
                        <input type='text'
                            placeholder='give Email Id'
                            className='px-3 w-full border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-text' />
                    </div>
                </div>
            </div>

            <div className=' flex justify-end mt-10 mr-10'>
                <button className='bg-lightblue hover:bg-blue text-white px-5 py-2 rounded-lg'>Submit</button>
            </div>

        </div>
    </div>

</>
  )
}

export default SocialSection