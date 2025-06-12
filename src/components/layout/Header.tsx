import React from 'react';
import { Link } from 'react-router-dom';
import { FiAlignJustify } from "react-icons/fi";

const Header: React.FC = () => {
  return (
    <header>
      <nav className="h-14 sm:h-20 pl-6 pr-6 border-b border-neutral-700">
        <ul className="d-flex items-center min-h-full">
          <li>
            <Link to="/" className="hidden sm:block text-white">홈</Link>
          </li>
          <li>
            <Link to="/properties" className="hidden sm:block text-white">매물</Link>
          </li>
          <li>
            <Link to="/about" className="hidden sm:block text-white">소개</Link>
          </li>
          <li className="absolute right-6">
            <Link to=""><FiAlignJustify className="text-white" /></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 