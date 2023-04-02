export const PostCard = ({ title, reactions, body, tags }) => {
  return (
    <div className="rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl">
      <div className="block rounded-xl bg-white p-4 sm:p-6 lg:p-8">
        <div className=" flex justify-between items-center">
          <div className=" flex">
            {tags.map((tag, i) => (
              <div
                key={i}
                data-te-chip-init
                data-te-ripple-init
                className="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] py-0 text-lg font-normal normal-case leading-loose shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none"
                data-te-close="true"
              >
                #{tag}
              </div>
            ))}
          </div>
          <p className="mt-8 hidden md:block font-bold">{reactions} 💖</p>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
            {title}
          </h3>

          <p className="mt-2 text-sm text-gray-500">{body}</p>

          <p className="mt-8 md:hidden font-bold">{reactions} 💖</p>
        </div>
      </div>
    </div>
  );
};
