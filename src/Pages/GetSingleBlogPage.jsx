import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import Loader from '../components/compo/Loader';
import Error from '../components/compo/Error';
import './Styles/singlePage.scss';
import NoBlogFound from '../components/compo/NoBlogFound';
import { Helmet } from 'react-helmet';
import LineCompo from '../components/compo/LineCompo';

const GetSingleBlogPage = () => {
  const { postId } = useParams();
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `https://blog-server-nbl8.onrender.com/api/post/${postId}`,
        );

        setPost(response.data);

        const relatedResponse = await axios.get(
          `https://blog-server-nbl8.onrender.com/api/posts/suggestions/${postId}`,
        );

        setRelatedPosts(relatedResponse.data);

        setLoading(false);
      } catch (error) {
        setError('Error fetching post');
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  if (loading) return <Loader />;

  if (error) return <Error error={error} />;

  const sanitizedContent = DOMPurify.sanitize(post.content);

  const toUrlFriendly = (str) => {
    return encodeURIComponent(
      str
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, ''),
    );
  };

  return (
    <div className="single_post_page">
      <Helmet>
        <title>{post.title}</title>
        <link rel="canonical" href={`https://portoliodot.netlify.app/blogs/${post.title}`} />
      </Helmet>

      {post ? (
        <div className="p-4 rounded-lg">
          <h1 className="text-[60px] font-bold mb-4 ">{post.title}</h1>
          <img src={post.banner} alt={post.title} className="w-full h-80 object-cover" />

          <div className="single_post_blog">
            <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
          </div>
          <div className="mt-5">
            {post.tags && post.tags.length > 0 ? (
              post.tags.map((tag, index) => (
                <span key={index} className="bg-gray-200 text-gray-600 px-2 py-1 rounded-sm mr-2">
                  {tag}
                </span>
              ))
            ) : (
              <p>No tags available</p>
            )}
          </div>
        </div>
      ) : (
        <NoBlogFound />
      )}

      <LineCompo />

      {relatedPosts.length > 0 && (
        <div className="p-4">
          <h2 className="text-3xl font-bold">Related Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-3">
            {relatedPosts.map((relatedPost) => (
              <div
                key={relatedPost._id}
                className="related-post-item h-full bg-slate-700 p-4 border rounded-lg"
              >
                <img
                  src={relatedPost.banner}
                  alt={relatedPost.title}
                  className="related-post-img h-[150px] w-full object-cover mb-2"
                />
                <Link
                  to={`/blogs/${toUrlFriendly(relatedPost.title)}`}
                  className="related-post-link text-xl font-bold mt-3"
                >
                  {relatedPost.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GetSingleBlogPage;
