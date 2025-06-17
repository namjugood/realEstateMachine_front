import React from 'react';
import NaverMapComponent from './NaverMap';

const Home: React.FC = () => {
  return (
    <div className="home p-6">
      <h1 className="text-xl tracking-tight text-white">부동산 매물 관리 시스템</h1>
      <p className="text-lg tracking-tight text-white">환영합니다! 이 시스템을 통해 이미 거래된 아파트 가격을 확인할 수 있습니다.</p>
      <NaverMapComponent />
    </div>
  );
};

export default Home; 
