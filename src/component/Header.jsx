import React from "react";
import { FaBars } from "react-icons/fa6";

function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex justify-center gap-2">
        <img src="./assets/Logo.svg" alt="Logo"></img>
        <button className="bg-gradient-to-r from-orange-400 to-red-500 text-xs text-white px-2.5 py-1.5 rounded-2xl ">Hosterr is Hiring</button>
      </div>
      <ul className="hidden lg:flex items-center justify-center text-gray-400 font-lato gap-6">
        <li><a href="#">Plans</a></li>
        <li><a href="#">Find Domain</a></li>
        <li><a href="#">Find Hoster</a></li>
       
      </ul>
      <div className="hidden lg:flex justify-center items-center font-lato gap-6">
        <a className="text-gray-400" href="#">Sign In</a>
        <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">Join Waitlist</button>
      </div>
      <div className="lg:hidden">
        <FaBars />
      </div>
    </div>
  );
}

export default Header;
