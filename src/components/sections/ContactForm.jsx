import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lottie from 'lottie-react';
import lottieContactForm from '../../assets/lottie/contactus.json';
import emailjs from '@emailjs/browser';

gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1vsob98', 'template_rthqj2s', form.current, {
        publicKey: 'sl4aiBZBEheugpR7r',
      })
      .then(
        () => {
          alert('Your Query are Submitted!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  useEffect(() => {
    gsap.fromTo(
      '.contact-title, .contact-form input, .contact-form textarea, .contact-form button, .lottie-contact',
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
          trigger: '.contact-form',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        stagger: 0.2,
      },
    );
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-10 sm:p-16 md:p-20 bg-gradient-to-b from-[#2b3466fb] to-[#2b3466] contact-form">
      <div>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-tight mb-4 md:text-right text-center contact-title">
          Get In Touch
        </h3>
        <div className="md:hidden flex justify-center items-center">
          <div className="w-[300px] h-[300px] lottie-contact">
            <Lottie animationData={lottieContactForm} loop={true} autoPlay />
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-5">
            <input
              type="text"
              name="from_name"
              id="name"
              placeholder="Enter your name/organisation"
              className="w-full border h-[50px] sm:h-[55px] md:h-[65px] text-base sm:text-lg md:text-[25px]
                border-gray-300 rounded-md p-2 mt-2"
            />
          </div>

          <div className="mb-5">
            <input
              type="tel"
              name="mobile_number"
              id="mobile"
              placeholder="Enter your mobile/tele"
              className="w-full border h-[50px] sm:h-[55px] md:h-[65px] text-base sm:text-lg md:text-[25px]
                border-gray-300 rounded-md p-2 mt-2"
            />
          </div>

          <div className="mb-5">
            <input
              type="email"
              name="from_email"
              id="email"
              placeholder="Enter your Email"
              className="w-full border h-[50px] sm:h-[55px] md:h-[65px] text-base sm:text-lg md:text-[25px]
                border-gray-300 rounded-md p-2 mt-2"
            />
          </div>

          <div className="mb-2">
            <textarea
              id="message"
              name="message"
              placeholder="your message"
              className="w-full border resize-none h-[150px] sm:h-[175px] md:h-[200px] text-base sm:text-lg md:text-[25px]
                border-gray-300 rounded-md p-2 mt-2"
            ></textarea>
          </div>

          <div className="mb-5">
            <p className="text-[#fff] font-bold">Your data are too secure</p>
          </div>

          <div>
            <button className="pt-3 sm:pt-4 pb-3 sm:pb-4 pr-10 sm:pr-14 pl-10 sm:pl-14 uppercase rounded-md bg-[#000] text-[#fff]">
              Send
            </button>
          </div>
        </form>
      </div>

      <div className="md:flex justify-center items-center mt-10 md:mt-0 hidden">
        <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lottie-contact">
          <Lottie animationData={lottieContactForm} loop={true} autoPlay />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
