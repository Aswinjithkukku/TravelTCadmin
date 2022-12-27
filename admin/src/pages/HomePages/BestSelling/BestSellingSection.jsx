import React, { useState } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { GoPlus } from 'react-icons/go'
import AddModal from './AddModal'

function BestSellingSection() {

    const  [ view, setView ] = useState(false)
  return (
    <>
    <div className='mx-4'>
        <div className='space-y-4'>
            <div className=' my-10'>
                <h1 className='text-3xl font-bold text-darktext'>Best Selling</h1>

            </div>
            <div className=''>
                <button className='bg-lightblue hover:bg-blue text-white rounded-lg px-5 py-2 flex items-center space-x-1' onClick={() => setView(!view)}>
                    <span className='text-white'><GoPlus /></span>
                    <span className=''>New</span>
                </button>
            </div>
            <div className='w-full overflow-hidden rounded-lg border border-lightblue'>
                <table className='table w-full '>
                    <thead>
                        <tr>
                            <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>#</th>
                            <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>name</th>
                            <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>price</th>
                            <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>user</th>
                            <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='group cursor-pointer'>
                            <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>1</td>
                            <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>Burj Khalifa</td>
                            <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>150 AED</td>
                            <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>admin</td>
                            <td className='py-3 px-2 text-left font-light hover:text-red-600 text-red-500 text-2xl flex space-x-2 items-center'>
                                <span className='hover:text-red-600 text-red-500 text-2xl'>
                                    <AiFillDelete />
                                </span>
                            </td>
                        </tr>
                        <tr className='group cursor-pointer'>
                            <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>2</td>
                            <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>Museum of Future</td>
                            <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>160 AED</td>
                            <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>admin</td>
                            <td className='py-3 px-2 text-left font-light hover:text-red-600 text-red-500 text-2xl flex space-x-2 items-center'>
                                <span className='hover:text-red-600 text-red-500 text-2xl'>
                                    <AiFillDelete />
                                </span>
                            </td>
                        </tr>
                        <tr className='group cursor-pointer'>
                            <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>3</td>
                            <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>Dubai Frame</td>
                            <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>155 AED</td>
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
    {view && (
        <AddModal view={view} setView={setView} />
    )}
</>
  )
}

export default BestSellingSection