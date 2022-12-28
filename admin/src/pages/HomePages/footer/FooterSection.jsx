import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { FaRegEdit } from 'react-icons/fa'
import { GoPlus } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'

function FooterSection() {
  const navigate = useNavigate()

  return (
    <>
      <div className='mx-4'>
        <div className='space-y-4'>
          <div className=' my-10'>
            <h1 className='text-3xl font-bold text-darktext'>Footer</h1>

          </div>
          <div className=''>
            <button className='bg-lightblue hover:bg-blue text-white rounded-lg px-5 py-2 flex items-center space-x-1' onClick={() => navigate('/homepages/footer/add')}>
              <span className='text-white'><GoPlus /></span>
              <span className=''>New</span>
            </button>
          </div>
          <div className='w-8/12 overflow-hidden rounded-lg border border-lightblue'>
            <table className='table w-full '>
              <thead>
                <tr>
                  <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>#</th>
                  <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>Footer title</th>
                  <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>Subfooters</th>
                  <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>user</th>
                  <th className='py-3 text-left text-lg font-semibold px-2 text-lightblue'>action</th>
                </tr>
              </thead>
              <tbody>
                <tr className='group cursor-pointer'>
                  <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>1</td>
                  <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>Support</td>
                  <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>
                    <ul className='list-disc list-inside'>
                      <li>Coronavirus (COVID-19) FAQs</li>
                      <li>Manage your trips</li>
                      <li>Attractions help center</li>
                      <li>Safety Resource Center</li>
                    </ul>
                  </td>
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
                  <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>2</td>
                  <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>Discover</td>
                  <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>
                    <ul className='list-inside list-disc'>
                      <li>Genius loyalty program</li>
                      <li>Seasonal and holiday deals</li>
                      <li>Travel articles</li>
                      <li>Travel communities</li>
                    </ul>
                  </td>
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
                  <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>3</td>
                  <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>About</td>
                  <td className='py-3 px-2 text-left font-light group-hover:text-lightblue text-darktext'>
                    <ul className='list-inside list-disc'>
                      <li>About Tc.tours.com</li>
                      <li>How We Work</li>
                      <li>Sustainability</li>
                      <li>Press center</li>
                      <li>Careers</li>
                    </ul>
                  </td>
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
    </>
  )
}

export default FooterSection