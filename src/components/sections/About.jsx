import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import b1 from '../../assets/b1.png';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    gsap.fromTo(
      '.about-content',
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
          trigger: '.about-content',
          start: 'top 80%',
        },
        stagger: 0.2,
      },
    );
  }, []);

  return (
    <section className="flex flex-col md:flex-row p-10 sm:p-16 md:p-20 gap-5 bg-gradient-to-b from-[#2b3466fb] to-[#2b3466] text-white">
      <div className="flex-1 flex flex-col justify-center about-content">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-tight mb-4 text-center md:text-right">
          About Me
        </h2>

        <div className="md:hidden flex justify-center items-center about-content">
          <img className="rounded-md hidden w-[200px] h-auto" src={b1} alt="" />
        </div>

        <p className="text-base sm:text-lg tracking-wide mt-4 md:mt-0 text-center md:text-right about-content mb-3">
          I have intermediate-level knowledge of JavaScript, which enables me to add interactivity
          and dynamic functionality to websites. I have utilized JavaScript to enhance user
          experiences and create engaging features on the websites I have worked on. Additionally, I
          have experience working with React. Next.js provides me with a powerful toolkit for
          developing scalable and performant web applications.
        </p>

        <p className="text-base sm:text-lg tracking-wide mt-4 md:mt-0 text-center md:text-right about-content ">
          I bring not just technical prowess but also a passion for creating impactful web
          solutions. Let's connect to explore potential collaborations, share insights, and
          contribute to the ever-evolving world of technology.
        </p>
      </div>

      <div className="flex-1 md:flex  hidden justify-center items-center about-content">
        <img className="rounded-md w-full h-auto" src={b1} alt="" />
      </div>
    </section>
  );
};

export default About;
