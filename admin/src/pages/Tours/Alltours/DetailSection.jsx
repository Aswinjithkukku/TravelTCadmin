import React from 'react'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { IoLocationOutline } from 'react-icons/io5'
import { GiStabbedNote, GiWorld, GiTicket } from 'react-icons/gi'
import { BiRename, BiSort } from 'react-icons/bi'
import { FaPersonBooth, FaAddressCard } from 'react-icons/fa'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { TbWorldLatitude, TbWorldLongitude } from 'react-icons/tb'

function DetailSection() {
    return (
        <div className=''>
            <div className='w-full flex '>
                <div className='w-6/12  space-y-3 border-r'>

                    <div className=' flex '>
                        <div className=' w-1/2 '>
                            <div className='flex items-center space-x-2 text-lightblue'>
                                <span className='text-lg text-blue'><BiRename /> </span>
                                <span className='text-lg '>Attraction Name</span>
                            </div>
                            <div className=''>
                                <input type='text'
                                    placeholder='Where do you want to go?'
                                    className='px-3 w-full border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-text' />
                            </div>
                        </div>

                        <div className=' w-1/2 px-2'>
                            <div className='flex items-center space-x-2 text-lightblue'>
                                <span className='text-lg text-lightblue'><BiSort /> </span>
                                <span className='text-lg'>Type</span>
                            </div>
                            <div className=''>
                                <select className='px-3 w-full  border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl bg-light text-text' >
                                    <option>choose one</option>
                                    <option>data</option>
                                    <option>data </option>
                                    <option>data </option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className=' flex w-full'>
                        <div className=' w-1/2 px-2'>
                            <div className='flex items-center space-x-2 text-lightblue'>
                                <span className='text-lg text-lightblue'><GiWorld /> </span>
                                <span className='text-lg'>Country</span>
                            </div>
                            <div className=''>
                                <select className='px-3 w-full  border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl bg-light text-text' >
                                    <option>choose one</option>
                                    <option>data</option>
                                    <option>data </option>
                                    <option>data </option>
                                </select>
                            </div>
                        </div>

                        <div className=' w-1/2 px-2'>
                            <div className='flex items-center space-x-2 text-lightblue'>
                                <span className='text-lg text-lightblue'><IoLocationOutline /> </span>
                                <span className='text-lg'>Destination</span>
                            </div>
                            <div className=''>
                                <select className='px-3 w-full  border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl bg-light text-text' >
                                    <option>choose one</option>
                                    <option>data</option>
                                    <option>data </option>
                                    <option>data </option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='w-full px-2'>
                        <div className='flex items-center space-x-2 text-lightblue'>
                            <span className='text-lg text-lightblue'><FaAddressCard /> </span>
                            <span className='text-lg'>Address</span>
                        </div>
                        <input className='px-3 w-full  border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl bg-light text-text' />
                    </div>


                </div>

                <div className='w-6/12  space-y-3'>

                    {/* <div className=' flex w-full'>
                        <div className=' w-1/2 px-2'>
                            <div className='flex items-center space-x-2 text-lightblue'>
                                <span className='text-lg text-lightblue'><GiTicket /> </span>
                                <span className='text-lg'>Booking Type</span>
                            </div>
                            <div className=''>
                                <select className='px-3 w-full  border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl bg-light text-text' >
                                    <option>choose one</option>
                                    <option>data</option>
                                    <option>data </option>
                                    <option>data </option>
                                </select>
                            </div>
                        </div>

                        <div className=' w-1/2 px-2'>
                            <div className='flex items-center space-x-2 text-lightblue'>
                                <span className='text-lg text-lightblue'><FaPersonBooth /> </span>
                                <span className='text-lg'>Base</span>
                            </div>
                            <div className=''>
                                <select className='px-3 w-full  border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl bg-light text-text' >
                                    <option>choose one</option>
                                    <option>data</option>
                                    <option>data </option>
                                    <option>data </option>
                                </select>
                            </div>
                        </div>
                    </div> */}

                    <div className='flex w-full py-10 px-2 space-x-2'>
                        <div className=' items-center space-x-2 w-1/2'>
                            <input id='api' type='checkbox' className='w-5 h-5 peer' />
                            <label htmlFor='api' className=' text-lightblue text-lg'>
                                is Api Connected
                            </label>
                            <select className='w-full peer-checked:block hidden px-3  border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl bg-light text-text'>
                                <option>Choose api</option>
                                <option>api title</option>
                            </select>
                        </div>
                        <div className=' w-1/2 px-2'>
                            <div className='flex items-center space-x-2 text-lightblue'>
                                <span className='text-lg text-lightblue'><FaPersonBooth /> </span>
                                <span className='text-lg'>is Offer</span>
                            </div>
                            <div className=''>
                                <select className='px-3 w-full  border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl bg-light text-text' >
                                    <option>choose one</option>
                                    <option>flat</option>
                                    <option>discount </option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className=' flex w-full'>
                        <div className=' w-1/3 px-2'>
                            <div className='flex items-center space-x-2 text-lightblue'>
                                <span className='text-lg text-lightblue'><AiOutlineInfoCircle /> </span>
                                <span className='text-lg'>Status</span>
                            </div>
                            <div className=''>
                                <select className='px-3 w-full  border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl bg-light text-text' >
                                    <option>choose one</option>
                                    <option>data</option>
                                    <option>data </option>
                                    <option>data </option>
                                </select>
                            </div>
                        </div>

                        <div className=' w-1/3 px-2'>
                            <div className='flex items-center space-x-2 text-lightblue'>
                                <span className='text-lg text-lightblue'><TbWorldLatitude /> </span>
                                <span className='text-lg'>Latitude</span>
                            </div>
                            <div className=''>
                                <input type='text'
                                    placeholder='Latitude'
                                    className='px-3 w-full border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-text' />
                            </div>
                        </div>

                        <div className=' w-1/3 px-2'>
                            <div className='flex items-center space-x-2 text-lightblue'>
                                <span className='text-lg text-lightblue'><TbWorldLongitude /> </span>
                                <span className='text-lg'>Longitude</span>
                            </div>
                            <div className=''>
                                <input type='text'
                                    placeholder='Longitude'
                                    className='px-3 w-full border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-text' />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className=' flex justify-end mt-10 mr-10'>
                <button className='bg-lightblue hover:bg-blue text-white px-5 py-2 rounded-lg'>Submit</button>
            </div>
        </div>
    )
}

export default DetailSection