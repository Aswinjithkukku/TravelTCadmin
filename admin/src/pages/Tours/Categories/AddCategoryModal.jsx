import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BiRename } from 'react-icons/bi'
import { GiStabbedNote } from 'react-icons/gi'
import axios from '../../../axios'

function AddCategoryModal({ view, setView }) {

    const [data, setData] = useState({
        categoryName: "",
        description: ""
    })
    
    const onChange = (e) => {
        setData({...data,[e.target.name]: e.target.value})
    }

    const submitHandler = async(e) => {
        e.preventDefault()
        try{
            const token = localStorage.getItem("token")
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                  },
            }
            const response = await axios.post('/attractions/categories/add', data, config)
            console.log(response);
            setView(!view)
        } catch(err){
            console.log(err);
        }
    }

    if (!view) return null
    return (
        <div className='fixed top-0 bottom-0 left-0 right-0 modal_overlay' onClick={() => setView(!view)}>
            <div className='h-full w-full flex justify-center items-center'>
                <div className='bg-white w-4/12  rounded-2xl max-h-[95vh] overflow-auto' onClick={(e) => e.stopPropagation()}>
                    <div className=''>
                        <form onSubmit={submitHandler}>

                            <div className='p-7 space-y-4'>
                                <div className='flex justify-between items-center'>
                                    <p className='text-3xl font-bold text-darktext'></p>
                                    <h1 className='text-3xl font-bold text-darktext'>Add New Category</h1>
                                    <h3 className='text-3xl font-bold text-darktext' onClick={() => setView(false)}><AiOutlineClose /></h3>
                                </div>

                                <div className=' flex w-full'>
                                    <div className=' w-full px-2'>
                                        <div className='flex items-center space-x-2 text-lightblue'>
                                            <span className='text-lg text-lightblue'><BiRename /> </span>
                                            <span className='text-lg'>Name</span>
                                        </div>
                                        <div className=''>
                                            <input type='text'
                                                name="categoryName"
                                                value={data.categoryName}
                                                onChange={onChange}
                                                placeholder='give category name'
                                                className='px-3 w-full border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-text' />
                                        </div>
                                    </div>

                                </div>

                                <div className='w-full px-2'>
                                    <div className='flex items-center space-x-2 text-lightblue'>
                                        <span className='text-lg text-lightblue'><GiStabbedNote /> </span>
                                        <span className='text-lg'>Description</span>
                                    </div>
                                    <textarea
                                        name="description"
                                        value={data.description}
                                        onChange={onChange}
                                        className='px-3 w-full  border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl bg-light text-text' />
                                </div>

                                <div className=' flex justify-end mt-10 mr-10'>
                                    <button type='submit' className='bg-lightblue hover:bg-blue text-white px-5 py-2 rounded-lg'>Submit</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default AddCategoryModal