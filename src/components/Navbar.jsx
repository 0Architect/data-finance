import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

    return ( 
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white sticky top-0 bg-[var(--main)] rounded-b-md z-10'>
            <h1 className='w-full text-3xl font-bold text-[var(--accent)]'>Meraki.</h1>
            <ul className='hidden md:flex'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>Resources</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={30} className='cursor-pointer'/> : <AiOutlineMenu size={30} className='cursor-pointer'/>}
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[var(--main)] ease-in-out duration-500': 'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold text-[var(--accent)] m-4'>Meraki.</h1>
                <ul className='uppercase p-4'>
                <li className='p-4 border-b border-gray-60'>Home</li>
                <li className='p-4 border-b border-gray-60'>Company</li>
                <li className='p-4 border-b border-gray-60'>Resources</li>
                <li className='p-4 border-b border-gray-60'>About</li>
                <li className='p-4'>Contact</li>
                </ul>
            </div>
        </div>
     );
}
 
export default Navbar;