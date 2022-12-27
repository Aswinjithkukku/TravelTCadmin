import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { GiIsland } from 'react-icons/gi'


function TopSellingAddModal({ view, setView}) {
    if (!view) return null
    return (
        <div className='fixed top-0 bottom-0 left-0 right-0 modal_overlay' onClick={() => setView(!view)}>
            <div className='h-full w-full flex justify-center items-center'>
                <div className='bg-white w-5/12  rounded-2xl max-h-[95vh] overflow-auto' onClick={(e) => e.stopPropagation()}>
                    <div className=''>

                        <div className='p-7 space-y-4'>
                            <div className='flex justify-between items-center'>
                                <p className='text-3xl font-bold text-darktext'></p>
                                <h1 className='text-3xl font-bold text-darktext'>Add Excursion</h1>
                                <h3 className='text-3xl font-bold text-darktext' onClick={() => setView(false)}><AiOutlineClose /></h3>
                            </div>

                            <div className=' flex w-full'>
                                <div className=' w-10/12 px-2'>
                                    <div className='flex items-center space-x-2 text-lightblue'>
                                        <span className='text-lg text-lightblue'><GiIsland /> </span>
                                        <span className='text-lg'>Excusrion</span>
                                    </div>
                                    <div className=''>
                                        <select className='px-3 w-full border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-text' >
                                            <option>Choose One</option>
                                            <option>Burj Khalifa</option>
                                            <option>Dubai Frame</option>
                                        </select>
                                    </div>
                                </div>


                                <div className=' flex justify-end items-end '>
                                    <button className='py-3 px-5 bg-lightblue hover:bg-blue text-white rounded-lg'>Add</button>
                                </div>

                            </div>



                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}
export default TopSellingAddModal