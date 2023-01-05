import React from 'react'
import WorkImg from '../assets/projects/workImg.jpeg';
import RealState  from '../assets/projects/realestate.jpg';
import App  from '../assets/projects/app.jpeg';



export const Works = () => {
  return (
    <div name="work" className=' w-full md:h-screen bg-[#0a192f] text-[#ccd6f6]'>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-[#f58220]'>Work</p>
        <p className='py-4'>Check out some of my recent work </p>
      </div>
{/* container */}
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
{/* grid items */}
        <div style= {{ backgroundImage:`url(${WorkImg})`}} className='shadow-lg       shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div'>
         {/* hover effect for menu */}
          <div className="opacity-0 group-hover:opacity-100 ">
            <span className="text-2xl font bold text-white tracking-wider ">
              Js app Location
            </span>
            <div className="pt-8 text-center ">
              <a href='/'>
                <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-[#ccd6f6] text-[#0a192f] font-bold text-lg">Demo</button>
              </a>
              <a href='/'>
                <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-[#ccd6f6] text-[#0a192f] font-bold text-lg">Code</button>
              </a>
            </div>
          </div>
        </div>

        <div style= {{ backgroundImage:`url(${RealState})`}} className='shadow-lg      shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div'>
         {/* hover effect for menu */}
          <div className="opacity-0 group-hover:opacity-100 ">
            <span className="text-2xl font bold text-white tracking-wider ">
              Js app Location
            </span>
            <div className="pt-8 text-center ">
              <a href='/'>
                <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-[#ccd6f6] text-[#0a192f] font-bold text-lg">Demo</button>
              </a>
              <a href='/'>
                <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-[#ccd6f6] text-[#0a192f] font-bold text-lg">Code</button>
              </a>
            </div>
          </div>
        </div>

        <div style= {{ backgroundImage:`url(${App})`}} className='shadow-lg       shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div'>
         {/* hover effect for menu */}
          <div className="opacity-0 group-hover:opacity-100 ">
            <span className="text-2xl font bold text-white tracking-wider ">
              Js app Location
            </span>
            <div className="pt-8 text-center ">
              <a href='/'>
                <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-[#ccd6f6] text-[#0a192f] font-bold text-lg">Demo</button>
              </a>
              <a href='/'>
                <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-[#ccd6f6] text-[#0a192f] font-bold text-lg">Code</button>
              </a>
            </div>
          </div>
        </div>

        <div style= {{ backgroundImage:`url(${App})`}} className='shadow-lg       shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div'>
         {/* hover effect for menu */}
          <div className="opacity-0 group-hover:opacity-100 ">
            <span className="text-2xl font bold text-white tracking-wider ">
              Js app Location
            </span>
            <div className="pt-8 text-center ">
              <a href='/'>
                <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-[#ccd6f6] text-[#0a192f] font-bold text-lg">Demo</button>
              </a>
              <a href='/'>
                <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-[#ccd6f6] text-[#0a192f] font-bold text-lg">Code</button>
              </a>
            </div>
          </div>
        </div>

        <div style= {{ backgroundImage:`url(${WorkImg})`}} className='shadow-lg      shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div'>
         {/* hover effect for menu */}
          <div className="opacity-0 group-hover:opacity-100 ">
            <span className="text-2xl font bold text-white tracking-wider ">
              Js app Location
            </span>
            <div className="pt-8 text-center ">
              <a href='/'>
                <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-[#ccd6f6] text-[#0a192f] font-bold text-lg">Demo</button>
              </a>
              <a href='/'>
                <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-[#ccd6f6] text-[#0a192f] font-bold text-lg">Code</button>
              </a>
            </div>
          </div>
        </div>

        <div style= {{ backgroundImage:`url(${RealState})`}} className='shadow-lg       shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div'>
         {/* hover effect for menu */}
          <div className="opacity-0 group-hover:opacity-100 ">
            <span className="text-2xl font bold text-white tracking-wider ">
              Js app Location
            </span>
            <div className="pt-8 text-center ">
              <a href='/'>
                <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-[#ccd6f6] text-[#0a192f] font-bold text-lg">Demo</button>
              </a>
              <a href='/'>
                <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-[#ccd6f6] text-[#0a192f] font-bold text-lg">Code</button>
              </a>
            </div>
          </div>
        </div>



      </div>
    </div>
    </div>
  )
}
