import React from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import { BsCardHeading } from 'react-icons/bs'
import { CgClose } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addNewRow, removeRow, handleRowItemChange } from '../../../redux/slices/footerSlice'


function FooterAddSection() {
    const dispatch = useDispatch()

    const { rows } = useSelector(state => state.footer)
    const onRowChange = (e, index) => {
        dispatch(handleRowItemChange({
            value: e.target.value,
            name: e.target.name,
            index
        }))
    }
    return (
        <>
            <div className='mx-5'>
                <div className='my-10'>
                    <h1 className='text-3xl font-bold'>Add Footer</h1>
                    <button className='my-5 text-lightblue '>
                        <Link to='/homepages/footer' className='flex items-center space-x-2'>
                            <span className=''><AiOutlineLeft /></span>
                            <span className=''>Go Back</span>
                        </Link>
                    </button>
                </div>
                <div className=' space-y-5 text-darktext'>

                    <div className=' flex w-full'>
                        <div className=' w-2/3 px-2 space-y-2'>
                            <div className='flex items-center space-x-2 text-lightblue'>
                                <span className='text-lg text-lightblue'><BsCardHeading /> </span>
                                <span className='text-lg'>Footer Title</span>
                            </div>
                            <div className=''>
                                <input type='text'
                                    placeholder='give category title'
                                    className='px-3 w-full border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-text' />
                            </div>
                        </div>

                    </div>
                    {rows.map((row, index) => (
                        <>
                            <div className="w-9/12  grid grid-cols-12 gap-2" key={index}>

                                <div className=" col-span-4 ">
                                    <label
                                        htmlFor="footertitle"
                                        className="text-lg  text-lightblue"
                                    >
                                        Name
                                    </label>
                                    <input
                                        id="footertitle"
                                        type="text"
                                        name="name"
                                        value={row.name}
                                        onChange={(e) => onRowChange(e, index)}
                                        className="px-3 w-full border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-text"
                                    />
                                </div>
                                <div className=" col-span-5 ">
                                    <label
                                        htmlFor="linkfield"
                                        className="text-lg  text-lightblue"
                                    >
                                        Link
                                    </label>
                                    <input
                                        id="linkfiled"
                                        type="text"
                                        name="link"
                                        value={row.link}
                                        onChange={(e) => onRowChange(e, index)}
                                        className="px-3 w-full border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-text"
                                    />
                                </div>
                                <div className=" col-span-2 flex items-center ">
                                    <input
                                        id="booleanField"
                                        type="checkbox"
                                        name="isRelativeUrl"
                                        value={row.isRelativeUrl}
                                        onChange={(e) => onRowChange(e, index)}
                                        className=" w-5 h-5 placeholder:text-text focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-text"
                                    />
                                    <label
                                        htmlFor="booleanField"
                                        className="text-lg  text-lightblue px-2"
                                    >
                                        isRelativeUrl
                                    </label>
                                </div>

                                <div className="col-span-1 flex items-center justify-center text-3xl text-red-600"
                                    onClick={() => dispatch(removeRow(index))}>
                                    <CgClose />
                                </div>
                            </div>
                        </>
                    ))}
                    <div className="flex items-center justify-between">
                        <button className=" text-lightblue underline font-medium  rounded-lg text-center"
                            onClick={() => dispatch(addNewRow())}
                        >
                            add more footers
                        </button>
                    </div>


                    <div className=' flex justify-start mt-10 '>
                        <button className='bg-lightblue hover:bg-blue text-white px-7 py-2 rounded-lg'>Submit</button>
                    </div>

                </div>
            </div>

        </>
    )
}

export default FooterAddSection