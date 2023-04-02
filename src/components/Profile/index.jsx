export const Profile = ({
  firstName,
  lastName,
  age,
  company,
  image,
  bloodGroup,
  height,
  email,
}) => {
  return (
    <div className="p-4 border-b-4 border-gradient-to-r from-pink-500 flex-wrap items-center flex justify-center md:justify-between space-y-4">
      <div className="flex items-center">
        <img
          src={image}
          alt={`Photo of ${firstName} ${lastName}`}
          className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start "
        />
        <div className="flex flex-col px-4">
          <h4 className="text-2xl font-semibold text-center md:text-left">
            {firstName} {lastName}
          </h4>

          <p className=" text-lg">Email: {email}</p>
          <p className=" text-lg">Company: {company.name}</p>
        </div>
      </div>

      <div className=" flex flex-wrap justify-center items-center">
        <div class="mr-4 p-3 text-center">
          <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
            {age}
          </span>
          <span class="text-sm text-blueGray-400">Age</span>
        </div>
        <div class="mr-4 p-3 text-center">
          <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
            {bloodGroup}
          </span>
          <span class="text-sm text-blueGray-400">Blood Group</span>
        </div>
        <div class="lg:mr-4 p-3 text-center">
          <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
            {height}
          </span>
          <span class="text-sm text-blueGray-400">Height</span>
        </div>
      </div>
    </div>
  );
};
