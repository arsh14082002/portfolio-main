import React, { useEffect } from 'react';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useEffect(() => {
    gsap.fromTo(
      '.footer-title, .footer-text, .footer-icons a',
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.footer',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        stagger: 0.2,
      },
    );
  }, []);

  return (
    <div className="p-10 sm:p-16 md:p-20 bg-gradient-to-b from-[#394797fb] to-[#071460] footer">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">
        <div className="text-center md:text-left">
          <h3 className="text-[#fff] text-2xl tracking-wider mb-2 footer-title">Thank You!!</h3>
          <p className="text-[#fff] footer-text">
            Feel free to connect and let's embark on a journey of innovation together.
          </p>
        </div>

        <div className="text-center md:text-right">
          <h3 className="text-[#fff] text-2xl tracking-wider mb-2 footer-title">Follow On</h3>
          <div className="flex justify-center md:justify-end gap-5 footer-icons">
            <a href="#">
              <FaTwitter size={'40px'} color="#fff" />
            </a>
            <a href="#">
              <FaInstagram size={'40px'} color="#fff" />
            </a>
            <a href="#">
              <FaLinkedin size={'40px'} color="#fff" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
