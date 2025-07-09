import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Your go-to destination for everyday style and comfort.
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>
                    COMPANY
                </p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>HOME</li>
                    <li>ABOUT US </li>
                    <li>DELIVERY</li>
                    <li>PRIVACY POLICY</li>

                </ul>
            </div>

            <div>
                <p className='text-xl mb-5 font-medium'>
                    GET IN TOUCH
                </p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+1-343-786-6779</li>
                    <li>contact@forever.com</li>

                </ul>
            </div>

        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>
                Copyright 2025|Developed By Sneha Singh.
            </p>
        </div>
    </div>
  )
}

export default Footer
