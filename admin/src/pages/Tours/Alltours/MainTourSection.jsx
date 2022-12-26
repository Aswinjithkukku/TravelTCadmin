import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiFillDelete, AiOutlineSearch } from 'react-icons/ai'
import { FaRegEdit } from 'react-icons/fa'

function MainTourSection() {
  const navigate = useNavigate()

  return (
    <div className='mx-5'>
      <div className='my-10'>
        <h1 className='text-3xl font-bold'>Attraction</h1>
      </div>

      <div className=''>
        <div className='space-y-4'>

          <div className='flex'>
            <div className= 'w-full '>
              <div className=''>
                <input type='search'
                  placeholder='search.......!'
                  className='px-3 w-full border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-text' />
              </div>
            </div>
            <button className='bg-lightblue hover:bg-blue text-white rounded-lg px-5  flex items-center space-x-1'>
              <span className='text-white'><AiOutlineSearch /></span>
              <span className=''>Search</span>
            </button>
          </div>

          <div className='w-full overflow-hidden rounded-lg border border-lightblue'>
            <table className='table w-full '>
              <thead>
                <tr>
                  <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>#</th>
                  <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>Name</th>
                  <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>Booking Type</th>
                  <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>Offer</th>
                  <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>Address</th>
                  <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>Country</th>
                  <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>user</th>
                  <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>action</th>
                </tr>
              </thead>
              <tbody>
                <tr className='group cursor-pointer' onClick={() => navigate(`/tours/edit`)}>
                  <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>1</td>
                  <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>Dubai Frame</td>
                  <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>
                    <span className='bg-lightblue px-4 text-white rounded-md'>Ticket</span>
                  </td>
                  <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>
                    <span className='bg-red-500 px-4 text-white rounded-md'>false</span>
                  </td>
                  <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>Dubai</td>
                  <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>United Arab Emirates</td>
                  <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>admin</td>
                  <td className='py-3 px-2 text-left font-light  flex items-center space-x-2'>
                    <span className='hover:text-red-600 text-red-500 text-2xl'>
                      <AiFillDelete />
                    </span>
                    <span className='hover:text-blue text-lightblue text-2xl'>
                      <FaRegEdit />
                    </span>
                  </td>
                </tr>
                <tr className='group cursor-pointer' onClick={() => navigate(`/tours/edit`)}>
                  <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>1</td>
                  <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>Dubai Frame</td>
                  <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>
                    <span className='bg-lightblue px-4 text-white rounded-md'>Ticket</span>
                  </td>
                  <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>
                    <span className='bg-red-500 px-4 text-white rounded-md'>false</span>
                  </td>
                  <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>Dubai</td>
                  <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>United Arab Emirates</td>
                  <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>admin</td>
                  <td className='py-3 px-2 text-left font-light  flex items-center space-x-2'>
                    <span className='hover:text-red-600 text-red-500 text-2xl'>
                      <AiFillDelete />
                    </span>
                    <span className='hover:text-blue text-lightblue text-2xl'>
                      <FaRegEdit />
                    </span>
                  </td>
                </tr>
                <tr className='group cursor-pointer' onClick={() => navigate(`/tours/edit`)}>
                  <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>1</td>
                  <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>Dubai Frame</td>
                  <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>
                    <span className='bg-lightblue px-4 text-white rounded-md'>Ticket</span>
                  </td>
                  <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>
                    <span className='bg-red-500 px-4 text-white rounded-md'>false</span>
                  </td>
                  <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>Dubai</td>
                  <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>United Arab Emirates</td>
                  <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>admin</td>
                  <td className='py-3 px-2 text-left font-light  flex items-center space-x-2'>
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
      </div>
    </div>
  )
}

export default MainTourSection