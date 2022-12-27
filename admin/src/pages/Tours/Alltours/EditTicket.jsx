import React from 'react'
import { AiOutlineClockCircle, AiOutlineInfoCircle, AiOutlineLeft } from 'react-icons/ai'
import { FaBaby, FaChild, FaCrown, FaPersonBooth } from 'react-icons/fa'
import { GiStabbedNote } from 'react-icons/gi'
import { IoMan, IoPricetagsOutline } from 'react-icons/io5'
import { BsFillJournalBookmarkFill } from 'react-icons/bs'
import { MdPrecisionManufacturing } from 'react-icons/md'
import { Link } from 'react-router-dom'

function EditTicket() {
  return (
    <div className=''>

            <div className='p-7 space-y-4'>
                <div className=' my-10'>
                    <h1 className='text-3xl font-bold text-darktext'>Edit Ticket</h1>
                    <button className='my-5 text-lightblue '>
                        <Link to='/tours/edit' className='flex items-center space-x-2'>
                            <span className=''><AiOutlineLeft /></span>
                            <span className=''>Go Back</span>
                        </Link>
                    </button>
                </div>

                <div className=' flex w-full'>

                    <div className=' w-1/3 px-2'>
                        <div className='flex items-center space-x-2 text-lightblue'>
                            <span className='text-lg text-lightblue'><BsFillJournalBookmarkFill /> </span>
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

                    <div className=' w-1/3 px-2'>
                        <div className='flex items-center space-x-2 text-lightblue'>
                            <span className='text-lg text-lightblue'><FaCrown /> </span>
                            <span className='text-lg'>Option Name</span>
                        </div>
                        <div className=''>
                            <input type='text'
                                placeholder='give Option name'
                                className='px-3 w-full border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-text' />
                        </div>
                    </div>

                    <div className=' w-1/3 px-2'>
                        <div className='flex items-center space-x-2 text-lightblue'>
                            <span className='text-lg text-lightblue'><MdPrecisionManufacturing /> </span>
                            <span className='text-lg'>Facilities</span>
                        </div>
                        <div className=''>
                            <input type='text'
                                placeholder='give faclities'
                                className='px-3 w-full border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-text' />
                        </div>
                    </div>
                </div>

                <div className=' flex w-full'>
                    <div className=' w-1/3 px-2'>
                        <div className='flex items-center space-x-2 text-lightblue'>
                            <span className='text-lg text-lightblue'><IoMan /> </span>
                            <span className='text-lg'>Adult Age Limit</span>
                        </div>
                        <div className=''>
                            <input type='text'
                                placeholder='age limit of adult'
                                className='px-3 w-full border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-text' />
                        </div>
                    </div>

                    <div className=' w-1/3 px-2'>
                        <div className='flex items-center space-x-2 text-lightblue'>
                            <span className='text-lg text-lightblue'><FaChild /> </span>
                            <span className='text-lg'>Child Age Limit</span>
                        </div>
                        <div className=''>
                            <input type='text'
                                placeholder='age limit of child'
                                className='px-3 w-full border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-text' />
                        </div>
                    </div>

                    <div className=' w-1/3 px-2'>
                        <div className='flex items-center space-x-2 text-lightblue'>
                            <span className='text-lg text-lightblue'><FaBaby /> </span>
                            <span className='text-lg'>Infant Age Limit</span>
                        </div>
                        <div className=''>
                            <input type='text'
                                placeholder='age limit of infant'
                                className='px-3 w-full border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-text' />
                        </div>
                    </div>
                </div>

                <div className=' flex w-full'>
                    <div className=' w-1/3 px-2'>
                        <div className='flex items-center space-x-2 text-lightblue'>
                            <span className='text-lg text-lightblue'><IoMan /> </span>
                            <span className='text-lg'>Adult Price AED</span>
                        </div>
                        <div className=''>
                            <input type='text'
                                placeholder='price for adult'
                                className='px-3 w-full border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-text' />
                        </div>
                    </div>

                    <div className=' w-1/3 px-2'>
                        <div className='flex items-center space-x-2 text-lightblue'>
                            <span className='text-lg text-lightblue'><FaChild /> </span>
                            <span className='text-lg'>Child Price AED</span>
                        </div>
                        <div className=''>
                            <input type='text'
                                placeholder='price for child'
                                className='px-3 w-full border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-text' />
                        </div>
                    </div>

                    <div className=' w-1/3 px-2'>
                        <div className='flex items-center space-x-2 text-lightblue'>
                            <span className='text-lg text-lightblue'><FaBaby /> </span>
                            <span className='text-lg'>Infant Price AED</span>
                        </div>
                        <div className=''>
                            <input type='text'
                                placeholder='price for infant'
                                className='px-3 w-full border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-text' />
                        </div>
                    </div>
                </div>

                <div className='flex w-full  px-2'>
                    <div className='flex items-center space-x-2 w-1/2'>
                        <input id='api' type='checkbox' className='w-5 h-5' />
                        <label htmlFor='api' className=' text-lightblue text-lg'>
                            is Cancellable
                        </label>
                    </div>
                    <div className='items-center space-x-2 w-1/2'>
                        <input id='offer' type='checkbox' className='w-5 h-5 peer' />
                        <label htmlFor='offer' className=' text-lightblue text-lg'>
                            is Vat
                        </label>
                        <input type='number'
                            placeholder='vat'
                            className='peer-checked:block hidden px-3 w-full border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-text' />
                    </div>
                </div>

                <div className='flex w-full'>
                    <div className=' w-1/2 px-2'>
                        <div className='flex items-center space-x-2 text-lightblue'>
                            <span className='text-lg text-lightblue'><IoPricetagsOutline /> </span>
                            <span className='text-lg'>Private Price</span>
                        </div>
                        <div className=''>
                            <input type='number'
                                placeholder='private Price'
                                className='px-3 w-full border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-text' />
                        </div>
                    </div>

                    <div className=' w-1/2 px-2'>
                        <div className='flex items-center space-x-2 text-lightblue'>
                            <span className='text-lg text-lightblue'><IoPricetagsOutline /> </span>
                            <span className='text-lg'>Shared price</span>
                        </div>
                        <div className=''>
                            <input type='number'
                                placeholder='shared price'
                                className='px-3 w-full border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-text' />
                        </div>
                    </div>
                </div>

                <div className=' flex w-full'>

                    <div className=' w-1/2 px-2'>
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

                    <div className=' w-1/2 px-2'>
                        <div className='flex items-center space-x-2 text-lightblue'>
                            <span className='text-lg text-lightblue'><FaPersonBooth /> </span>
                            <span className='text-lg'>Base</span>
                        </div>
                        <div className=''>
                            <select className='px-3 w-full  border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl bg-light text-text' >
                                <option>choose one</option>
                                <option>person</option>
                                <option>private </option>
                                <option>shared </option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className=' w-full px-2'>
                    <div className='flex items-center space-x-2 text-lightblue'>
                        <span className='text-lg text-lightblue'><AiOutlineClockCircle /> </span>
                        <span className='text-lg'>Peak Time</span>
                    </div>
                    <div className=''>
                        <input type='text'
                            placeholder='eg: (hh:mm)'
                            className='px-3 w-full border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-text' />
                    </div>
                </div>

                <div className='w-full px-2'>
                    <div className='flex items-center space-x-2 text-lightblue'>
                        <span className='text-lg text-lightblue'><GiStabbedNote /> </span>
                        <span className='text-lg'>Note</span>
                    </div>
                    <textarea className='px-3 w-full  border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl bg-light text-text' />
                </div>

                <div className=' flex justify-end mt-10 mr-10'>
                    <button className='bg-lightblue hover:bg-blue text-white px-5 py-2 rounded-lg'>Update</button>
                </div>

            </div>

        </div>
  )
}

export default EditTicket