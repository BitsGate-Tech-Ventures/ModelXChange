import React from 'react';
import user from '../assets/user.png';

import { GoHome } from "react-icons/go";
import { CiUser } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { BsGraphUp } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";
import { VscHistory } from "react-icons/vsc";

const Sidebar = () => {
  return (
    <div className="h-vh w-65 bg-gray-800 text-white">

      <div className="p-4 flex items-center justify-center gap-2 ">
      <img className="h-10 w-10 mr-2 " src={user} alt="Logo" />
        <h2 className="text-2xl font-bold">User</h2>
      </div>

      <ul className="mt-4  flex items-center gap-1 flex-col">
        <li className="p-4 cursor-pointer  flex items-center justify-center gap-5 text-xl "><GoHome /> Home</li>
        <li className="p-4 cursor-pointer  flex items-center gap-5 text-xl  justify-center"><CiUser /> Profile</li>
        <li className="p-4 cursor-pointer  flex items-center justify-center gap-5 text-xl"><CiShoppingCart />Orders</li>
        <li className="p-4 cursor-pointer  flex items-center justify-center gap-5 text-xl"><VscHistory />History</li>
        <li className="p-4 cursor-pointer  flex items-center justify-center gap-5 text-xl"><BsGraphUp />Statistics</li>
        <li className="p-4 cursor-pointer  flex items-center justify-center gap-5 text-xl"><CiSettings />Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
