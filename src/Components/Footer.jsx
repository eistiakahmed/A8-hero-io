import React from 'react';
import logoImage from '.././assets/logo.png';
import { RiTwitterXFill } from 'react-icons/ri';
import { GrLinkedin } from 'react-icons/gr';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-[#001931] min-h-[200px] flex items-center py-6">
      <div className="w-11/12 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          <div className="flex items-center gap-2">
            <img src={logoImage} alt="Logo" className="w-[45px] h-[45px]" />
            <h3 className="font-bold text-white text-xl md:text-2xl">
              HERO.IO
            </h3>
          </div>

          <div className="text-white text-center md:text-right">
            <h3 className="font-medium text-lg md:text-xl mb-2">
              Social Links
            </h3>
            <span className="flex justify-center md:justify-end gap-3 text-lg">
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

        {/* Divider */}
        <div className="border-b border-gray-500 py-2.5 mt-4"></div>

        <div className="mt-4">
          <p className="text-white text-center text-sm md:text-base">
            Copyright © 2025 - All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
