import React, { useEffect, useState } from 'react';

// 모듈 레벨에서 변수 선언(컴포넌트 내부에서 사용하기 위해)
let mapRef: HTMLDivElement | null = null;
let mapInstance: naver.maps.Map | null = null;

const NaverMapComponent = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  // 지도 초기화
  const initMap = () => {
    // 지도 참조가 없거나 네이버 맵이 로드되지 않았으면 종료
    if (!mapRef || !window.naver?.maps) return;

    // 이미 지도가 존재하면 제거하지 않음
    if (mapInstance) {
      return;
    }

    // 지도 초기화
    mapInstance = new window.naver.maps.Map(mapRef, {
      center: new window.naver.maps.LatLng(37.5665, 126.9780),
      zoom: 13,
      minZoom: 6,
      zoomControl: true,
      disableKineticPan: false,
      tileTransition : false,
      zoomControlOptions: { //줌 컨트롤의 옵션
          position: naver.maps.Position.TOP_RIGHT,
          style: naver.maps.ZoomControlStyle.SMALL
      },
    });
    const markers = [];
    const marker = new window.naver.maps.Marker({
      position: new window.naver.maps.LatLng(37.5665, 126.9780),
      map: mapInstance,
    });
    markers.push(marker);
  };

  // 스크립트 로드 함수
  const loadNaverMapScript = () => {
    return new Promise<void>((resolve, reject) => {
      if (document.getElementById('naver-map-script')) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.id = 'naver-map-script';
      script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${API_KEY}`;
      script.async = true;
      
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('네이버 맵 스크립트 로드 실패'));
      
      document.head.appendChild(script);
    });
  };

  useEffect(() => {
    const initializeMap = async () => {
      try {
        await loadNaverMapScript();
        initMap();
        setIsMapLoaded(true);
      } catch (error) {
        console.error('맵 초기화 실패:', error);
        setIsMapLoaded(false);
      }
    };

    initializeMap();

    return () => {
      // 컴포넌트가 언마운트될 때 실행
      if (mapInstance) {
        mapInstance.destroy();
        mapInstance = null;
      }
      mapRef = null;
    };
   
  }, [API_KEY]); // API_KEY만 의존성으로 유지

  return (
    <div className='w-full h-full'>
      {isMapLoaded ? (
        // ref에 콜백함수 사용, 마운트 시 업데이트
        <div ref={(el) => {
            mapRef = el;
            if (el && !mapInstance) {
              initMap();
            }
          }} 
          style={{ width: '100%', height: '740px' }} 
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-white">지도를 불러오는 중...</p>
        </div>
      )}
    </div>
  );
};

export default NaverMapComponent; 