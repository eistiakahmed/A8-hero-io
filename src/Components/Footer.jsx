import React from 'react';
import logoImage from '../assets/logo.png';
import { RiTwitterXFill } from 'react-icons/ri';
import { GrLinkedin } from 'react-icons/gr';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#001930]  text-white py-12">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logoImage} alt="Logo" className="w-[45px] h-[45px]" />
            <h3 className="font-extrabold text-2xl tracking-wide">HERO.IO</h3>
          </div>
          <p className="text-gray-300 leading-relaxed">
            HERO.IO helps you discover and install the best apps in one place.
            Our mission is to make technology simple, accessible, and enjoyable.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-xl mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white transition cursor-pointer">Home</li>
            <li className="hover:text-white transition cursor-pointer">
              About Us
            </li>
            <li className="hover:text-white transition cursor-pointer">
              All Apps
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Contact
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-xl mb-4">
            Support
          </h4>
          <ul className="space-y-2 text-gray-200">
            <li className="hover:text-white transition cursor-pointer">FAQ</li>
            <li className="hover:text-white transition cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Terms & Conditions
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Help Center
            </li>
          </ul>
        </div>


        <div>
          <h4 className="font-semibold text-xl mb-4">
            Follow Us
          </h4>
          <div className="flex gap-3 mt-3">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-500 transition-all duration-300 transform hover:-translate-y-1"
            >
              <RiTwitterXFill className="text-white text-xl" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-500 transition-all duration-300 transform hover:-translate-y-1"
            >
              <GrLinkedin className="text-white text-xl" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-500 transition-all duration-300 transform hover:-translate-y-1"
            >
              <FaFacebook className="text-white text-xl" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-500 transition-all duration-300 transform hover:-translate-y-1"
            >
              <FaInstagram className="text-white text-xl" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-500 transition-all duration-300 transform hover:-translate-y-1"
            >
              <FaGithub className="text-white text-xl" />
            </a>
          </div>
        </div>
      </div>


      <div className="border-t border-gray-400 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} HERO.IO — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
