import React, { useState } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { FaRegEdit } from 'react-icons/fa'
import { GoPlus } from 'react-icons/go'
import CountryAddModal from './CountryAddModal'

function CountrySection() {
    const [ view, setView ] = useState(false)
    return (
        <>
            <div className='mx-4'>
                <div className='space-y-4'>
                    <div className=' my-10'>
                        <h1 className='text-3xl font-bold text-darktext'>Country</h1>

                    </div>
                    <div className=''>
                        <button className='bg-lightblue hover:bg-blue text-white rounded-lg px-5 py-2 flex items-center space-x-1' onClick={() => setView(!view)}>
                            <span className='text-white'><GoPlus /></span>
                            <span className=''>New</span>
                        </button>
                    </div>
                    <div className='w-8/12 overflow-hidden rounded-lg border border-lightblue'>
                        <table className='table w-full '>
                            <thead>
                                <tr>
                                    <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>#</th>
                                    <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>Country Name</th>
                                    <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>iso Code</th>
                                    <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>Phonecode</th>
                                    <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>currency</th>
                                    <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>currency Symbol</th>
                                    <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>user</th>
                                    <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='group cursor-pointer'>
                                    <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>1</td>
                                    <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>India</td>
                                    <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>IND</td>
                                    <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>+91</td>
                                    <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>INR</td>
                                    <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>Rs</td>
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
                                    <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>India</td>
                                    <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>IND</td>
                                    <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>+91</td>
                                    <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>INR</td>
                                    <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>Rs</td>
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
            </div>
            {view && (
                <div>
                    <CountryAddModal view={view} setView={setView}/>
                </div>
            )}
        </>
    )
}

export default CountrySection