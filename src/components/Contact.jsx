import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
    {/* links of https://app.getform.io/ */}
      <form method="POST" action='https://getform.io/f/99e06e87-e663-4630-a389-f01a6f2ea25f' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#f58220] text-[#ccd6f6]'> Contact</p>
          <p className='text-[#ccd6f6] py-4'> 
          Submit the form below or shoot me an email - linosa88@text.com
          </p>
        </div>
        {/* input form */}
        <input type="text" placeholder='Name' name='name' 
        className='p-2 bg-[#ccd6f6]'/>
        <input type="email" placeholder='Email' name='email' 
        className='my-4 p-2 bg-[#ccd6f6]'/>
        <textarea name='message' rows="10" placeholder='Message' className='bg-[#ccd6f6] p-2'></textarea>
        <button className='bg-[#008e97cc] text-[#ccd6f6] rounded-2xl hover:bg-[#f58220] hover:border-[#f58220] px-4 py-3 my-8 mx-auto flex items-center'>
        Submit
        </button>
      </form>
    </div>
  )
}

export default Contact
