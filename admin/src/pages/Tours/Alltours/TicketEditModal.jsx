import React from 'react'
import { AiOutlineClockCircle, AiOutlineClose, AiOutlineInfoCircle } from 'react-icons/ai'
import { FaBaby, FaChild, FaCrown, FaPersonBooth } from 'react-icons/fa'
import { GiStabbedNote } from 'react-icons/gi'
import { IoMan } from 'react-icons/io5'
import { MdPrecisionManufacturing } from 'react-icons/md'

function TicketEditModal({ editView, setEditView }) {
    if (!editView) return null
    return (
        <div className='fixed top-0 bottom-0 left-0 right-0 modal_overlay' onClick={() => setEditView(!editView)}>
            <div className='h-full w-full flex justify-center items-center'>
                <div className='bg-white w-8/12  rounded-2xl max-h-[95vh] overflow-auto' onClick={(e) => e.stopPropagation()}>
                    <div className=''>

                        <div className='p-7 space-y-4'>
                            <div className='flex justify-between items-center'>
                                <p className='text-3xl font-bold text-darktext'></p>
                                <h1 className='text-3xl font-bold text-darktext'>Edit Option</h1>
                                <h3 className='text-3xl font-bold text-darktext' onClick={() => setEditView(false)}><AiOutlineClose /></h3>
                            </div>

                            <div className=' flex w-full'>
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

                            <div className='flex w-full py-10 px-2'>
                                <div className='flex items-center space-x-2 w-1/2'>
                                    <input id='api' type='checkbox' className='w-5 h-5' />
                                    <label htmlFor='api' className=' text-lightblue text-lg'>
                                        is Cancellable
                                    </label>
                                </div>
                                <div className='flex items-center space-x-2 w-1/2'>
                                    <input id='offer' type='checkbox' className='w-5 h-5' />
                                    <label htmlFor='offer' className=' text-lightblue text-lg'>
                                        is Vat
                                    </label>
                                </div>
                            </div>

                            <div className=' flex w-full'>
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
                                <button className='bg-lightblue hover:bg-blue text-white px-5 py-2 rounded-lg'>Submit</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default TicketEditModal