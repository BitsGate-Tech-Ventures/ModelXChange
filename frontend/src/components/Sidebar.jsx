import React from 'react';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white">
      <div className="p-4">
        <h2 className="text-2xl font-bold">Dashboard</h2>
      </div>
      <ul className="mt-4">
        <li className="p-4 hover:bg-gray-700 cursor-pointer">Home</li>
        <li className="p-4 hover:bg-gray-700 cursor-pointer">Profile</li>
        <li className="p-4 hover:bg-gray-700 cursor-pointer">Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
