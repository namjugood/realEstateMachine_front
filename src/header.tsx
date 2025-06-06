import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const Header: React.FC = () => {
  return (
    <div className="app">
      <header className="app-header">
        <nav>
          <ul>
            <li><Link to="/">홈</Link></li>
            <li><Link to="/properties">매물</Link></li>
            <li><Link to="/about">소개</Link></li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="app-footer">
        <p>&copy; 2024 부동산 매물 관리 시스템. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Header;
