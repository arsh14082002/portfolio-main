import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import Loader from '../components/compo/Loader';
import Error from '../components/compo/Error';
import './Styles/singlePage.scss';
import NoBlogFound from '../components/compo/NoBlogFound';

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
      {post ? (
        <div className="p-4 rounded-lg shadow-md">
          <h1 className="text-[60px] font-bold mb-4 ">{post.title}</h1>
          <img src={post.banner} alt={post.title} className="w-full h-80 object-cover" />

          <div className="single_post_blog">
            <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
          </div>
          <div>
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

      {relatedPosts.length > 0 && (
        <div>
          <h2>Related Posts</h2>
          <div className="grid grid-cols-4 gap-3">
            {relatedPosts.map((relatedPost) => (
              <div key={relatedPost._id} className="related-post-item">
                <img
                  src={relatedPost.banner}
                  alt={relatedPost.title}
                  className="related-post-img"
                />
                <Link
                  to={`/blogs/${toUrlFriendly(relatedPost.title)}`}
                  className="related-post-link"
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
