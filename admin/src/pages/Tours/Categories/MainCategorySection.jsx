import React, { useState, useEffect } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { FaRegEdit } from 'react-icons/fa'
import { GoPlus } from 'react-icons/go'
import AddCategoryModal from './AddCategoryModal'
import UpdateCategoryModal from './UpdateCategoryModal'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories, updateCategory } from '../../../redux/slices/categorySlice' 

function MainCategorySection() {
  const dispatch = useDispatch()
  const { categories } = useSelector(state => state.category)

  const [view, setView] = useState({
    addmodal: false,
    updatemodal: false
  })

  useEffect(() => {
    dispatch(fetchCategories())
  },[dispatch,categories])

  return (
    <div className='mx-5'>
      <div className='my-10'>
        <h1 className='text-3xl font-bold'>Category </h1>
      </div>
      <div className='py-5'>
        <button className='bg-lightblue hover:bg-blue text-white rounded-lg px-5 py-2 flex items-center space-x-1'
          onClick={() => setView((prev) => {
            return { ...prev, addmodal: true }
          })}>
          <span className='text-white'><GoPlus /></span>
          <span className=''>New</span>
        </button>
      </div>
      <div className=''>
        <div className='space-y-4'>
          <div className='w-full overflow-hidden rounded-lg border border-lightblue'>
            <table className='table w-full '>
              <thead>
                <tr>
                  <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>#</th>
                  <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>Name</th>
                  <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>Description</th>
                  <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>user</th>
                  <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>action</th>
                </tr>
              </thead>
              <tbody>
                {categories?.map((item) => (
                <tr className='group cursor-pointer' key={item._id}>
                  <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>1</td>
                  <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>{item?.categoryName}</td>
                  <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>{item?.description}</td>
                  <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>admin</td>
                  <td className='py-3 px-2 text-left font-light  flex items-center space-x-2'>
                    <span className='hover:text-red-600 text-red-500 text-2xl'>
                      <AiFillDelete />
                    </span>
                    <span className='hover:text-blue text-lightblue text-2xl'
                      onClick={() => {
                        setView((prev) => {
                          return { ...prev, updatemodal: true }
                        })
                        dispatch(updateCategory(item))
                      }}>
                      <FaRegEdit />
                    </span>
                  </td>
                </tr>
                ))}

              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* cards */}
      {view.addmodal && (
        <div className='my-10 '>
          <AddCategoryModal view={view} setView={setView} />
        </div>
      )}
      {view.updatemodal && (
        <div className='my-10 '>
          <UpdateCategoryModal view={view} setView={setView} />
        </div>
      )}

      {/* map data */}
    </div>
  )
}

export default MainCategorySection