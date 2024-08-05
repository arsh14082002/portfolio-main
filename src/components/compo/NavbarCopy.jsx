import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import gsap from 'gsap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // useEffect(() => {
  //   gsap.to('', {});
  // }, []);

  return (
    <div>
      <nav className="pl-5 pr-5 pt-6 pb-6 flex justify-between items-center bg-white shadow-md fixed top-[3%] right-1/2 rounded-[50px]">
        {/* <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div> */}

        <div className={`md:flex ${isOpen ? 'block' : 'hidden'} flex-col md:flex-row gap-5`}>
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
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
