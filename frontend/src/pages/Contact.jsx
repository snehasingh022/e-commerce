import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'



const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t '>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>
      <div className='flex flex-col justify-center mb-28 my-10  md:flex-row gap-10'>
        <img src={assets.contact_img} alt="" className='w-full md:max-w-[480px]' />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>1234 Market Street <br/> New Delhi, India - 11000</p>
          <p className='text-gray-500'>Tel:1800-123-4567 <br />Email: admin@forever.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
          <p className='text-gray-500'>Learn more about our open positions and career opportunities</p>
          <button className='border border-rose-400 px-8 py-4 text-sm hover:bg-rose-400 hover:text-white transition-all duration-300'>Explore Jobs</button>

        </div>
        
      </div>
      <NewsLetterBox/>
      
    </div>
  )
}

export default Contact