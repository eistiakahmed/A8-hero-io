import React from 'react';
import logoImage from '.././assets/logo.png';
import { RiTwitterXFill } from 'react-icons/ri';
import { GrLinkedin } from 'react-icons/gr';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-[#001931] min-h-[200px] flex items-center">
      <div className="w-11/12 mx-auto ">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={logoImage} alt="" className="w-[45px] h-[45px]" />
            <h3 className="font-bold text-white">HERO.IO</h3>
          </div>
          <div className="text-white">
            <h3 className="font-medium text-xl mb-2">Social Links</h3>
            <span className="flex gap-3 text-lg">
              <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
                <RiTwitterXFill className="text-white text-xl" />
              </span>
              <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
                <GrLinkedin className="text-white text-xl" />
              </span>
              <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
                <FaFacebook className="text-white text-xl" />
              </span>
            </span>
          </div>
        </div>
        <div className="border-b border-gray-500 py-2.5"></div>
        <div className="mt-4">
          <p className="text-white text-center">
            {' '}
            Copyright © 2025 - All right reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
