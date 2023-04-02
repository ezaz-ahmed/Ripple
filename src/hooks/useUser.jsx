import { useState, useEffect } from 'react';

export const useUser = ({ userId }) => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getPosts = async () => {
    const response = await fetch(`https://dummyjson.com/users/${userId}/posts`);

    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }

    const data = await response.json();
    return data.posts;
  };

  const getUser = async () => {
    const response = await fetch(`https://dummyjson.com/users/${userId}`);

    if (!response.ok) {
      throw new Error('Failed to fetch user details');
    }

    return await response.json();
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);

        const [posts, user] = await Promise.all([getPosts(), getUser()]).catch(
          (err) => {
            throw new Error(err.message);
          }
        );

        setPosts(posts);
        setUser(user);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchPosts(userId);
  }, []);

  return { posts, user, isLoading, isError };
};
