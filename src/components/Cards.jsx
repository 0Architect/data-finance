import React from 'react'
import {FaRegUser} from 'react-icons/fa'


const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-11 bg-white'>
        <div className='max-2-[1240px] mx-auto md:grid grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <FaRegUser size={30} className='mx-auto mt-[-2rem]'/>
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                </div>
                <button className='bg-[--accent] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-black hover:text-[--accent]'>Start Trial</button>
            </div>
            <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                <FaRegUser size={30} className='mx-auto mt-[-2rem]'/>
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                </div>
                <button className='text-[--accent] bg-[--main] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-[--accent] hover:text-[--main]'>Start Trial</button>
            </div>
             <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <FaRegUser size={30} className='mx-auto mt-[-2rem]'/>
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                </div>
                <button className='bg-[--accent] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-black hover:text-[--accent]'>Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Cards