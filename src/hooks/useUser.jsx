import { useState, useEffect } from 'react';

export const useUser = ({ userId }) => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/users/${userId}/posts`
        );
        const data = await response.json();
        setPosts(data.posts);
      } catch (error) {
        setError(error);
      }
    };

    fetchPosts(userId);
  }, []);

  return { posts, error };
};
