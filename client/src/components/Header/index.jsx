import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <nav className=" py-4 text-center lg:text-left">
      <h3 className=" font-bold text-3xl cursor-pointer">
        <Link to="/">React Dev Coding Assessment</Link>
      </h3>

      <p className=" font-thin text-base">
        By{' '}
        <a href="https://www.coderex.co/" target="_blank" className=" italic">
          Code Rex
        </a>
      </p>
    </nav>
  );
};
