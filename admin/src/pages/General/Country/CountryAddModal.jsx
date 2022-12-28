import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BiRename } from 'react-icons/bi'
import { BsCardHeading } from 'react-icons/bs'
import { GiStabbedNote } from 'react-icons/gi'

function CountryAddModal({ view, setView}) {
  if(!view) return null
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 modal_overlay' onClick={() => setView(!view)}>
    <div className='h-full w-full flex justify-center items-center'>
        <div className='bg-white w-4/12  rounded-2xl max-h-[95vh] overflow-auto' onClick={(e) => e.stopPropagation()}>
            <div className=''>

                <div className='p-7 space-y-4'>
                    <div className='flex justify-between items-center'>
                        <p className='text-3xl font-bold text-darktext'></p>
                        <h1 className='text-3xl font-bold text-darktext'>Add Country</h1>
                        <h3 className='text-3xl font-bold text-darktext' onClick={() => setView(false)}><AiOutlineClose /></h3>
                    </div>


                        <div className=' w-full px-2'>
                            <div className='flex items-center space-x-2 text-lightblue'>
                                <span className='text-lg text-lightblue'><BiRename /> </span>
                                <span className='text-lg'>Name</span>
                            </div>
                            <div className=''>
                                <input type='text'
                                    placeholder='give category name'
                                    className='px-3 w-full border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-text' />
                            </div>
                        </div>

                        <div className=' w-full px-2'>
                            <div className='flex items-center space-x-2 text-lightblue'>
                                <span className='text-lg text-lightblue'><BsCardHeading /> </span>
                                <span className='text-lg'>isoCode</span>
                            </div>
                            <div className=''>
                                <input type='text'
                                    placeholder='give iso'
                                    className='px-3 w-full border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-text' />
                            </div>
                        </div>

                        <div className=' w-full px-2'>
                            <div className='flex items-center space-x-2 text-lightblue'>
                                <span className='text-lg text-lightblue'><BiRename /> </span>
                                <span className='text-lg'>PhoneCode</span>
                            </div>
                            <div className=''>
                                <input type='number'
                                    placeholder='give phone code '
                                    className='px-3 w-full border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-text' />
                            </div>
                        </div>

                        <div className=' w-full px-2'>
                            <div className='flex items-center space-x-2 text-lightblue'>
                                <span className='text-lg text-lightblue'><BsCardHeading /> </span>
                                <span className='text-lg'>Currency</span>
                            </div>
                            <div className=''>
                                <input type='text'
                                    placeholder='give currency type'
                                    className='px-3 w-full border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-text' />
                            </div>
                        </div>

                        <div className=' w-full px-2'>
                            <div className='flex items-center space-x-2 text-lightblue'>
                                <span className='text-lg text-lightblue'><BsCardHeading /> </span>
                                <span className='text-lg'>Currency Symbol</span>
                            </div>
                            <div className=''>
                                <input type='text'
                                    placeholder='give symbol of currency'
                                    className='px-3 w-full border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-text' />
                            </div>
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

export default CountryAddModal