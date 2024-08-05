import gsap from 'gsap';
import { useEffect } from 'react';
import bg from '../../assets/bg.png';
import b5 from '../../assets/b5.svg';
import b4 from '../../assets/b4.svg';
import resume from '../../assets/Resume.pdf';

const Header = () => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power2.out' } });

    tl.fromTo(
      '.header',
      {
        opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        y: 0,
      },
    )
      .fromTo(
        '.header-content',
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
        },
      )
      .fromTo(
        '.header-buttons button',
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.1,
        },
      );
  }, []);

  const handleGetResume = () => {
    // Replace with the actual resume file URL or path
    const resumeUrl = resume;
    window.open(resumeUrl, '_blank');
  };

  const handleGetCall = () => {
    // Replace with your phone number
    const phoneNumber = '+919711629495';
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <header
      className="pt-12 pb-12 font-custom header bg-cover bg-center md:grid md:grid-cols-2"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="md:flex hidden md:flex-col md:items-end">
        <img src={b4} alt="" width={'250px'} />
        <img src={b5} alt="" />
      </div>
      <div className="flex flex-col justify-center items-start w-full p-10">
        <h1 className="text-4xl font-bold mb-2 header-content text-white">My Portfolio</h1>
        <h2 className="text-3xl mb-2 header-content text-white">MOHD ARSALAN</h2>
        <h3 className="text-2xl mb-4 header-content text-white">Full Stack Developer</h3>
        <p className="text-left mb-6 max-w-xl header-content text-white">
          Hello! I'm Mohd Arsalan, a passionate and dedicated Web Developer with a Nodejs,
          ExpressJs, Mongodb and front-end technologies like ReactJS. My journey includes successful
          completion of Full Stack JavaScript Development As self study and pursuing a Bachelor's
          degree in Computer Applications (BCA) from IGNOU (Delhi)
        </p>
        <div className="flex gap-4 header-buttons">
          <button
            className="bg-white text-black py-2 px-4 rounded transition-transform transform hover:scale-105"
            onClick={handleGetResume}
          >
            Get Resume
          </button>
          <button
            className="bg-white text-black py-2 px-4 rounded transition-transform transform hover:scale-105"
            onClick={handleGetCall}
          >
            Get Call
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
