import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi';

const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-[#0a192f]'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#ccd6f6]'>Hi, my name is :</p>
        <h1 className='text-xl sm:text-7xl font-bold text-[#ccd6f6]'>Aliou Dione </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer.</h2>
        <p className='text-[#ccd6f6] py-4 max-w-[700px]'>
        I'm a full-stack developer specializing in building and occasionally
        designing exceptional digital experiences. Currently, I'm focused on
        building responsive full-stack web, mobile applications and digital project manager.
        </p>
        <di>
            <button className='text-[#ccd6f6] group rounded-full px-6 py-3 my-2 flex items-center hover:bg-[#f58220] hover:border-[#f58220] bg-[#008e97cc]'>
            View Work 
            <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3' />
            </span>
            </button>
        </di>
      </div>
    </div>
  )
}

export default Home
