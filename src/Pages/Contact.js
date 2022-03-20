import React from 'react';
function Contact() {
  return (
    <div className="bg-cyan-900 pb-20   md:flex justify-center items-center p-9 overflow-hidden  ">

      <div className='bg-gray-800 max-w-md rounded-2xl mt-36 shadow-xl p-6 text-gray-300 '>
        <div className=' '>
          <img className='rounded-md shadow-lg' src="/image/contact.jpg" alt="" />
        </div>
        <h1 className='font-bold text-2xl'>Contact Us</h1>
        <p>Feel free to contact us </p>
        <div className=' flex justify-start items-center '>
          <div className='text-cyan-400'>
            <i class="fa-solid fa-square-phone " />
          </div>
          <div className='ml-4'>
            <p>03405832944</p>
          </div>
        </div>
        <div className=' flex justify-start items-center '>
          <div className='text-cyan-400'>
            <i class="fa-solid fa-at"></i>
          </div>
          <div className='ml-4'>
            <p>ashfaqnabi357@gmail.com</p>
          </div>
        </div>
        <div className=' flex justify-start items-center '>
          <div className='text-cyan-400'>
            <i class="fa-solid fa-location-dot"></i>
          </div>
          <div className='ml-4'>
            <p>Islamabad</p>
          </div>
        </div>
        <div  className='inline-flex pt-6 space-x-4 text-xlg'>
          <span className='text-red-800 hover:text-red-500  cursor-pointer'>
            <i className="fa-brands fa-youtube"></i>  </span>
          <span className='text-blue-700 hover:text-blue-500 cursor-pointer'><i className="fa-brands fa-facebook"></i></span>
          <span className='text-blue-700 hover:text-blue-500 cursor-pointer'> <i className="fa-brands fa-linkedin"></i> </span>                               <ion-icon name="logo-github"></ion-icon>
        </div>
      </div>
      <div className='w-8'></div>
      <div className='bg-gray-800 rounded-2xl py-5 mt-36 shadow-xl p-2  text-gray-300 '>

        <form action="">
          <div className='m-5 py-2 '>    
          <p>Full Name</p>  
            <input className='text-black  rounded-md' placeholder='Enter your Name' type="FullName" />
          </div>

          <div className='m-5 py-2'>   
          <p>Email address </p>    
            <input className='text-black rounded-md'  placeholder='Enter your email' type="email" />
          </div>
          <div className='m-5 py-2'>  
          <p>Message</p>  
          <textarea className='text-black rounded-md' placeholder='Enter your message' name="" id="" cols="24" rows="5"></textarea>   
          </div>

        </form>
        <button className='ml-48 p-2 rounded-lg text-sm focus:ring ring-slate-300 bg-cyan-900 shadow-2xl shadow-black border-cyan-900 border-transparent border-2 '>Send</button>

      </div>
    </div>
  );
}

export default Contact;
