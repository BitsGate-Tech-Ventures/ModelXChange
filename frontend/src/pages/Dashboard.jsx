import React from 'react';
import Sidebar from '../components/Sidebar';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img6 from '../assets/6.jpg';
import img7 from '../assets/7.jpg';
import img8 from '../assets/8.jpg';
import img9 from '../assets/9.jpg';


const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />


      <div className="flex flex-col w-full">


      <div className="flex-1 p-6">
        <p className='text-3xl pb-4'>New releases</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src={img1} alt="Card 1" className="w-full h-48 object-cover rounded-md mb-4"/>
            <h2 className="text-2xl text-black font-bold mb-4">Product 1</h2>
            <figcaption className="mt-2 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nobis cum earum voluptatem debitis dolore laudantium dolores alias accusamus omnis?</figcaption>
          </div>

          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src={img2} alt="Card 1" className="w-full h-48 object-cover rounded-md mb-4"/>
            <h2 className="text-2xl text-black font-bold mb-4">Product 2</h2>
            <figcaption className="mt-2 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nobis cum earum voluptatem debitis dolore laudantium dolores alias accusamus omnis?</figcaption>
          </div>

          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src={img3} alt="Card 1" className="w-full h-48 object-cover rounded-md mb-4"/>
            <h2 className="text-2xl text-black font-bold mb-4">Product 3</h2>
            <figcaption className="mt-2 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nobis cum earum voluptatem debitis dolore laudantium dolores alias accusamus omnis?</figcaption>
          </div>


        
          
        </div>
      </div>



      <div className="flex-1 p-6">
      <p className='text-3xl pb-4'>Trending</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         

         
        <div className="bg-white p-6 rounded-lg shadow-md">
            <img src={img4} alt="Card 1" className="w-full h-48 object-cover rounded-md mb-4"/>
            <h2 className="text-2xl text-black font-bold mb-4">Product 1</h2>
            <figcaption className="mt-2 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nobis cum earum voluptatem debitis dolore laudantium dolores alias accusamus omnis?</figcaption>
          </div>

          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src={img5} alt="Card 1" className="w-full h-48 object-cover rounded-md mb-4"/>
            <h2 className="text-2xl text-black font-bold mb-4">Product 2</h2>
            <figcaption className="mt-2 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nobis cum earum voluptatem debitis dolore laudantium dolores alias accusamus omnis?</figcaption>
          </div>


          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src={img6} alt="Card 1" className="w-full h-48 object-cover rounded-md mb-4"/>
            <h2 className="text-2xl text-black font-bold mb-4">Product 3</h2>
            <figcaption className="mt-2 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nobis cum earum voluptatem debitis dolore laudantium dolores alias accusamus omnis?</figcaption>
          </div>


        </div>
      </div>



      <div className="flex-1 p-6">
      <p className='text-3xl pb-4'>Popular</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        
        <div className="bg-white p-6 rounded-lg shadow-md">
            <img src={img7} alt="Card 1" className="w-full h-48 object-cover rounded-md mb-4"/>
            <h2 className="text-2xl text-black font-bold mb-4">Product 1</h2>
            <figcaption className="mt-2 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nobis cum earum voluptatem debitis dolore laudantium dolores alias accusamus omnis?</figcaption>
          </div>

          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src={img8} alt="Card 1" className="w-full h-48 object-cover rounded-md mb-4"/>
            <h2 className="text-2xl text-black font-bold mb-4">Product 2</h2>
            <figcaption className="mt-2 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nobis cum earum voluptatem debitis dolore laudantium dolores alias accusamus omnis?</figcaption>
          </div>

          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src={img9} alt="Card 1" className="w-full h-48 object-cover rounded-md mb-4"/>
            <h2 className="text-2xl text-black font-bold mb-4">Product 3</h2>
            <figcaption className="mt-2 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nobis cum earum voluptatem debitis dolore laudantium dolores alias accusamus omnis?</figcaption>
          </div>

        </div>
      </div>

      
    </div>


    </div>
  );
};

export default Dashboard;
