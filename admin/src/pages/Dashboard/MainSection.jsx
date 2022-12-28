import React, { useState } from 'react'
import BookingSection from './BookingSection'
import TicketSection from './TicketSection'
import RightSection from './RightSection'
import { FiActivity, FiUsers } from 'react-icons/fi'
import { MdPayment } from 'react-icons/md'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import ActivityTableSection from './ActivityTableSection'
import PaymentTableSection from './PaymentTableSection'
import UsersTableSection from './UsersTableSection'
import OrdersTableSection from './OrdersTableSection'

function MainSection() {
  const [view, setView] = useState({
    activities: true,
    payments: false,
    users: false,
    orders: false
  })
  return (
    <>
      <div className='px-14'>
        <h1 className='text-4xl font-bold text-darktext'>Dashboard</h1>
      </div>
      <div className='flex'>
        <div className='w-9/12 '>
          <div className=''>
            <BookingSection />
          </div>
          <div className=''>
            <TicketSection />
          </div>
        </div>
        <div className='w-3/12 p-5 py-10'>
          <div className=''>
            <RightSection />
          </div>
        </div>
      </div>
      {/* components */}
      <div className='w-1/2 py-2 flex justify-around gap-5  shadow-md bg-cardtransblue px-2 rounded-lg'>
        <button
          className={`${view.activities ? "bg-lightblue text-white" : "bg-white hover:border-lightblue hover:text-lightblue"} flex space-x-2 border py-3  w-full justify-center rounded-lg  items-center cursor-pointer`}
          onClick={() => setView((prev) => {
            return { ...prev, activities: true, payments: false, users: false, orders: false }
          })}
        >
          <span className=''><FiActivity /></span>
          <span className=''>Activites</span>
        </button>
        <button
          className={`${view.payments ? "bg-lightblue text-white" : "bg-white hover:border-lightblue hover:text-lightblue"} flex space-x-2 border py-3  w-full justify-center rounded-lg  items-center cursor-pointer`}
          onClick={() => setView((prev) => {
            return { ...prev, payments: true, activities: false, users: false, orders: false }
          })}
        >
          <span className=''><MdPayment /></span>
          <span className=''>Payments</span>
        </button>
        <button
          className={`${view.users ? "bg-lightblue text-white" : "bg-white hover:border-lightblue hover:text-lightblue"} flex space-x-2 border py-3  w-full justify-center rounded-lg  items-center cursor-pointer`}
          onClick={() => setView((prev) => {
            return { ...prev, users: true, activities: false, payments: false, orders: false }
          })}
        >
          <span className=''><FiUsers /></span>
          <span className=''>Users</span>
        </button>
        <button
          className={`${view.orders ? "bg-lightblue text-white" : "bg-white hover:border-lightblue hover:text-lightblue"} flex space-x-2 border py-3  w-full justify-center rounded-lg  items-center cursor-pointer`}
          onClick={() => setView((prev) => {
            return { ...prev, orders: true, activities: false, users: false, payments: false }
          })}
        >
          <span className=''><AiOutlineShoppingCart /></span>
          <span className=''>Orders</span>
        </button>
      </div>
      {
        view.activities && (
          <div className='py-10'>
            <ActivityTableSection />
          </div>
        )
      }
      {
        view.payments && (
          <div className='py-10'>
            <PaymentTableSection />
          </div>
        )
      }
      {
        view.users && (
          <div className='py-10'>
            <UsersTableSection />
          </div>
        )
      }
      {
        view.orders && (
          <div className='py-10'>
            <OrdersTableSection />
          </div>
        )
      }
    </>
  )
}

export default MainSection