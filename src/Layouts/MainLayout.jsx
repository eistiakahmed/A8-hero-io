import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const MainLayout = () => {


  return (
    <div className='flex flex-col min-h-screen bg-gray-100'>
      <Navbar />
      
      <div className=' w-full py-4 md:py-8 lg:py-12 flex-1 '>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;