import React from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import { BsCardHeading, BsImages } from 'react-icons/bs'
import { GiStabbedNote } from 'react-icons/gi'
import { Link } from 'react-router-dom'

function CardAddSection() {
    return (
        <>
            <div className='mx-5'>
                <div className='my-10'>
                    <h1 className='text-3xl font-bold'>Add Card</h1>
                    <button className='my-5 text-lightblue '>
                        <Link to='/homepages/card' className='flex items-center space-x-2'>
                            <span className=''><AiOutlineLeft /></span>
                            <span className=''>Go Back</span>
                        </Link>
                    </button>
                </div>
                <div className=' space-y-5 text-darktext'>

                    <div className=' flex w-full'>
                        <div className=' w-1/2 px-2 space-y-2'>
                            <div className='flex items-center space-x-2 text-lightblue'>
                                <span className='text-lg text-lightblue'><BsCardHeading /> </span>
                                <span className='text-lg'>Title</span>
                            </div>
                            <div className=''>
                                <input type='text'
                                    placeholder='give category title'
                                    className='px-3 w-full border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-text' />
                            </div>
                        </div>

                    </div>

                    <div className=' flex '>
                        <div className=' w-full px-2 space-y-2'>
                            <div className='flex items-center space-x-2 text-lightblue'>
                                <span className='text-lg text-lightblue'><GiStabbedNote /> </span>
                                <span className='text-lg'>Description</span>
                            </div>
                            <div className=''>
                                <input type='text'
                                    placeholder='give category description'
                                    className='px-3 w-full border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-text' />
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className=' w-1/2 px-2'>
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

                    <div className=' items-center justify-center'>

                        <div className='relative'>
                            <div className='h-52 w-72 overflow-hidden  '>
                                <img src='https://images4.alphacoders.com/931/93124.jpg' alt='img' className='rounded-xl w-full h-full' />
                            </div>

                        </div>


                    </div>

                    <div className=' flex '>
                        <div className=' w-full px-2 space-y-2'>
                            <div className='flex items-center space-x-2 text-lightblue'>
                                <span className='text-lg text-lightblue'><GiStabbedNote /> </span>
                                <span className='text-lg'>Tag</span>
                            </div>
                            <div className=''>
                                <input type='text'
                                    placeholder='give category description'
                                    className='px-3 w-full border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-text' />
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className=' w-1/2 px-2'>
                            <div className='flex items-center space-x-2 text-lightblue'>
                                <span className='text-lg text-lightblue'><BsImages /> </span>
                                <span className='text-lg'>Icons</span>
                            </div>
                            <div className=''>
                                <input type='file'
                                    placeholder='Longitude'
                                    className='px-3 w-full border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-text' />
                            </div>
                        </div>
                    </div>

                    <div className=' items-center justify-center'>

                        <div className='relative'>
                            <div className='h-52 w-72 overflow-hidden  '>
                                <img src='https://images4.alphacoders.com/931/93124.jpg' alt='img' className='rounded-xl w-full h-full' />
                            </div>

                        </div>


                    </div>

                    <div className=' flex justify-start mt-10 '>
                        <button className='bg-lightblue hover:bg-blue text-white px-7 py-2 rounded-lg'>Submit</button>
                    </div>

                </div>
            </div>

        </>
    )
}

export default CardAddSection