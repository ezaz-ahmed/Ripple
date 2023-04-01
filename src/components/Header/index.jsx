import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <nav className=" py-4 text-center lg:text-left">
      <h3 className=" font-bold text-3xl cursor-pointer">
        <Link to="/">React Dev Coding Assessment</Link>
      </h3>

      <span className=" font-thin text-base">By Code Rex</span>
    </nav>
  );
};
