import { useState, useEffect } from 'react';

export const useUsers = ({ limit, skip }) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/users?limit=${limit}&skip=${skip}`
        );
        const data = await response.json();
        setUsers(data.users);
      } catch (error) {
        setError(error);
      }
    };

    fetchUsers();
  }, []);

  return { users, error };
};
