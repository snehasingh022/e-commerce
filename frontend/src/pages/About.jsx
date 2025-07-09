import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsLetterBox'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t '>
        <Title text1={'ABOUT'} text2={'US'} />

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16 '>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" srcset="" />
        <div className='flex flex-col gap-6 justify-center md:w-2/4 text-gray-600'>
        <p> Forever is your one-stop destination for the latest trends in fashion, electronics, home essentials, and more. We bring together quality products, trusted sellers, and seamless shopping experiences—all in one place.</p>
        <p>At Forever, we believe in making online shopping fast, easy, and reliable. With secure payments, fast delivery, and 24/7 support, we're committed to keeping our customers happy and coming back for more.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>
  Our mission at Forever is to redefine online shopping by offering high-quality products, exceptional service, and a user-friendly experience that customers can trust and enjoy every day.
</p>

        </div>
        
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />

      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>All our products undergo rigorous quality checks to ensure you receive only the best. Shop with confidence, knowing that quality is our top priority.</p>
        </div>
        <div className='border px-10 md:px-16 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>Find what you love, check out in seconds, and get it delivered fast — all from the comfort of your home.</p>
        </div>
        <div className='border px-10 md:px-16 sm:py-20 flex flex-col gap-5'>
          <b>Customer Support</b>
          <p className='text-gray-600'>Our dedicated support team is here to help you every step of the way. Whether you have questions or need assistance, we're here to make your shopping experience smooth and enjoyable.</p>
        </div>

      </div>
      <NewsletterBox />
    </div>
  )
}

export default About
