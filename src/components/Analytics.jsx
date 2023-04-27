import React from 'react'
import Laptop from '../assets/Laptop.jpg' 

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src={Laptop} alt="/" className='rounded w-[500px] mx-auto my-4'/>
            <div className='flex flex-col justify-center ml-4'> 
                <p className='text-[var(--accent)] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid nisi sequi, eligendi fugiat quod beatae facilis voluptate, qui a, amet incidunt eaque quas maxime soluta voluptas nobis omnis corrupti animi.
                </p>
                <button className='button button-black'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics