import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { GoPlus } from 'react-icons/go'

function TicketSection() {
    return (
        <div className='space-y-4'>
            <div className=''>
                <button className='bg-lightblue hover:bg-blue text-white rounded-lg px-5 py-2 flex items-center space-x-1'>
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
                            <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>Edit</td>
                            <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>1</td>
                            <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>Dubai Frame</td>
                            <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>Adult: 60, Child: 12, Infant: 2</td>
                            <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>Adult: 50 AED, Child: 50 AED, Infant: 0 AED</td>
                            <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>false</td>
                            <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>false</td>
                            <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>person</td>
                            <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>active</td>
                            <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>Admin</td>
                            <td className='py-3 px-2 text-left font-light hover:text-red-600 text-red-500 text-2xl'><AiFillDelete /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TicketSection