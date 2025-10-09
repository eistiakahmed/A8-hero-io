import { FaGithub } from 'react-icons/fa';
import { NavLink, Link } from 'react-router';
import logoImg from '.././assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100 shadow-sm w-full">
      <div className="md:w-11/12 w-full mx-auto flex justify-between items-center py-3 px-4 md:px-0">
        <div className="navbar-start flex items-center gap-3">
          <div className="dropdown lg:hidden">
            <div tabIndex={ 0 } className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={ 0 }
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <NavLink
                to="/"
                className={ ({ isActive }) =>
                  isActive
                    ? 'bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'
                    : ''
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/apps"
                className={ ({ isActive }) =>
                  isActive
                    ? 'bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'
                    : ''
                }
              >
                Apps
              </NavLink>
              <NavLink
                to="/installation"
                className={ ({ isActive }) =>
                  isActive
                    ? 'bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'
                    : ''
                }
              >
                Installation
              </NavLink>
            </ul>
          </div>

          <Link to="/" className="flex items-center gap-2">
            <img src={ logoImg } alt="Logo" className="w-[45px] h-[45px]" />
            <span className="font-bold text-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent ">
              HERO.IO
            </span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-4 font-semibold">
            <NavLink
              to="/"
              className={ ({ isActive }) =>
                isActive
                  ? 'border-b border-b-[#9F62F2] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'
                  : ''
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/apps"
              className={ ({ isActive }) =>
                isActive
                  ? 'border-b border-b-[#9F62F2] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'
                  : ''
              }
            >
              Apps
            </NavLink>
            <NavLink
              to="/installation"
              className={ ({ isActive }) =>
                isActive
                  ? 'border-b border-b-[#9F62F2] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'
                  : ''
              }
            >
              Installation
            </NavLink>
          </ul>
        </div>

        <div className="navbar-end ml-auto">
          <a
            href="https://github.com/eistiakahmed"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="btn flex items-center gap-1 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-3 rounded-3xl text-white">
              <FaGithub />
              <p className="font-semibold">Contribute</p>
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
