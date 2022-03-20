import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../image/logo.ico";
import Mobi from "./Mobi";






export default (props) => {



  return (
    <>
      <div className="   fixed z-50 w-full border-y-2 shadow-md border-gray-900 justify-between items-end   px-1 md:flex md:justify-end  py-2 h-[44px]  bg-gray-800">
        <ul className=" sm:hidden  md:flex gap-6 text-white">

          <li ><Link to='/'>HOME</Link></li>
          <li><Link to='/about'>ABOUT</Link></li>
          <li><Link to='/contact'>CONTACT</Link></li>

        </ul>
        <Mobi />

      </div>



    </>


  )

}

