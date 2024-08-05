import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import axios from 'axios';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Loader from '../components/compo/Loader';

gsap.registerPlugin(ScrollTrigger);

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://blog-server-nbl8.onrender.com/api/posts');
        setPosts(response.data);
      } catch (error) {
        setError('Error fetching posts');
        toast('Error fetching posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();

    gsap.fromTo(
      '.blog-card',
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

  const toUrlFriendly = (str) => {
    return encodeURIComponent(
      str
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, ''),
    );
  };

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-10 sm:p-16 md:p-20 bg-gradient-to-b from-[#2b3466fb] to-[#2b3466]">
      <Toaster />
      <div className="w-full">
        <h3 className="text-2xl sm:text-3xl md:text-5xl text-center font-bold text-white uppercase tracking-tight mb-4">
          Blogs
        </h3>
      </div>

      <div>
        <div className="blog-card grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {posts.map((post) => (
            <div key={post._id} className="h-full">
              <div className="bg-slate-700 border text-white rounded-lg shadow-md p-4 h-full">
                <h2 className="text-2xl font-bold ">{post.title}</h2>
                <img
                  src={post.banner}
                  alt={post.title}
                  className="h-[200px] object-cover w-full mt-3"
                />
                <p className="">{post.des}</p>
                <Link
                  to={`/blogs/${post._id}`}
                  className="font-bold bg-white text-black p-2 pl-5 pr-5 mt-3 flex w-fit"
                >
                  Read Blog
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
