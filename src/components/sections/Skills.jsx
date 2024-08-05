import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import htmlIcon from '../../assets/skills/html.svg';
import bootstrapIcon from '../../assets/skills/bootstrap.svg';
import cIcon from '../../assets/skills/c.svg';
import cplusplusIcon from '../../assets/skills/cplusplus.svg';
import cssIcon from '../../assets/skills/css.svg';
import figmaIcon from '../../assets/skills/figma.svg';
import gitIcon from '../../assets/skills/git.svg';
import javascriptIcon from '../../assets/skills/javascript.svg';
import materialuiIcon from '../../assets/skills/materialui.svg';
import mongoDBIcon from '../../assets/skills/mongoDB.svg';
import reactIcon from '../../assets/skills/react.svg';
import tailwindIcon from '../../assets/skills/tailwind.svg';
import typescriptIcon from '../../assets/skills/typescript.svg';
import wordpressIcon from '../../assets/skills/wordpress.svg';
import nodejsIcon from '../../assets/skills/nodejs.svg';
import gsapIcon from '../../assets/skills/gsap.svg';
import nextjsIcon from '../../assets/skills/next-js.svg';
import sassIcon from '../../assets/skills/sass.svg';
import shadcnIcon from '../../assets/skills/shadcn.svg';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'HTML', icon: htmlIcon },
  { name: 'CSS', icon: cssIcon },
  { name: 'JavaScript', icon: javascriptIcon },
  { name: 'Bootstrap', icon: bootstrapIcon },
  { name: 'Tailwind CSS', icon: tailwindIcon },
  { name: 'React', icon: reactIcon },
  { name: 'MongoDB', icon: mongoDBIcon },
  { name: 'NodeJS', icon: nodejsIcon },
  { name: 'NextJS', icon: nextjsIcon },
  { name: 'Material-UI', icon: materialuiIcon },
  { name: 'UI Shadcn', icon: shadcnIcon },
  { name: 'GSAP', icon: gsapIcon },
  { name: 'TypeScript', icon: typescriptIcon },
  { name: 'SASS', icon: sassIcon },
  { name: 'Git', icon: gitIcon },
  { name: 'Figma', icon: figmaIcon },
  { name: 'WordPress', icon: wordpressIcon },
  { name: 'C', icon: cIcon },
  { name: 'C++', icon: cplusplusIcon },
];

const Skills = () => {
  useEffect(() => {
    gsap.fromTo(
      '.skill-card',
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
          trigger: '.skill-card',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        stagger: 0.2,
      },
    );
  }, []);

  return (
    <div>
      <section className="p-10 sm:p-16 md:p-20 bg-gradient-to-b from-[#2b3466fb] to-[#2b3466] text-white">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-tight mb-4 text-center">
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 sm:gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#d8cc95] flex flex-col justify-center items-center p-3 sm:p-4 md:p-5 rounded-xl gap-3 border-[#000] border-solid border-4 skill-card"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
              />
              <h4 className="text-[#000] text-sm sm:text-base md:text-lg">{skill.name}</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
