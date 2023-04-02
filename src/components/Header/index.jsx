import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <nav className=" py-4 text-center lg:text-left">
      <h3 className=" font-bold text-3xl cursor-pointer">
        <Link to="/">React Dev Coding Assessment</Link>
      </h3>

      <p className=" font-thin text-base">
        By <span className=" italic">Code Rex</span>
      </p>
    </nav>
  );
};
