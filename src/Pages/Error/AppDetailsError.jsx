import React from 'react';
import AppError from '../../assets/App-Error.png';
import { Link } from 'react-router';
const AppDetailsError = () => {
  return (
    <div className='flex flex-col items-center justify-center  px-4 min-h-[50vh]'>
      <div className="mb-4">
        <img src={AppError} alt="" className="w-[250px] md:w-[450px] md:mb-4" />
      </div>


      <h1 className="text-center text-3xl md:text-5xl font-semibold mb-2 text-gray-900">
        OPPS!! APP NOT FOUND
      </h1>
      <p className="text-center text-sm md:text-lg text-gray-500 mb-6 md:mx-0 mx-3">
        The App you are requesting is not found on our system.  please try another apps
      </p>
      <div className='flex justify-center mb-8'>
        <Link to="/">
        <button className="btn rounded-lg text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-6 py-2 hover:scale-105 transition-transform duration-300">
          Go Back!
        </button>
      </Link>
      </div>
    </div>
  );
};

export default AppDetailsError;
