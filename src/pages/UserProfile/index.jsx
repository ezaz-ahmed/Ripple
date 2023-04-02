import { useParams } from 'react-router-dom';
import { PostCard } from '../../components/PostCard';

import * as hooks from './../../hooks';
import * as Comp from './../../components';

export const UserProfile = () => {
  const { id } = useParams();

  const { posts, isLoading, isError, error } = hooks.useUser({ userId: id });

  if (isLoading) {
    return <Comp.Loading />;
  }

  if (isError) {
    return <Comp.Error message={error} />;
  }

  return (
    <section>
      <Comp.Profile />

      <div className=" grid gap-4 py-6">
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </section>
  );
};
