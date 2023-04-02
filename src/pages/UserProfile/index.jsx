import { useParams } from 'react-router-dom';
import { PostCard } from '../../components/PostCard';

import * as hooks from './../../hooks';
import * as Comp from './../../components';

export const UserProfile = () => {
  const { id } = useParams();

  const { posts, user, isLoading, isError } = hooks.useUser({
    userId: id,
  });

  if (isLoading) {
    return <Comp.Loading />;
  }

  return isError ? (
    <Comp.Error />
  ) : (
    <section>
      <Comp.Profile {...user} />

      <div className=" py-6">
        {posts.length === 0 ? (
          <h1 className=" text-xl text-center font-bold">
            {user.firstName} {user.lastName} has no posts yet
          </h1>
        ) : (
          <div className=" grid gap-4 py-6">
            <h1 className=" text-xl font-bold pb-4">
              List of all the posts by {user.firstName} {user.lastName}
            </h1>

            {posts.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
