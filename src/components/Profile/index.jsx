export const Profile = ({ firstName, lastName }) => {
  return (
    <div className=" w-full">
      <h1>
        {firstName} {lastName}
      </h1>
    </div>
  );
};
