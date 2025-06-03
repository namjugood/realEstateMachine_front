import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/';

// 지역 코드 조회 파라미터
interface AptListParams {
  region_code: string;
  start_deal_ym: string;
  end_deal_ym: string;
}

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-CSRFToken': '1234567890',
    'X-Requested-With': 'XMLHttpRequest'
  },
//   withCredentials: true, // 쿠키 전송 허용
transformRequest: [data => JSON.stringify(data)], // 요청 데이터 문자열로 변환
//   transformResponse: [data => JSON.parse(data)], // 응답 데이터 객체로 변환
//   responseType: 'json', // 응답 데이터 타입 지정
//   xsrfCookieName: 'XSRF-TOKEN', // XSRF 쿠키 이름
//   xsrfHeaderName: 'X-XSRF-TOKEN', // XSRF 헤더 이름
//   maxRedirects: 5, // 리다이렉션 최대 횟수
//   paramsSerializer: { indexes: null }, // 파라미터 직렬화 옵션
});

// 지역 코드 조회
export const getStanReginCd = async (region: string) => {
    const params = {
      regions: region
    }
    const response = await api.post('api/realEstate/getStanReginCd/', params);
    return response.data;
};

// 거래된 매물 목록 조회
export const getRealEstateAptList = async (params: AptListParams) => {
  const response = await api.post('api/realEstate/getRealEstateAptList/', params);
  return response.data;
};

// 거래된 매물 목록 조회 기간 조회
export const getRealEstateAptListDuration = async (params: AptListParams) => {
    const response = await api.post('api/realEstate/getRealEstateAptListDuration/', params);
    return response.data;
};
