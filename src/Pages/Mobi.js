import React, {useState} from 'react';
import { Link } from 'react-router-dom';


function Mobi(props) {

  const [active, setactive] = useState(false)

  const ShowMenu =()=> {
     
    if (active== false)
   {setactive("active") }
   else{
     setactive(false)
   }

  }



  return (
     <>
     
          <span className=' grid  justify-end items-center mt-3 mr-3  md:hidden text-yellow-50 cursor-pointer' ><i className="fa-solid fa-bars fa-xl "  onClick={ShowMenu}></i></span>
      
        <ul className={active ? " md:invisible fixed overflow-hidden z-50 rounded-2xl shadow-2xl shadow-black w-full text-yellow-50 grid justify-center items-center top-14 bg-cyan-900 space-y-8 font-bold " :"hidden"}>

          <Link className=' p-11 px-96 border-b-2 flex justify-center items-center hover:bg-gray-800 border-gray-900' to='/'>HOME</Link>
         <Link  className=' py-4 px-96 border-b-2 flex justify-center items-center  hover:bg-gray-800 border-gray-900' to='/about'>ABOUT</Link>
         <Link className='px-96 py-4  flex justify-center items-center  hover:bg-gray-800 border-gray-900' to='/contact'>CONTACT</Link>

        </ul>
      

      </>
  
  );
}

export default Mobi;
