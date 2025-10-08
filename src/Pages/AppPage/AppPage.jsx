import React from 'react';
import { Link } from 'react-router';
import downloadImage from '../../assets/icon-downloads.png';
import rating from '../../assets/icon-ratings.png';
import { formatNumber } from '../../FormatNumber/FormatNumber';

const AppPage = ({ app }) => {
  const { id, title, image, ratingAvg, downloads } = app;

  return (
    <Link to={`/apps/${id}`}>
      <div className="p-5 rounded-3xl bg-white shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer">
        <div className="flex justify-center">
          <img
            src={image}
            alt={title}
            className="w-[260px] h-[260px] md:w-[280px] md:h-[280px] lg:w-[300px] lg:h-[300px] rounded-2xl object-cover shadow-sm"
          />
        </div>
        <h4 className="text-lg md:text-xl mt-3 text-center font-semibold text-gray-900 truncate">
          {title}
        </h4>
        <div className="flex justify-between items-center mt-4">
          <span className="flex items-center gap-2 bg-green-50 p-2 rounded-2xl">
            <img src={downloadImage} alt="Downloads" className="w-5 h-5" />
            <p className="text-green-600 font-medium text-sm">{formatNumber(downloads)}</p>
          </span>
          <span className="flex items-center gap-2 bg-orange-50 p-2 rounded-2xl">
            <img src={rating} alt="Rating" className="w-5 h-5" />
            <p className="text-orange-500 font-medium text-sm">{ratingAvg}</p>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default AppPage;
