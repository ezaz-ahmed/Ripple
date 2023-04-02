import { useState, useId } from 'react';
import * as Comp from '../../components';
import * as hooks from '../../hooks';

export const UserList = () => {
  const selectId = useId();
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(10);

  const { users, isLoading, isError } = hooks.useUsers({ skip, limit });

  if (isLoading) {
    return <Comp.Loading />;
  }

  return isError ? (
    <Comp.Error />
  ) : (
    <>
      <div className=" flex justify-between items-center w-full py-6">
        <h1 className=" text-xl font-bold pb-4"> List of all the users </h1>

        <label htmlFor={selectId}>
          Show at a time:
          <select
            data-te-select-init
            defaultValue={limit}
            className=" cursor-pointer"
            onChange={(ev) => setLimit(Number(ev.target.value))}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
            <option value={25}>25</option>
          </select>
        </label>
      </div>

      <ul className=" grid md:grid-cols-2 gap-6">
        {users &&
          users.map((user) => (
            <li key={user.id} className="">
              <Comp.UserCard {...user} />
            </li>
          ))}
      </ul>

      <div className="flex justify-center items-center space-x-12 py-6">
        <button
          className="px-4 py-2 text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-slate-400"
          disabled={skip === 0}
          onClick={() => {
            setSkip(skip - limit);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 17l-5-5m0 0l5-5m-5 5h12"
            />
          </svg>
        </button>

        <button
          className="px-4 py-2 text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-slate-400"
          disabled={skip >= 90}
          onClick={() => {
            setSkip(skip + limit);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
      </div>
    </>
  );
};
