import React from 'react';

import downloadImage from "../../assets/icon-downloads.png"
import rating from "../../assets/icon-ratings.png"
import { formatNumber } from '../../FormatNumber/FormatNumber';

const InstallApps = ({ install, handleRemove }) => {
  // console.log(install);
  const { id,image,title, downloads, size, ratingAvg} = install;
  return (
    <div>
      <div className="bg-white flex justify-between items-center my-5 p-5 rounded-3xl">
        <div className="">
          <div className='flex items-center gap-4'>
            <img src={image} alt="" className="w-[80px] h-[80px] rounded-3xl border border-gray-200" />
            <div className="">
              <h3 className='text-xl font-medium'>{title}</h3>
              <div className='flex gap-3'>
                <span className='flex items-center gap-1'>
                  <img src={downloadImage} alt="" className='w-[18px] h-[18px]'/>
                  <p className='text-green-500'>{formatNumber(downloads)}</p>
                </span>
                <span className='flex items-center gap-1'>
                  <img src={rating} alt="" className='w-[18px] h-[18px]'/>
                  <p className='text-amber-500'>{ratingAvg}</p>
                </span>
                <span>
                  <p className='text-gray-500'>{size} MB</p>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <button onClick={()=> handleRemove(id)} className='btn bg-red-500 text-white rounded-xl'>Uninstall</button>
          
        </div>
      </div>

      
    </div>
  );
};

export default InstallApps;
