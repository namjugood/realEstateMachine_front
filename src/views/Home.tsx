import React, { useEffect, useRef } from 'react';

interface LatLng {
  lat: () => number;
  lng: () => number;
}

interface NaverMaps {
  maps: {
    LatLng: new (lat: number, lng: number) => LatLng;
    Map: new (element: HTMLElement, options: { center: LatLng; zoom: number }) => void;
  };
}

declare global {
  interface Window {
    naver: NaverMaps;
  }
}

const Home: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${API_KEY}`;
    script.async = true;
    script.onload = () => {
      if (mapRef.current) {
        const mapOptions = {
          center: new window.naver.maps.LatLng(37.494589, 126.868346),
          zoom: 12
        };
        new window.naver.maps.Map(mapRef.current, mapOptions);
      }
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="home p-6">
      <h1 className="text-xl tracking-tight text-white">부동산 매물 관리 시스템</h1>
      <p className="text-lg tracking-tight text-white">환영합니다! 이 시스템을 통해 이미 거래된 아파트 가격을 확인할 수 있습니다.</p>
      <div ref={mapRef} className="w-full min-h-[500px]"></div>
    </div>
  );
};

export default Home; 
