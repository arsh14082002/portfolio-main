import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

var settings = {
  dots: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
  ],
  //   cssEase: 'linear',
};

const BlogSlider = () => {
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
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-10 sm:p-16 md:p-20">
      <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-tight mb-4 md:text-center text-center contact-title">
        Recent Blogs
      </h3>{' '}
      <div >
        {posts.length === 0 ? (
          <p>No posts available</p>
        ) : (
          <Slider {...settings}>
            {posts.map((post) => (
              <div key={post._id} className=" h-fit text-white">
                <div className="bg-slate-700 flex flex-col ml-3 mr-3 rounded-2xl border p-4 pl-6 pr-6 justify-center items-center h-full">
                  <h2 className="text-center font-bold text-xl">{post.title}</h2>
                  <p className="text-center">{post.des}</p>
                  <Link
                    to={`/blogs/${post._id}`}
                    className="font-bold bg-white text-black p-2 pl-5 pr-5 mt-3"
                  >
                    Read Blog
                  </Link>
                </div>
                {/* Add more content here as needed */}
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default BlogSlider;
