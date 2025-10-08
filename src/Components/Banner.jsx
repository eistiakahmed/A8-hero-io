import React from 'react';
import googlePlayStore from '.././assets/playStore.png';
import appStore from '.././assets/appStoreIos.png';
import heroImage from '.././assets/hero.png';

const Banner = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      {/* Hero Text */}
      <h1 className="text-center font-bold text-[#001931] text-4xl md:text-6xl lg:text-7xl leading-tight">
        We Build <br />
        <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
          Productive
        </span>{' '}
        Apps
      </h1>

      {/* Subheading */}
      <p className="text-center text-slate-500 mt-4 text-sm md:text-lg max-w-3xl">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>

      {/* Download Buttons */}
      <div className="flex flex-col lg:flex-row justify-center gap-5 my-6">
        <a
          href="https://play.google.com/store/"
          className="border border-gray-200 p-3 flex items-center rounded-xl hover:shadow-lg transition transform hover:-translate-y-1"
        >
          <img src={googlePlayStore} alt="Google Play" className="w-8 h-8" />
          <p className="ml-3 text-sm font-bold">Google Play</p>
        </a>
        <a
          href="https://www.apple.com/app-store/"
          className="border border-gray-200 p-3 flex items-center rounded-xl hover:shadow-lg transition transform hover:-translate-y-1"
        >
          <img src={appStore} alt="App Store" className="w-8 h-8" />
          <p className="ml-3 text-sm font-bold">App Store</p>
        </a>
      </div>

      {/* Hero Image */}
      <div className="mt-6 w-full flex justify-center">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full max-w-[900px] h-auto rounded-2xl"
        />
      </div>

      {/* Stats Section */}
      <div className="w-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-16 md:py-24 flex flex-col items-center">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white text-center mb-12">
          Trusted by Millions, Built for You
        </h1>

        <div className="flex flex-col lg:flex-row justify-evenly items-center gap-8 lg:gap-12 w-full max-w-6xl text-white text-center">
          <div className="transition transform hover:scale-105">
            <p className="text-sm md:text-base">Total Downloads</p>
            <h1 className="font-extrabold text-4xl md:text-5xl lg:text-[64px]">29.6M</h1>
            <p className="text-sm md:text-base">21% more than last month</p>
          </div>
          <div className="transition transform hover:scale-105">
            <p className="text-sm md:text-base">Total Reviews</p>
            <h1 className="font-extrabold text-4xl md:text-5xl lg:text-[64px]">906K</h1>
            <p className="text-sm md:text-base">46% more than last month</p>
          </div>
          <div className="transition transform hover:scale-105">
            <p className="text-sm md:text-base">Active Apps</p>
            <h1 className="font-extrabold text-4xl md:text-5xl lg:text-[64px]">132+</h1>
            <p className="text-sm md:text-base">31 more will launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
