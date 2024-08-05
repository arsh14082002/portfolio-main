import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { SquareLibrary } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="pl-5 pr-5 pt-6 pb-6 flex justify-between items-center bg-white bg-opacity-20 backdrop-blur-lg shadow-md ">
        <div className="logo">
          <Link to={'/'}>
            <h2 className="text-2xl font-bold text-white">PORTFOLIO.</h2>
          </Link>
        </div>

        <Link
          to={'/blogs'}
          className="flex gap-2 items-center justify-center bg-white p-3 pr-5 pl-5 rounded-lg font-bold"
        >
          <span>Blogs</span> <SquareLibrary />
        </Link>

        {/* <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div> */}

        {/* <div className={`md:flex ${isOpen ? 'block' : 'hidden'} flex-col md:flex-row gap-5`}>
          <ul className="flex flex-col md:flex-row gap-5 text-lg">
            <li>
              <Link to={'/'} onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to={'/about'} onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to={'/education'} onClick={toggleMenu}>
                Education
              </Link>
            </li>
            <li>
              <Link to={'/experience'} onClick={toggleMenu}>
                Experience
              </Link>
            </li>
            <li>
              <Link to={'/recent-projects'} onClick={toggleMenu}>
                Recent Projects
              </Link>
            </li>
            <li>
              <Link to={'/contact'} onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div> */}
      </nav>
    </div>
  );
};

export default Navbar;
