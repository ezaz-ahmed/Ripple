import { useState, useEffect } from 'react';

export const useUsers = ({ limit, skip }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://dummyjson.com/users?limit=${limit}&skip=${skip}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data.users);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, [skip, limit]);

  return { users, isLoading, isError };
};
