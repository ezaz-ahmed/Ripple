import { Link } from 'react-router-dom';

export const UserCard = ({ id, firstName, lastName, email, company }) => {
  return (
    <Link to={`/user/${id}`}>
      <div key={id} className=" bor">
        <p className=" text-2xl py-2">
          {firstName} {lastName}
        </p>
        <div className=" flex justify-between">
          <p>{email}</p>
          <p>{company.name}</p>
        </div>
      </div>
    </Link>
  );
};
