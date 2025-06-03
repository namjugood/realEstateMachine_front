import React, { useEffect, useState } from 'react';
import { getRealEstateAptListDuration, getStanReginCd } from '../api/realEstateApi';
import { REGIONS } from '../assets/constants/constants';
import { RegionItem, AptItem } from '../types/realEstate';
import { checkEmptyItems, formatDate, formatKoreanMoney } from '../utils/commonUtil';


const PropertyList: React.FC = () => {
  //노출용 지역명
  const [viewRegionNm, setViewRegionNm] = useState('');
  // 지역 목록
  const [regionList, setRegionList] = useState<RegionItem[]>([]);
  // 거래된 매물 목록
  const [aptList, setAptList] = useState<AptItem[]>([]);
  // 로딩 상태
  const [loading, setLoading] = useState(false);
  // 에러 메시지
  const [error, setError] = useState<string | null>(null);
  // 페이지 번호
  const [pageNo, setPageNo] = useState(1);
  // 페이지 당 건수
  const [numOfRows, setNumOfRows] = useState(50);

  // 거래된 매물 목록 조회 기간 조회 파라미터
  const [params, setParams] = useState({
    region_nm: '',
    region_code: '',
    start_deal_ym: '',
    end_deal_ym: '',
  });

  // 현재 페이지에 보여줄 데이터 계산
  const indexOfLastItem = pageNo * numOfRows;
  const indexOfFirstItem = indexOfLastItem - numOfRows;
  const currentItems = aptList.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(aptList.length / numOfRows);

  // 지역명 변경 selectbox 이벤트
  const handleRegionChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRegion = event.target.value;

    try {
      const response = await getStanReginCd(selectedRegion);
      setRegionList(response.response.body);
    } catch (error) {
      console.error(error);
      setError('데이터 로딩 중 오류');
      setRegionList([]);
    } finally {
      setLoading(false);
    }
  };

  // 거래내역 조회
  const selectRealEstateAptList = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // 기존 데이터 초기화
    if(aptList.length > 0) {
      setAptList([]);
    }
    try {
      setLoading(true);
      if(params.region_code === '' || params.start_deal_ym === '' || params.end_deal_ym === '') {
        setError('모든 필드를 입력해주세요');
        setAptList([]);
        return;
      }
      const response = await getRealEstateAptListDuration(params);
      const items = response.response.body.items.item;
      
      // 빈 객체({})면 ''로 변경
      const resultItems = checkEmptyItems<AptItem>(items);
      setViewRegionNm(params.region_nm);
      setAptList(resultItems);
    } catch (error) {
      console.error(error);
      setError('데이터 로딩 중 오류');
      setAptList([]);
    } finally {
      setLoading(false);
    }
  };

  // numOfRows 변경 시 최대 페이지 번호 계산
  useEffect(() => {
    
  }, []);

  return (
    <div className="property-list">
      <h1>거래된 매물 목록 조회</h1>
      <div>
        <select defaultValue="" onChange={handleRegionChange}>
          <option value="" disabled>전국</option>
          {REGIONS.map((region: string) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
        <input type="month" placeholder="조회시작" onChange={e => setParams({ ...params, start_deal_ym: e.target.value.replace(/-/g, '') })} />
        <input type="month" placeholder="조회종료" onChange={e => setParams({ ...params, end_deal_ym: e.target.value.replace(/-/g, '') })} />
        <button onClick={selectRealEstateAptList}>조회</button>
      </div>
      <div>
        {regionList.map((item: RegionItem) => (
          <button key={item.locatadd_nm} data-region-cd={item.sido_sgg} onClick={() => setParams({ ...params, region_nm: item.locatadd_nm, region_code: item.sido_sgg })}>
            {item.locatadd_nm}
          </button>
        ))}
      </div>
      <div className="property-list">
        <h2>{viewRegionNm} 매물 목록(총 {aptList.length}건)</h2>
        {aptList.length < 0 && loading && <div>로딩 중...</div>}
        {aptList.length < 0 && error && <div>에러: {error}</div>}
        {aptList.length > 0 && (
          <div>
            <button onClick={() => setNumOfRows(50)}>50건씩</button>
            <button onClick={() => setNumOfRows(100)}>100건씩</button>
          
            <table className="property-table">
              <thead>
                <tr>
                  {/* <th>aptSeq</th>
                  <th>aptDong</th>
                  <th>aptNm</th>
                  <th>bonbun</th>
                  <th>bubun</th>
                  <th>buildYear</th>
                  <th>buyerGbn</th>
                  <th>cdealDay</th>
                  <th>cdealType</th>
                  <th>dealAmount</th>
                  <th>dealDay</th>
                  <th>dealMonth</th>
                  <th>dealYear</th>
                  <th>dealingGbn</th>
                  <th>estateAgentSggNm</th>
                  <th>excluUseAr</th>
                  <th>floor</th>
                  <th>jibun</th>
                  <th>landCd</th>
                  <th>landLeaseholdGbn</th>
                  <th>rgstDate</th>
                  <th>roadNm</th>
                  <th>roadNmBonbun</th>
                  <th>roadNmBubun</th>
                  <th>roadNmCd</th>
                  <th>roadNmSeq</th>
                  <th>roadNmSggCd</th>
                  <th>roadNmbCd</th>
                  <th>sggCd</th>
                  <th>slerGbn</th>
                  <th>umdCd</th>
                  <th>umdNm</th> */}
                  <th>법정동코드</th>
                  <th>아파트명</th>
                  <th>주소</th>
                  <th>매물위치</th>
                  <th>건축년도</th>
                  <th>전용면적</th>
                  <th>금액(만원)</th>
                  <th>거래일자</th>
                </tr>
              </thead>
            <tbody>
              {currentItems.map((item: AptItem, idx: number) => (
                <tr key={`${item.aptSeq}-${indexOfFirstItem + idx}`}>
                  <td>{item.sggCd+item.umdCd+item.landCd+item.bonbun+item.bubun}</td>
                  <td>{item.aptNm}</td>
                  <td>{
                    viewRegionNm +' '+ item.roadNm +' '
                    + Number(item.roadNmBonbun)+' '
                    + (Number(item.roadNmBubun)==0 ? '' : Number(item.roadNmBubun))
                    }
                  </td>
                  <td>{(item.aptDong? item.aptDong.includes('동') ? item.aptDong : item.aptDong +'동 ' : '') 
                      + (item.floor?item.floor+'층':'')}</td>
                  <td>{item.buildYear}년도</td>
                  <td>{item.excluUseAr}㎡</td>
                  <td>{formatKoreanMoney(Number(item.dealAmount.replace(/,/g,''))*10000)}</td>
                  <td>{
                    formatDate(item.dealYear+(item.dealMonth.length === 1 ? '0'
                      +item.dealMonth : item.dealMonth)
                      +(item.dealDay.length === 1 ? '0'+item.dealDay : item.dealDay), 'YYYY-MM-DD')
                    }
                  </td>
                  {/* <td>{item.aptSeq || ''}</td>
                  <td>{item.aptDong || ''}</td>
                  <td>{item.aptNm || ''}</td>
                  <td>{item.bonbun || ''}</td>
                  <td>{item.bubun || ''}</td>
                  <td>{item.buildYear || ''}</td>
                  <td>{item.buyerGbn || ''}</td>
                  <td>{item.cdealDay || ''}</td>
                  <td>{item.cdealType || ''}</td>
                  <td>{item.dealAmount || ''}</td>
                  <td>{item.dealDay || ''}</td>
                  <td>{item.dealMonth || ''}</td>
                  <td>{item.dealYear || ''}</td>
                  <td>{item.dealingGbn || ''}</td>
                  <td>{item.estateAgentSggNm || ''}</td>
                  <td>{item.excluUseAr || ''}</td>
                  <td>{item.floor || ''}</td>
                  <td>{item.jibun || ''}</td>
                  <td>{item.landCd || ''}</td>
                  <td>{item.landLeaseholdGbn || ''}</td>
                  <td>{item.rgstDate || ''}</td>
                  <td>{item.roadNm || ''}</td>
                  <td>{item.roadNmBonbun || ''}</td>
                  <td>{item.roadNmBubun || ''}</td>
                  <td>{item.roadNmCd || ''}</td>
                  <td>{item.roadNmSeq || ''}</td>
                  <td>{item.roadNmSggCd || ''}</td>
                  <td>{item.roadNmbCd || ''}</td>
                  <td>{item.sggCd || ''}</td>
                  <td>{item.slerGbn || ''}</td>
                  <td>{item.umdCd || ''}</td>
                  <td>{item.umdNm || ''}</td> */}
                </tr>
              ))}
              </tbody>
            </table>
            {/* 페이지네이션 버튼 */}
            <div className="pagination">
              <button onClick={() => setPageNo(pageNo - 1)} disabled={pageNo === 1}>이전</button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button key={i + 1} onClick={() => setPageNo(i + 1)} disabled={pageNo === i + 1}>{i + 1}</button>
              ))}
              <button onClick={() => setPageNo(pageNo + 1)} disabled={pageNo === totalPages}>다음</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyList; 