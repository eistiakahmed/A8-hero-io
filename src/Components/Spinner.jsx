import React from "react";
import spinnerImg from ".././assets/logo.png"; 

const Spinner = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-transparent">
  
      <div className="flex items-center justify-center animate-spin-slow transform transition-transform duration-1000 scale-90 hover:scale-120">
        <img src={spinnerImg} alt="Loading..." className="w-12" />
      </div>

      <p className="text-blue-500 font-semibold mt-4 animate-pulse text-lg">
        Loading...
      </p>

    </div>
  );
};

export default Spinner;
