import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { FaRegEdit } from 'react-icons/fa'
import { GoPlus } from 'react-icons/go'
import { Link, useNavigate } from 'react-router-dom'

function TicketSection() {
    const navigate = useNavigate()


    return (
        <>
            <div className='space-y-4'>
                <div className=''>
                    <button className='bg-lightblue hover:bg-blue text-white rounded-lg px-5 py-2 flex items-center space-x-1' onClick={() => navigate('/tours/ticket/add')}>
                        <span className='text-white'><GoPlus /></span>
                        <span className=''>New</span>
                    </button>
                </div>
                <div className='w-full overflow-hidden rounded-lg border border-lightblue'>
                    <table className='table w-full '>
                        <thead>
                            <tr>
                                <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>Action</th>
                                <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>#</th>
                                <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>Name</th>
                                <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>Age Limits</th>
                                <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>Prices</th>
                                <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>is Vat</th>
                                <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>Cancellable</th>
                                <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>Base</th>
                                <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>Status</th>
                                <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>User</th>
                                <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='group cursor-pointer'>
                                <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext' >
                                    <button className='px-4 rounded-md bg-lightblue text-white'>upload</button>
                                </td>
                                <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>1</td>
                                <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>Dubai Frame</td>
                                <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>Adult: 60, Child: 12, Infant: 2</td>
                                <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>Adult: 50 AED, Child: 50 AED, Infant: 0 AED</td>
                                <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>
                                    <button className='px-4 rounded-md bg-red-500 text-white'>false</button>
                                </td>
                                <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>
                                    <button className='px-4 rounded-md bg-red-500 text-white'>false</button>
                                </td>
                                <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>person</td>
                                <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>active</td>
                                <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>Admin</td>
                                <td className='py-3 px-2 text-left font-light hover:text-red-600 text-red-500 text-2xl flex items-center space-x-2'>
                                    <span className='hover:text-red-600 text-red-500 text-2xl'>
                                        <AiFillDelete />
                                    </span>
                                    <span className='hover:text-blue text-lightblue text-2xl'>
                                        <Link to='/tours/ticket/edit'>
                                            <FaRegEdit />
                                        </Link>
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

export default TicketSection