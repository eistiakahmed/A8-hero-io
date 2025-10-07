import React from 'react';

import downloadImage from "../../assets/icon-downloads.png"
import rating from "../../assets/icon-ratings.png"



const AppPage = ({ app }) => {
  console.log(app);

   const formatNumber = (num) => { 
    if(num >= 1000000) {
      return parseFloat((num/1000000).toFixed(1)) + "M";
    }else if (num >= 1000){ 
      return parseFloat((num / 1000).toFixed(1)) + "k";
    }else{
      return num.toString();
    }
   }

  const { title, image, ratingAvg, downloads } = app;
  return (
    <div className=" p-5 rounded-3xl bg-white shadow-sm hover:scale-105 transition duration-500">
      <div className="flex justify-center">
        <img
          src={image}
          alt={title}
          className="w-[300px] h-[300px] rounded-4xl "
        />
      </div>
      <h4 className="text-xl mt-1.5 text-center font-medium">{title}</h4>
      <div className='flex justify-between items-center mt-3.5'>
        <span className='flex items-center gap-1 bg-[#f1f5e9] p-2 rounded-2xl'>
          <img src={downloadImage} alt="" className='w-[20px] h-[20px]'/>
          <p className='text-green-500'>{formatNumber(downloads)}</p>
        </span>
        <span className='flex items-center gap-1 bg-[#fff0e1] p-2 rounded-2xl'>
          <img src={rating} alt="" className='w-[20px] h-[20px]'/>
          <p className='text-[#ff8812]'>{ratingAvg}</p>
        </span>
      </div>
    </div>
  );
};

export default AppPage;
