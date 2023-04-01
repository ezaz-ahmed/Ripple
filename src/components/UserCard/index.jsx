import { Link } from 'react-router-dom';

export const UserCard = ({ id, firstName, lastName, email, company }) => {
  return (
    <Link to={`/user/${id}`}>
      <li key={id}>
        {firstName} {lastName} {email} {JSON.stringify(company.name)}
      </li>
    </Link>
  );
};
