import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      <div className='text-center '>
        <Image src={isDarkMode?assets.logo_dark: assets.logo} alt='' className='w-36 mx-auto mb-2 '/>

        <div className="w-max flex items-center gap-2  mx-auto"><Image className='w-6' src={assets.mail_icon}/>adarsh27912@gmail.com</div>
      </div>


      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2025 Adarsh Yadav. All rights reserved.</p>
        <ul className='flex items-center gap-10 mt-4 sm:mt-0'>
            <li>
                <a href="">GitHub</a>
            </li>
            <li>
                <a href="">LinkedIn</a>
            </li>
            <li>
                <a href="">WhatsApp</a>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
