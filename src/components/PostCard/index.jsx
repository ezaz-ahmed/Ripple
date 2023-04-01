import { Link } from 'react-router-dom';

export const PostCard = ({ title, reactions, body, tags }) => {
  return (
    <div>
      {title} {body} {reactions} {tags}
    </div>
  );
};
