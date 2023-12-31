import React from 'react'
import { cratImg, logoDark } from '../assets/index'
const Header = () => {
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont">
        <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between px-20">
            <div>
            <img className="w-28" src={logoDark} alt="logoDark" />
            </div>
        <div className='flex items-center gap-8'>
          <ul className="flex items-center gap-8">
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offet-2 decoration-2 cursor-pointer duration-300">Home</li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offet-2 decoration-[1px] cursor-pointer duration-300">Pages</li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offet-2 decoration-[1px] cursor-pointer duration-300">Shop</li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offet-2 decoration-[1px] cursor-pointer duration-300">Element</li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offet-2 decoration-[1px] cursor-pointer duration-300">Blog</li>
          </ul>
          <div className='relative'>
            <img className="w-6" src={cratImg} alt="cartImg" />
            <span className='absolute w-6 top-2  text-sm flex items-center justify-center'>0</span>
          </div>
          <img className="w-8 h-8 rounded-full" src="https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="userLogo" />
        </div>
        </div>
    </div>
  )
}

export default Header