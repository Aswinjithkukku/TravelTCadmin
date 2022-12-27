import React, { useState } from 'react'
import { TbListDetails } from 'react-icons/tb'
import { RiSortDesc } from 'react-icons/ri'
import { HiPhoto } from 'react-icons/hi2'
import DetailSection from './DetailSection'
import DescriptionSection from './DescriptionSection'
import MediaSection from './MediaSection'

function MainAddtourSection() {

  const [view, setView] = useState({
      details: true,
      description: false,
      media: false
  })

  return (

        <div className='mx-5'>
            <div className='my-10'>
                <h1 className='text-3xl font-bold'>Add new attraction </h1>
                {/* <button className='my-5 text-lightblue '>
                    <Link to='/tours/add' className='flex items-center space-x-2'>
                        <span className=''><AiOutlineLeft /></span>
                        <span className=''>Go Back</span>
                    </Link>
                </button> */}
            </div>
            {/* components */}
            <div className='w-1/2 py-2 flex justify-around gap-5  shadow-md bg-cardtransblue px-2 rounded-lg'>
                <button
                    className={`${view.details ? "bg-lightblue text-white" : "bg-white hover:border-lightblue hover:text-lightblue"} flex space-x-2 border py-3  w-full justify-center rounded-lg  items-center cursor-pointer`}
                    onClick={() => setView((prev) => {
                        return { ...prev, details: true, description: false, media: false }
                    })}
                >
                    <span className=''><TbListDetails /></span>
                    <span className=''>Details</span>
                </button>
                <button
                    className={`${view.description ? "bg-lightblue text-white" : "bg-white hover:border-lightblue hover:text-lightblue"} flex space-x-2 border py-3  w-full justify-center rounded-lg  items-center cursor-pointer`}
                    onClick={() => setView((prev) => {
                        return { ...prev, description: true, details: false, media: false }
                    })}
                >
                    <span className=''><RiSortDesc /></span>
                    <span className=''>Description</span>
                </button>
                <button
                    className={`${view.media ? "bg-lightblue text-white" : "bg-white hover:border-lightblue hover:text-lightblue"} flex space-x-2 border py-3  w-full justify-center rounded-lg  items-center cursor-pointer`}
                    onClick={() => setView((prev) => {
                        return { ...prev, media: true, details: false, description: false }
                    })}
                >
                    <span className=''><HiPhoto /></span>
                    <span className=''>media</span>
                </button>
            </div>
            {/* cards */}
            {view.details && (
                <div className='my-10 '>
                    <DetailSection view={view} setView={setView} />
                </div>
            )}
            {view.description && (
                <div className='my-10'>
                    <DescriptionSection view={view} setView={setView} />
                </div>
            )}
            {view.media && (
                <div className='my-10'>
                    <MediaSection />
                </div>
            )}
            {/* map data */}
        </div>
  )
}

export default MainAddtourSection