import React, { useState } from 'react'
import { HiOutlineTicket, HiPhoto } from 'react-icons/hi2'
import { RiSortDesc } from 'react-icons/ri'
import { TbListDetails } from 'react-icons/tb'
import LogoSection from './LogoSection'

function MainSection () {
    const [ view, setView ] = useState({
        logo: false,
        helpline: false,
        banner: false,
        section: false,
        blog: false,
        footer: false
    })
  return (
    <div className='mx-5'>
    <div className='my-10'>
        <h1 className='text-3xl font-bold'>Home Pages</h1>
    </div>
    {/* components */}
    <div className='w-full flex justify-around gap-5'>
        <button
            className={`${view.logo ? "bg-lightblue text-white" : "bg-white hover:border-lightblue hover:text-lightblue"} flex space-x-2 border py-3  w-full justify-center rounded-lg  items-center cursor-pointer`}
            onClick={() => setView((prev) => {
                return { ...prev, logo: true, helpline: false, banner: false, section: false }
            })}
        >
            <span className=''><TbListDetails /></span>
            <span className=''>Logo</span>
        </button>
        <button
            className={`${view.helpline ? "bg-lightblue text-white" : "bg-white hover:border-lightblue hover:text-lightblue"} flex space-x-2 border py-3  w-full justify-center rounded-lg  items-center cursor-pointer`}
            onClick={() => setView((prev) => {
                return { ...prev, helpline: true, logo: false, banner: false, section: false }
            })}
        >
            <span className=''><HiOutlineTicket /></span>
            <span className=''>Helpline</span>
        </button>
        <button
            className={`${view.banner ? "bg-lightblue text-white" : "bg-white hover:border-lightblue hover:text-lightblue"} flex space-x-2 border py-3  w-full justify-center rounded-lg  items-center cursor-pointer`}
            onClick={() => setView((prev) => {
                return { ...prev, banner: true, logo: false, helpline: false, section: false }
            })}
        >
            <span className=''><RiSortDesc /></span>
            <span className=''>Banner</span>
        </button>
        <button
            className={`${view.section ? "bg-lightblue text-white" : "bg-white hover:border-lightblue hover:text-lightblue"} flex space-x-2 border py-3  w-full justify-center rounded-lg  items-center cursor-pointer`}
            onClick={() => setView((prev) => {
                return { ...prev, section: true, logo: false, banner: false, helpline: false }
            })}
        >
            <span className=''><HiPhoto /></span>
            <span className=''>Section</span>
        </button>
    </div>
    {/* cards */}
    {view.logo && (
        <div className='my-10 '>
            <LogoSection />
        </div>
    )}
    {/* map data */}
</div>
  )
}

export default MainSection;