import React from 'react';
import spinnerImg from '.././assets/logo.png';

const Spinner = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] bg-transparent">
      <div className="flex items-center justify-center animate-spin transform transition-transform duration-700 ease-in-out scale-75 hover:scale-110">
        <img src={spinnerImg} alt="Loading..." className="w-32" />
      </div>

      <p className="text-blue-500 font-semibold mt-4 animate-pulse text-lg">
        Loading...
      </p>
    </div>
  );
};

export default Spinner;
