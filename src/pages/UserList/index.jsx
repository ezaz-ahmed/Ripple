import { useState } from 'react';
import * as Comp from '../../components';
import * as hooks from '../../hooks';

export const UserList = () => {
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(10);

  const { users, error } = hooks.useUsers({ skip, limit });

  return (
    <>
      <h1>List of All the Users</h1>

      <ul>
        {users &&
          users.map((user) => (
            <li key={user.id}>
              <Comp.UserCard {...user} />
            </li>
          ))}
      </ul>
    </>
  );
};
