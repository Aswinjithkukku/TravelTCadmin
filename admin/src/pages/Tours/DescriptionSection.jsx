import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { GoPlus } from 'react-icons/go'

function DescriptionSection() {
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
                            <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>dhgfhjsdg fhjgshjfgs hgdhfsdgf</td>
                            <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>admin</td>
                            <td className='py-3 px-2 text-left font-light hover:text-red-600 text-red-500 text-2xl'><AiFillDelete /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default DescriptionSection