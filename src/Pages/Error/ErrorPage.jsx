import React from 'react';

import error404 from '../../assets/error-404.png';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <>
      <div className="flex justify-center mt-20">
        <img src={error404} alt="" />
      </div>

        <h1 className="text-center text-5xl font-semibold my-3">Oops, page not found!</h1>
        <p className=" text-center text-xl text-[#627382]">
          The page you are looking for is not available.
        </p>
      <div className='flex justify-center mt-2'>

        <Link to='/'>
        <button className="btn rounded-lg text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">Go Back!</button>
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
