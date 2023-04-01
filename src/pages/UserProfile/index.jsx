import { useParams } from 'react-router-dom';
import { PostCard } from '../../components/PostCard';

import * as hooks from './../../hooks';

export const UserProfile = () => {
  const { id } = useParams();

  const { posts, error } = hooks.useUser({ userId: id });

  console.log(posts);

  return (
    <ul>
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </ul>
  );
};
