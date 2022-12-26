import React from 'react'
import { GiStabbedNote } from 'react-icons/gi'
import { CgToolbarTop } from 'react-icons/cg'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { AiOutlineLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function AddDescription() {
    return (
        <div className=''>

            <div className='p-7 space-y-7'>
                <div className=''>
                    <h1 className='text-3xl font-bold text-darktext'>Add Description</h1>
                    <button className='my-5 text-lightblue '>
                    <Link to='/tours/edit' className='flex items-center space-x-2'>
                        <span className=''><AiOutlineLeft /></span>
                        <span className=''>Go Back</span>
                    </Link>
                </button>
                </div>

                <div className=' w-full px-2'>
                    <div className='flex items-center space-x-2 text-lightblue'>
                        <span className='text-lg text-lightblue'><CgToolbarTop /> </span>
                        <span className='text-lg'>Title</span>
                    </div>
                    <div className=''>
                        <input type='text'
                            placeholder='Enter title'
                            className='px-3 w-full border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-text' />
                    </div>
                </div>

                <div className='w-full px-2'>
                    <div className='flex items-center space-x-2 text-lightblue'>
                        <span className='text-lg text-lightblue'><GiStabbedNote /> </span>
                        <span className='text-lg'>Descriptions</span>
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

                <div className=' flex justify-end mt-10 mr-10'>
                    <button className='bg-lightblue hover:bg-blue text-white px-5 py-2 rounded-lg'>Submit</button>
                </div>

            </div>

        </div>
    )
}

export default AddDescription