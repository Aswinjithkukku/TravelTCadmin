import React from 'react'
import { AiFillDelete, AiOutlineYoutube } from 'react-icons/ai'
import { BsImages, BsLink } from 'react-icons/bs'

function MediaSection() {
    return (
        <div>
            <div className=' space-y-5'>

                <div className=' flex '>
                    <div className=' w-1/3 px-2'>
                        <div className='flex items-center space-x-2 text-lightblue'>
                            <span className='text-lg text-lightblue'><AiOutlineYoutube /> </span>
                            <span className='text-lg'>Youtube</span>
                        </div>
                        <div className=''>
                            <input type='text'
                                placeholder='url'
                                className='px-3 w-full border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-text' />
                        </div>
                    </div>
                    <div className=' w-1/3 px-2'>
                        <div className='flex items-center space-x-2 text-lightblue'>
                            <span className='text-lg text-lightblue'><BsLink /> </span>
                            <span className='text-lg'>Link</span>
                        </div>
                        <div className='flex space-x-3 py-4 items-center'>
                            <div className=''>
                                https://abscomndt.sdumsldj.jdgfj.com
                            </div>
                            <div className='text-2xl text-red-500'>
                                <AiFillDelete />
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className=' w-1/3 px-2'>
                        <div className='flex items-center space-x-2 text-lightblue'>
                            <span className='text-lg text-lightblue'><BsImages /> </span>
                            <span className='text-lg'>Images</span>
                        </div>
                        <div className=''>
                            <input type='file'
                                placeholder='Longitude'
                                className='px-3 w-full border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-text' />
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-5 gap-3 items-center justify-center'>

                    <div className='relative'>
                        <div className='h-52 overflow-hidden  '>
                            <img src='https://images4.alphacoders.com/931/93124.jpg' alt='img' className='rounded-xl w-full h-full' />
                        </div>
                        <div className='absolute group top-0 left-0 right-0 bottom-0 hover:bg-trans flex justify-center items-center transition-all duration-500'>
                            <div className='text-red-600 text-5xl scale-0 group-hover:scale-100 transition-all duration-500'><AiFillDelete /></div>
                        </div>
                    </div>

                    <div className='relative'>
                        <div className='h-52 overflow-hidden  '>
                            <img src='https://images4.alphacoders.com/931/93124.jpg' alt='img' className='rounded-xl w-full h-full' />
                        </div>
                        <div className='absolute group top-0 left-0 right-0 bottom-0 hover:bg-trans flex justify-center items-center transition-all duration-500'>
                            <div className='text-red-600 text-5xl scale-0 group-hover:scale-100 transition-all duration-500'><AiFillDelete /></div>
                        </div>
                    </div>

                    <div className='relative'>
                        <div className='h-52 overflow-hidden  '>
                            <img src='https://images4.alphacoders.com/931/93124.jpg' alt='img' className='rounded-xl w-full h-full' />
                        </div>
                        <div className='absolute group top-0 left-0 right-0 bottom-0 hover:bg-trans flex justify-center items-center transition-all duration-500'>
                            <div className='text-red-600 text-5xl scale-0 group-hover:scale-100 transition-all duration-500'><AiFillDelete /></div>
                        </div>
                    </div>

                    <div className='relative'>
                        <div className='h-52 overflow-hidden  '>
                            <img src='https://images4.alphacoders.com/931/93124.jpg' alt='img' className='rounded-xl w-full h-full' />
                        </div>
                        <div className='absolute group top-0 left-0 right-0 bottom-0 hover:bg-trans flex justify-center items-center transition-all duration-500'>
                            <div className='text-red-600 text-5xl scale-0 group-hover:scale-100 transition-all duration-500'><AiFillDelete /></div>
                        </div>
                    </div>
                </div>

                <div className=' flex justify-start mt-10 '>
                    <button className='bg-lightblue hover:bg-blue text-white px-7 py-2 rounded-lg'>Submit</button>
                </div>

            </div>
        </div>
    )
}

export default MediaSection