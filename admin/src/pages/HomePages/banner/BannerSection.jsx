import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { FaRegEdit } from 'react-icons/fa'
import { GoPlus } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'

function BannerSection() {
  const navigate = useNavigate()

  return (
    <>
      <div className='mx-5'>
        <div className='my-10'>
          <h1 className='text-3xl font-bold'>Banner </h1>
        </div>
        <div className='flex space-x-2'>
          <div className='py-5'>
            <button className='bg-lightblue hover:bg-blue text-white rounded-lg px-5 py-2 flex items-center space-x-1'
            onClick={() => navigate('/homepages/banner/add')}
            >
                <span className='text-white'><GoPlus /></span>
                <span className=''>New</span>
            </button>
          </div>
        </div>
        <div className='w-full overflow-hidden rounded-lg border border-lightblue'>
                    <table className='table w-full '>
                        <thead>
                            <tr>
                                <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>#</th>
                                <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>Title</th>
                                <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>Description</th>
                                <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>Image</th>
                                <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>user</th>
                                <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='group cursor-pointer'>
                                <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>1</td>
                                <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>We are the champions</td>
                                <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>this is the world within another world</td>
                                <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>
                                <img src='https://images4.alphacoders.com/931/93124.jpg' alt='img' className='rounded-xl w-16 h-10' />
                                </td>
                                <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>admin</td>
                                <td className='py-3 px-2 text-left font-light hover:text-red-600 text-red-500 text-2xl flex space-x-2 items-center'>
                                    <span className='hover:text-red-600 text-red-500 text-2xl'>
                                        <AiFillDelete />
                                    </span>
                                    <span className='hover:text-blue text-lightblue text-2xl' onClick={() => navigate('/homepages/banner/edit')}>
                                        <FaRegEdit />
                                    </span>
                                </td>
                            </tr>
                            <tr className='group cursor-pointer'>
                                <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>1</td>
                                <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>We are the champions</td>
                                <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>this is the world within another world</td>
                                <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>
                                <img src='https://images4.alphacoders.com/931/93124.jpg' alt='img' className='rounded-xl w-16 h-10' />
                                </td>
                                <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>admin</td>
                                <td className='py-3 px-2 text-left font-light hover:text-red-600 text-red-500 text-2xl flex space-x-2 items-center'>
                                    <span className='hover:text-red-600 text-red-500 text-2xl'>
                                        <AiFillDelete />
                                    </span>
                                    <span className='hover:text-blue text-lightblue text-2xl' onClick={() => navigate('/homepages/banner/edit')}>
                                        <FaRegEdit />
                                    </span>
                                </td>
                            </tr>
                            <tr className='group cursor-pointer'>
                                <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>1</td>
                                <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>We are the champions</td>
                                <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>this is the world within another world</td>
                                <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>
                                <img src='https://images4.alphacoders.com/931/93124.jpg' alt='img' className='rounded-xl w-16 h-10' />
                                </td>
                                <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>admin</td>
                                <td className='py-3 px-2 text-left font-light hover:text-red-600 text-red-500 text-2xl flex space-x-2 items-center'>
                                    <span className='hover:text-red-600 text-red-500 text-2xl'>
                                        <AiFillDelete />
                                    </span>
                                    <span className='hover:text-blue text-lightblue text-2xl' onClick={() => navigate('/homepages/banner/edit')}>
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

export default BannerSection