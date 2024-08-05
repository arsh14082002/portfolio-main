import React, { useEffect } from 'react';
import Lottie from 'lottie-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import lottieEducations from '../../assets/lottie/education.json';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  useEffect(() => {
    gsap.fromTo(
      '.education-card',
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
          trigger: '.education-card',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        stagger: 0.2,
      },
    );

    gsap.fromTo(
      '.education-lottie',
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.education-lottie',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      },
    );
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-10 sm:p-16 md:p-20 bg-gradient-to-b from-[#2b3466fb] to-[#2b3466]">
      <div className="md:flex hidden justify-center items-center mb-10 md:mb-0">
        <div className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] education-lottie">
          <Lottie animationData={lottieEducations} loop={true} autoPlay />
        </div>
      </div>

      <div>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-tight mb-4">
          Education
        </h3>
        <div className="md:hidden mb-10 hidden">
          <div className="w-[300px] h-[300px] ">
            <Lottie animationData={lottieEducations} loop={true} autoPlay />
          </div>
        </div>
        <div className="flex flex-col gap-7">
          <div className="border flex flex-col xl:w-[500px] w-full p-4 rounded-2xl bg-slate-700 education-card">
            <p className="text-white text-lg sm:text-xl font-bold">
              Bachelor of Science in Computer Science
            </p>
            <p className="text-[#8b8686]">2023-present</p>
            <p className="text-[#8b8686]">IGNOU, DELHI</p>
          </div>

          <div className="border flex flex-col w-full xl:w-[500px] p-4 rounded-2xl bg-slate-700 education-card">
            <p className="text-white text-lg sm:text-xl font-bold">
              12<sup>th</sup> from CBSE
            </p>
            <p className="text-[#8b8686]">2020</p>
            <p className="text-[#8b8686]">GBSSS, Aya Nagar, DELHI</p>
          </div>

          <div className="border flex flex-col w-full xl:w-[500px] p-4 rounded-2xl bg-slate-700 education-card">
            <p className="text-white text-lg sm:text-xl font-bold">
              10<sup>th</sup> from CBSE
            </p>
            <p className="text-[#8b8686]">2018</p>
            <p className="text-[#8b8686]">GBSSS, Aya Nagar, DELHI</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
