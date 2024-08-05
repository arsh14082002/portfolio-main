import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projectData = [
  {
    title: 'Padhai Karo',
    description: 'I created up to 10 websites for Padhai Karo Pvt. Ltd.',
    tech: ['HTML', 'CSS', 'JS', 'JQUERY'],
  },
  {
    title: 'Alam Online',
    description: 'A simple landing page for a local documentation shop.',
    tech: ['ReactJS', 'Tailwind CSS'],
  },
  {
    title: 'Secure Yourself',
    description: 'A landing website for CCTV Camera and tech company',
    tech: ['ReactJS', 'Tailwind CSS', 'SASS'],
  },
  {
    title: 'Complete Blog Page',
    description:
      'Complete Blogging website with creating update and delele blog with more functionality',
    tech: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'PDF Notes',
    description: 'A simple website with collage notes pdf',
    tech: ['Nodejs', 'Typescript', 'ReactJs'],
  },
];

const RecentProjects = () => {
  useEffect(() => {
    gsap.fromTo(
      '.project-card',
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
          trigger: '.project-card',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        stagger: 0.2,
      },
    );
  }, []);

  return (
    <div className="p-10 sm:p-16 md:p-20 bg-gradient-to-b from-[#2b3466fb] to-[#2b3466]">
      <div className="w-full">
        <h3 className="text-2xl sm:text-3xl md:text-5xl text-center font-bold text-white uppercase tracking-tight mb-4">
          Most Recent Projects
        </h3>
      </div>

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="project-card flex flex-col items-center justify-center p-6 bg-slate-700 border rounded-lg"
            >
              <h2 className="text-lg sm:text-xl uppercase text-center text-white font-bold">
                {project.title}
              </h2>
              <p className="text-center text-[#8b8686]">{project.description}</p>
              {project.tech && (
                <p className="text-center text-[#8b8686] mt-2">{project.tech.join(', ')}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
