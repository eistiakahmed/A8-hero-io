import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';
import logoImg from ".././assets/logo.png"



const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="md:w-11/12 md:mx-auto flex justify-between items-center">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <NavLink to="/">
                <a>Home</a>
              </NavLink>
              <NavLink to="/apps">
                <a>Apps</a>
              </NavLink>

              <NavLink to="/installation">
                <a>Installation</a>
              </NavLink>
            </ul>
          </div>
         <Link to="/" className='flex items-center gap-1'>
         <img src={logoImg} alt="" className='w-[45px] h-[45px]' />
          <a className="font-bold text-xl">HERO.IO</a>
          
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium flex gap-2">
            <NavLink to="/">
              <a>Home</a>
            </NavLink>
            <NavLink to="/apps">
              <a>Apps</a>
            </NavLink>

            <NavLink to="/installation">
              <a>Installation</a>
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end md:ml-0 ml-28">
          <a href="https://github.com/eistiakahmed" target="_blank">
            <span className="btn flex items-center gap-1  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-3 rounded-3xl text-white">
              <FaGithub />
              <p className="font-semibold">Contribute</p>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
