import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { FaRegEdit } from 'react-icons/fa'
import { GoPlus } from 'react-icons/go'
import { Link, useNavigate } from 'react-router-dom'

function DescriptionSection() {
    const navigate = useNavigate()
    return (
        <>
            <div className='space-y-4'>
                <div className=''>
                    <button className='bg-lightblue hover:bg-blue text-white rounded-lg px-5 py-2 flex items-center space-x-1' onClick={() => navigate('/tours/description')}>
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
                                <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>user</th>
                                <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>actiion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='group cursor-pointer'>
                                <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>1</td>
                                <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>Description</td>
                                <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>this is a great place of dubai</td>
                                <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>admin</td>
                                <td className='py-3 px-2 text-left font-light hover:text-red-600 text-red-500 text-2xl flex space-x-2 items-center'>
                                    <span className='hover:text-red-600 text-red-500 text-2xl'>
                                        <AiFillDelete />
                                    </span>
                                    <span className='hover:text-blue text-lightblue text-2xl'>
                                        <FaRegEdit />
                                    </span>
                                </td>
                            </tr>
                            <tr className='group cursor-pointer'>
                                <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>1</td>
                                <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>Policy</td>
                                <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>this is a great place of dubai</td>
                                <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>admin</td>
                                <td className='py-3 px-2 text-left font-light hover:text-red-600 text-red-500 text-2xl flex space-x-2 items-center'>
                                    <span className='hover:text-red-600 text-red-500 text-2xl'>
                                        <AiFillDelete />
                                    </span>
                                    <span className='hover:text-blue text-lightblue text-2xl'>
                                        <FaRegEdit />
                                    </span>
                                </td>
                            </tr>
                            <tr className='group cursor-pointer'>
                                <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>1</td>
                                <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>How it Works</td>
                                <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>this is a great place of dubai</td>
                                <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>admin</td>
                                <td className='py-3 px-2 text-left font-light hover:text-red-600 text-red-500 text-2xl flex space-x-2 items-center'>
                                    <span className='hover:text-red-600 text-red-500 text-2xl'>
                                        <AiFillDelete />
                                    </span>
                                    <span className='hover:text-blue text-lightblue text-2xl'>
                                        <FaRegEdit />
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>


    )
}

export default DescriptionSection