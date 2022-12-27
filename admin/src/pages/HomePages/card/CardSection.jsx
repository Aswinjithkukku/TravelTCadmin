import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { GoPlus } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'

function CardSection() {
    const navigate = useNavigate()
    return (
        <>
            <div className='mx-4'>
                <div className='space-y-4'>
                    <div className=' my-10'>
                        <h1 className='text-3xl font-bold text-darktext'>Cards</h1>

                    </div>
                    <div className=''>
                        <button className='bg-lightblue hover:bg-blue text-white rounded-lg px-5 py-2 flex items-center space-x-1' onClick={() => navigate('/homepages/card/add')}>
                            <span className='text-white'><GoPlus /></span>
                            <span className=''>New</span>
                        </button>
                    </div>
                    <div className='w-full overflow-hidden rounded-lg border border-lightblue'>
                        <table className='table w-full '>
                            <thead>
                                <tr>
                                    <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>#</th>
                                    <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>Title</th>
                                    <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>Description</th>
                                    <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>Image</th>
                                    <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>Tag</th>
                                    <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>Icon</th>
                                    <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>user</th>
                                    <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='group cursor-pointer'>
                                    <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>1</td>
                                    <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>special offer</td>
                                    <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>check this out</td>
                                    <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>
                                        <img src='https://images4.alphacoders.com/931/93124.jpg' alt='img' className='rounded-xl w-16 h-10' />
                                    </td>
                                    <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>Offer</td>
                                    <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>
                                        <img src='https://images4.alphacoders.com/931/93124.jpg' alt='img' className='rounded-xl w-16 h-10' />
                                    </td>
                                    <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>admin</td>
                                    <td className='py-3 px-2 text-left font-light hover:text-red-600 text-red-500 text-2xl flex space-x-2 items-center'>
                                        <span className='hover:text-red-600 text-red-500 text-2xl'>
                                            <AiFillDelete />
                                        </span>
                                    </td>
                                </tr>
                                <tr className='group cursor-pointer'>
                                    <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>2</td>
                                    <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>attraction offer</td>
                                    <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>check this out</td>
                                    <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>
                                        <img src='https://images4.alphacoders.com/931/93124.jpg' alt='img' className='rounded-xl w-16 h-10' />
                                    </td>
                                    <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>Offer</td>
                                    <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>
                                        <img src='https://images4.alphacoders.com/931/93124.jpg' alt='img' className='rounded-xl w-16 h-10' />
                                    </td>
                                    <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>admin</td>
                                    <td className='py-3 px-2 text-left font-light hover:text-red-600 text-red-500 text-2xl flex space-x-2 items-center'>
                                        <span className='hover:text-red-600 text-red-500 text-2xl'>
                                            <AiFillDelete />
                                        </span>
                                    </td>
                                </tr>
                                <tr className='group cursor-pointer'>
                                    <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>2</td>
                                    <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>combo offer</td>
                                    <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>check this out</td>
                                    <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>
                                        <img src='https://images4.alphacoders.com/931/93124.jpg' alt='img' className='rounded-xl w-16 h-10' />
                                    </td>
                                    <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>Offer</td>
                                    <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>
                                        <img src='https://images4.alphacoders.com/931/93124.jpg' alt='img' className='rounded-xl w-16 h-10' />
                                    </td>
                                    <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>admin</td>
                                    <td className='py-3 px-2 text-left font-light hover:text-red-600 text-red-500 text-2xl flex space-x-2 items-center'>
                                        <span className='hover:text-red-600 text-red-500 text-2xl'>
                                            <AiFillDelete />
                                        </span>
                                    </td>
                                </tr>
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardSection