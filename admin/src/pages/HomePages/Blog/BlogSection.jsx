import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { FaRegEdit  } from 'react-icons/fa'
import { GoPlus } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'

function BlogSection() {
    const navigate = useNavigate()
    return (
        <>
            <div className=''>
                <div className='space-y-4'>
                    <div className=' my-10'>
                        <h1 className='text-3xl font-bold text-darktext'>Blog</h1>
                    </div>
                    <div className=''>
                        <input type='checkbox' className='w-5 h-5' />
                        <label className='font-semibold text-lg px-2 '>is Blog enabled</label>
                    </div>
                    <div className=''>
                        <button className='bg-lightblue hover:bg-blue text-white rounded-lg px-5 py-2 flex items-center space-x-1' onClick={() => navigate('/homepages/blog/add')}>
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
                                    <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>Date</th>
                                    <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>Image</th>
                                    <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>Descriptions</th>
                                    <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>user</th>
                                    <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='group cursor-pointer'>
                                    <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>1</td>
                                    <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>Our Teams</td>
                                    <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>15/12/2022</td>
                                    <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>
                                        <img src='https://images4.alphacoders.com/931/93124.jpg' alt='img' className='rounded-xl w-20 h-12' />
                                    </td>
                                    <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext w-96'>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,</td>
                                    <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>admin</td>
                                    <td className='py-3 px-2 text-left font-light hover:text-red-600 text-red-500 text-2xl flex space-x-2 items-center'>
                                        <span className='hover:text-red-600 text-red-500 text-2xl'>
                                            <AiFillDelete />
                                        </span>
                                        <span className='hover:text-blue text-lightblue text-2xl' onClick={() => navigate('/homepages/blog/edit')}>
                                            <FaRegEdit />
                                        </span>
                                    </td>
                                </tr>
                                <tr className='group cursor-pointer'>
                                    <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>2</td>
                                    <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>Our Teams</td>
                                    <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>15/12/2022</td>
                                    <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>
                                        <img src='https://images4.alphacoders.com/931/93124.jpg' alt='img' className='rounded-xl w-20 h-12' />
                                    </td>
                                    <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,</td>
                                    <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>admin</td>
                                    <td className='py-3 px-2 text-left font-light hover:text-red-600 text-red-500 text-2xl flex space-x-2 items-center'>
                                        <span className='hover:text-red-600 text-red-500 text-2xl'>
                                            <AiFillDelete />
                                        </span>
                                        <span className='hover:text-blue text-lightblue text-2xl' onClick={() => navigate('/homepages/blog/edit')}>
                                            <FaRegEdit />
                                        </span>
                                    </td>
                                </tr>
                                <tr className='group cursor-pointer'>
                                    <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>3</td>
                                    <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>Our Teams</td>
                                    <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>15/12/2022</td>
                                    <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>
                                        <img src='https://images4.alphacoders.com/931/93124.jpg' alt='img' className='rounded-xl w-20 h-12' />
                                    </td>
                                    <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,</td>
                                    <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>admin</td>
                                    <td className='py-3 px-2 text-left font-light hover:text-red-600 text-red-500 text-2xl flex space-x-2 items-center'>
                                        <span className='hover:text-red-600 text-red-500 text-2xl'>
                                            <AiFillDelete />
                                        </span>
                                        <span className='hover:text-blue text-lightblue text-2xl' onClick={() => navigate('/homepages/blog/edit')}>
                                            <FaRegEdit />
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

export default BlogSection