import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { FaRegEdit } from 'react-icons/fa'

function OrdersTableSection() {
  return (
    <div className='w-full border-lightblue'>
    <table className='table w-full border-separate border-spacing-2 border border-slate-500'>
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
        <tr className='group cursor-pointer bg-soft' >
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
        <tr className='group cursor-pointer bg-soft' >
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
        <tr className='group cursor-pointer bg-soft' >
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
  )
}

export default OrdersTableSection