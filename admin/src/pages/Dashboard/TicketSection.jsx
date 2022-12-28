import React from 'react'
import ticket from '../../static/ticket.png'
import ticket2 from '../../static/ticket2.png'
import cancel from '../../static/cancel.png'

function TicketSection() {
  return (
    <div className='py-10 '>
    <div className='grid grid-cols-3 gap-10 w-full'>
        <div className=' bg-soft hover:bg-cardtransyellow text-darktext  rounded-xl px-7 pt-7 pb-3 space-y-5 cursor-pointer'>
            <div className='flex items-center justify-center'>
                <img src={ticket} alt='img' className='h-20 ' />
            </div>
            <div className='flex justify-center items-center'>
                <h2 className='text-2xl font-bold'>Total Ticket Bought</h2>
            </div>
            <div className='flex justify-center items-center'>
                <div className='h-20 px-7  border-2 border-lightblue rounded-full flex items-center justify-center'>
                    <h2 className='text-4xl font-bold'>3</h2>
                </div>
            </div>
            <div className='border-t font-light flex justify-center items-center'>
                <p className='py-2'>Start from 1st January 2023</p>
            </div>
        </div>
        <div className=' bg-soft hover:bg-cardtransyellow text-darktext rounded-xl px-7 pt-7 pb-3 space-y-5 cursor-pointer'>
            <div className='flex items-center justify-center'>
                <img src={ticket2} alt='img' className='h-20 ' />
            </div>
            <div className='flex justify-center items-center'>
                <h2 className='text-2xl font-bold'>Total Ticket Confirmed</h2>
            </div>
            <div className='flex justify-center items-center'>
                <div className='h-20 px-7  border-2 border-green-500 rounded-full flex items-center justify-center'>
                    <h2 className='text-4xl font-bold'>3</h2>
                </div>
            </div>
            <div className='border-t font-light flex justify-center items-center'>
                <p className='py-2'>Start from 1st January 2023</p>
            </div>
        </div>
        <div className=' bg-soft hover:bg-cardtransyellow text-darktext rounded-xl px-7 pt-7 pb-3 space-y-5 cursor-pointer'>
            <div className='flex items-center justify-center'>
                <img src={cancel} alt='img' className='h-20 ' />
            </div>
            <div className='flex justify-center items-center'>
                <h2 className='text-2xl font-bold'>Total Ticket Cancelled</h2>
            </div>
            <div className='flex justify-center items-center'>
                <div className='h-20 px-7  border-2 border-red-500 rounded-full flex items-center justify-center'>
                    <h2 className='text-4xl font-bold'>3</h2>
                </div>
            </div>
            <div className='border-t font-light flex justify-center items-center'>
                <p className='py-2'>Start from 1st January 2023</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default TicketSection