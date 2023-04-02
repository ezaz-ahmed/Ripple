export const PostCard = ({ title, reactions, body, tags }) => {
  return (
    // <div class="group relative block h-64 lg:h-96 flex-auto">
    //   <span class="absolute inset-0 border-2 border-dashed border-black"></span>

    //   <div class="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
    //     <div class="!pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
    //       <div className=" flex">
    //         {tags.map((tag) => (
    //           <div
    //             data-te-chip-init
    //             data-te-ripple-init
    //             className="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] py-0 text-lg font-normal normal-case leading-loose shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none"
    //             data-te-close="true"
    //           >
    //             #{tag}
    //           </div>
    //         ))}
    //       </div>
    //       <h2 class="mt-4 text-xl font-medium sm:text-2xl">{title}</h2>
    //     </div>

    //     <div class="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
    //       <div className=" flex">
    //         {tags.map((tag) => (
    //           <div
    //             data-te-chip-init
    //             data-te-ripple-init
    //             className="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] py-0 text-lg font-normal normal-case leading-loose shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none"
    //             data-te-close="true"
    //           >
    //             #{tag}
    //           </div>
    //         ))}
    //       </div>

    //       <h3 class="mt-4 text-xl font-medium sm:text-2xl">{title}</h3>

    //       <p class="mt-4 text-sm sm:text-base w-full overflow-hidden block break-words text-ellipsis ">
    //         {body}
    //       </p>

    //       <p class="mt-8 font-bold">{reactions} 💖</p>
    //     </div>
    //   </div>
    // </div>

    <div class="rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl">
      <a class="block rounded-xl bg-white p-4 sm:p-6 lg:p-8" href="">
        <div className=" flex justify-between items-center">
          <div className=" flex">
            {tags.map((tag) => (
              <div
                data-te-chip-init
                data-te-ripple-init
                className="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] py-0 text-lg font-normal normal-case leading-loose shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none"
                data-te-close="true"
              >
                #{tag}
              </div>
            ))}
          </div>
          <p class="mt-8 hidden md:block font-bold">{reactions} 💖</p>
        </div>
        <div class="mt-8">
          <h3 class="text-lg font-bold text-gray-900 sm:text-xl">{title}</h3>

          <p class="mt-2 text-sm text-gray-500">{body}</p>

          <p class="mt-8 md:hidden font-bold">{reactions} 💖</p>
        </div>
      </a>
    </div>
  );
};
