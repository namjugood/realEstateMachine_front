import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Layout; 