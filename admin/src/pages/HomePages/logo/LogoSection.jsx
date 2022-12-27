import React from 'react'
import { BsImages } from 'react-icons/bs'

function LogoSection() {
    return (
        <div className='mx-5'>
            <div className='my-10'>
                <h1 className='text-3xl font-bold'>Logo </h1>
                {/* <button className='my-5 text-lightblue '>
                    <Link to='/tours/add' className='flex items-center space-x-2'>
                        <span className=''><AiOutlineLeft /></span>
                        <span className=''>Go Back</span>
                    </Link>
                </button> */}
            </div>
            <div className=' space-y-5'>

                <div className=''>
                    <div className=' w-1/3 px-2'>
                        <div className='flex items-center space-x-2 text-lightblue'>
                            <span className='text-lg text-lightblue'><BsImages /> </span>
                            <span className='text-lg'>Logo</span>
                        </div>
                        <div className=''>
                            <input type='file'
                                placeholder='Longitude'
                                className='px-3 w-full border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-text' />
                        </div>
                    </div>
                </div>

                <div className='relative'>
                    <div className='h-52 overflow-hidden  '>
                        <img src='https://www.travellerschoice.ae/wp-content/uploads/2021/01/mytravellers-website-logo.png' alt='img' className='rounded-xl w-96 h-36' />
                    </div>
                    {/* <div className='absolute group top-0 left-0 right-0 bottom-0 hover:bg-trans flex justify-center items-center transition-all duration-500'>
                        <div className='text-red-600 text-5xl scale-0 group-hover:scale-100 transition-all duration-500'><AiFillDelete /></div>
                    </div> */}
                </div>



                <div className=' flex justify-start mt-10 '>
                    <button className='bg-lightblue hover:bg-blue text-white px-7 py-2 rounded-lg'>Submit</button>
                </div>

            </div>
        </div>
    )
}

export default LogoSection