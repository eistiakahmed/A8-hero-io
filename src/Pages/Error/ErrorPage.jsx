import React from 'react';
import { Link } from 'react-router';
import error404 from '../../assets/error-404.png';

const ErrorPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <img
        src={error404}
        alt="404 Error"
        className="w-[250px] md:w-[450px] mb-6"
      />

      <h1 className="text-center text-3xl md:text-5xl font-semibold mb-2 text-gray-900">
        Oops, page not found!
      </h1>

      <p className="text-center text-sm md:text-lg text-gray-500 mb-6 max-w-md">
        The page you are looking for is not available. Please check the URL or
        go back to the homepage.
      </p>

      <Link to="/">
        <button className="btn rounded-lg text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-6 py-2 hover:scale-105 transition-transform duration-300">
          Go Back!
        </button>
      </Link>
    </div>
    </div>
  );
};

export default ErrorPage;
