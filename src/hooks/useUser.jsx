import { useState, useEffect } from 'react';

export const useUser = ({ userId }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://dummyjson.com/users/${userId}/posts`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }

        const data = await response.json();
        setPosts(data.posts);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setError(error);
        setIsLoading(false);
      }
    };

    fetchPosts(userId);
  }, []);

  return { posts, isLoading, isError, error };
};
