import { Link } from 'react-router-dom';

export const UserCard = ({ id, firstName, lastName, email, company }) => {
  return (
    <Link to={`/user/${id}`}>
      <div className="rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl">
        <div className="flex justify-between space-x-2 items-center rounded-xl bg-white p-4 sm:p-6 lg:p-8">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium  truncate ">
              {firstName} {lastName}
            </p>
            <p className="text-sm truncate ">{email}</p>
          </div>
          <div className="inline-flex items-center text-base font-semibold ">
            <p>{company.name}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
