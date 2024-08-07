import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { PiDotsThreeOutlineVertical } from 'react-icons/pi';

export default function Header() {
    return (
        <header className='w-full grid grid-cols-10 py-3 px-8 fixed align-middle z-10 bg-white'>
            <FaUserCircle size={'40px'} color='#66837E' className='sm:m-auto sm:col-span-1 col-span-9'/>
            <div className='border col-span-8 border-primary rounded-full w-fit sm:flex hidden'>
                <div className='bg-primary py-2 px-6 rounded-l-full text-white'>Home</div>
                <div className='py-2 px-10 text-primary'>Contact</div>
                <div className='py-2 px-10 text-primary'>About</div>
            </div>
            <button className=' bg-primary rounded-lg text-white sm:block hidden'>
                Login
            </button>
            <PiDotsThreeOutlineVertical color='66837E' className='border-2 rounded-xl border-primary sm:hidden block' size={'40px'}/> 
        </header>
    )
}