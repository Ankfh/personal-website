import React from 'react';
import { Link } from 'react-router-dom';


function Home() {

    const handleClick =(vlink)=>{
      let  vl=vlink
        window.open(vl)
    }



    return (
        <section className='overflow-hidden bg-gray-800'>


            <div className=' h-cover pt-36 py-5 rounded-sm bg-cyan-900 '>
                <div className=' md:relative left-[547px] pt-4 pb-8 text-gray-300  text-5xl '>

                    <h1 className=' ml-20 font-bold  shadow-2xl' >Profile</h1>
                    <p className=' ml-24 text-lg'>Who, I am?</p>

                </div>
                <div className="  mx-9 p-7  items-center  md:flex  bg-gray-800  rounded-md shadow-2xl ">
                    <div className='py-4  flex flex-col space-y-6  '>
                        <div >
                            <p className="text-lg text-gray-300">Hello, I am </p>
                            <h1 className="text-4xl font-bold  text-gray-300">Ashfaq Nabi Khan</h1>
                        </div>
                        <p className="text-xl text-gray-300 pt-3 leading-relaxed">
                            Front-end developers use HTML, CSS, React and tailwind  to build the client side of a website.


                        </p>
                        <div className='inline-flex  space-x-4 text-xlg'>
                            <span className='text-red-800 hover:text-red-500  cursor-pointer'>
                            <i className="fa-brands fa-youtube"></i>  </span>
                            <span className='text-blue-700 hover:text-blue-500 cursor-pointer'><i className="fa-brands fa-facebook"></i></span>
                            <span className='text-blue-700 hover:text-blue-500 cursor-pointer'> <i className="fa-brands fa-linkedin"></i> </span>                               <ion-icon name="logo-github"></ion-icon>
                        </div>

                    </div >
                    <img src="image/pro.jpg" alt=""
                        className='w-56 h-64 rounded-full relative flex-shrink-0 ' />

                </div>
            </div>
            <div className='bg-cyan-900 relative'>
                <div className=' md:relative left-[547px] pt-48 text-gray-300  text-5xl '>

                    <h1 className=' ml-20 font-bold  shadow-2xl' >Services</h1>
                    <p className=' ml-24 text-lg'>Here's What I offer</p>

                </div>
                <div className='md:flex my-10 grid  gap-10 justify-center '>
                    <div className="w-80 p-6 relative text-gray-300  bg-gray-800   rounded-lg shadow-2xl  ">
                        <div className='h-cover' >
                            <img src="/image/resp2.jpg" alt="" />
                        </div>
                        <h4 className='font-bold pt-2 '>Responsive Websites</h4>
                        <p className='m-5'>Using tailwind and React I will give you a dynamic , compatible and adjustable best responsive website.</p>
                    </div>

                    <div className="w-80  p-6 relative  text-gray-300  bg-gray-800   rounded-lg shadow-2xl ">
                        <div className='h-cover' >
                            <img src="/image/consult.jpg" alt="" />
                        </div>
                        <h4 className='font-bold pt-2 '>Consultation</h4>
                        <p className='m-5 '> Provide you expert opinions, analysis, and recommendations. A strategical plan for your project according to your expertise. </p>
                    </div>
                    <div className="w-80  p-6 relative  text-gray-300   bg-gray-800   rounded-lg shadow-2xl ">
                        <div className='h-cover' >
                            <img src="/image/man.jpg" alt="" />
                        </div>
                        <h4 className='font-bold pt-2 '>System Managing</h4>
                        <p className='m-5 '>Oragize , monitor and mantian your data. Mantianance of your system and configure your system for fast proccessing solving problem by troubleshooting. </p>
                    </div>
                </div>
            </div>
            <div className='bg-cyan-900 relative pb-7 bottom-10'>
                <div className=' md:relative left-[547px] pt-48  text-gray-300  text-5xl '>

                    <h1 className=' ml-20 font-bold  shadow-2xl' >Work</h1>
                    <p className=' ml-24 text-lg'>Here's What I offer</p>

                </div>

                <div className=' md:grid grid-cols-2  '>
                    <div className=' text-purple-100 md:h-auto   m-9 bg-gray-800   rounded-lg shadow-2xl'>
                        <img src="/image/work1.jpg " className='h-40 md:h-80 w-full  rounded-md shadow-2xl' alt="" />
                        <h6 className='m-2 mt-4 font-bold '>Personal Potfolio Website</h6>
                        <p className='mx-6 m-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat vitae nemo est dicta libero sed assumenda tenetur illum, sit quisquam laboriosam et totam hic provident commodi sequi officiis, rerum in!</p>
                        <button className='m-4 p-1 rounded-t-lg text-sm focus:ring ring-slate-300 bg-cyan-900 shadow-2xl shadow-black border-cyan-900 border-transparent border-2 '>View More</button>
                    </div>

                    <div className=' text-purple-100 md:h-auto   m-9 bg-gray-800   rounded-lg shadow-2xl'>
                        <img src="/image/work2.jpg " className='h-40 md:h-80 w-full  rounded-md shadow-2xl' alt="" />
                        <h6 className='m-2 mt-4 font-bold '>Second Project</h6>
                        <p className='mx-6 m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, vitae perferendis voluptates eos itaque excepturi hic sed sint tempore minus pariatur nisi facere? Velit iste rerum cumque eius, odit ex? </p>
                        <button className='m-4 p-1 rounded-t-lg focus:ring text-sm ring-slate-300 bg-cyan-900 shadow-2xl shadow-black border-cyan-900 border-transparent border-2 '>View More</button>

                    </div>
                </div>


              
            </div>
          
           
        </section>
    );
}

export default Home;