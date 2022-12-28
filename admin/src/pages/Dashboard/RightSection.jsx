import React from 'react'
import team from '../../static/team.png'
import payment from '../../static/payment.png'

function RightSection() {
    return (
        <div className=' bg-[#C3F8FF] rounded-2xl shadow-sm w-full py-3  px-7 pt-7 pb-3 space-y-5 cursor-pointer'>
            <div className='flex items-center justify-center'>
                <img src={team} alt='img' className='h-20 ' />
            </div>
            <div className='flex justify-center items-center'>
                <h2 className='text-2xl font-bold'>Total User SignedUp</h2>
            </div>
            <div className='flex justify-center items-center'>
                <div className='h-20 px-7  border-2 border-lightblue rounded-full flex items-center justify-center'>
                    <h2 className='text-2xl font-bold'>20</h2>
                </div>
            </div>
            <div className='border-t font-light flex justify-center items-center'>
                <p className='py-2'>Start from 1st January 2023</p>
            </div>

            <div className='space-y-5 pt-24'>
                <div className='flex items-center justify-center'>
                    <img src={payment} alt='img' className='h-20 ' />
                </div>
                <div className='flex justify-center items-center'>
                    <h2 className='text-2xl font-bold'>Total Amount</h2>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='h-20 px-7  border-2 border-lightblue rounded-full flex items-center justify-center'>
                        <h2 className='text-2xl font-bold'>2000 AED</h2>
                    </div>
                </div>
                <div className='border-t font-light flex justify-center items-center'>
                    <p className='py-2'>Start from 1st January 2023</p>
                </div>
            </div>

        </div>
    )
}

export default RightSection