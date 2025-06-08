import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="app-header">
      <nav>
        <ul>
          <li><Link to="/">홈</Link></li>
          <li><Link to="/properties">매물</Link></li>
          <li><Link to="/about">소개</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 