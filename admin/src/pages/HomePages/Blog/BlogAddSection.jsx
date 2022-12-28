import React from 'react'
import { AiFillDelete, AiOutlineLeft } from 'react-icons/ai'
import { BsCardHeading, BsImages } from 'react-icons/bs'
import { GiStabbedNote } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function BlogAddSection() {
  return (
    <>
      <div className='mx-5'>
        <div className='my-10'>
          <h1 className='text-3xl font-bold'>Add Blog</h1>
          <button className='my-5 text-lightblue '>
            <Link to='/homepages/blog' className='flex items-center space-x-2'>
              <span className=''><AiOutlineLeft /></span>
              <span className=''>Go Back</span>
            </Link>
          </button>
        </div>
        <div className=' space-y-5 text-darktext'>

          <div className=' flex w-full'>
            <div className=' w-full px-2 space-y-2'>
              <div className='flex items-center space-x-2 text-lightblue'>
                <span className='text-lg text-lightblue'><BsCardHeading /> </span>
                <span className='text-lg'>Blog Title</span>
              </div>
              <div className=''>
                <input type='text'
                  placeholder='give category title'
                  className='px-3 w-full border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-text' />
              </div>
            </div>

          </div>

          <div className=' flex '>
            <div className=' w-full px-2 space-y-2'>
              <div className='flex items-center space-x-2 text-lightblue'>
                <span className='text-lg text-lightblue'><GiStabbedNote /> </span>
                <span className='text-lg'>Blog Description</span>
              </div>
              <div className='border'>
                <Editor
                  // editorState={editorState}
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                // onEditorStateChange={this.onEditorStateChange}
                />
              </div>
            </div>
          </div>
          <div className=''>
            <div className=' w-1/2 px-2'>
              <div className='flex items-center space-x-2 text-lightblue'>
                <span className='text-lg text-lightblue'><BsImages /> </span>
                <span className='text-lg'>Blog Image</span>
              </div>
              <div className=''>
                <input type='file'
                  placeholder='Longitude'
                  className='px-3 w-full border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-text' />
              </div>
            </div>
          </div>

          <div className='grid grid-cols-5 gap-3 items-center justify-center'>

            <div className='relative'>
              <div className='h-52 overflow-hidden  '>
                <img src='https://images4.alphacoders.com/931/93124.jpg' alt='img' className='rounded-xl w-full h-full' />
              </div>
              <div className='absolute group top-0 left-0 right-0 bottom-0 hover:bg-trans flex justify-center items-center transition-all duration-500'>
                <div className='text-red-600 text-5xl scale-0 group-hover:scale-100 transition-all duration-500'><AiFillDelete /></div>
              </div>
            </div>

          </div>

          <div className=' flex justify-start mt-10 '>
            <button className='bg-lightblue hover:bg-blue text-white px-7 py-2 rounded-lg'>Submit</button>
          </div>

        </div>
      </div>

    </>
  )
}

export default BlogAddSection