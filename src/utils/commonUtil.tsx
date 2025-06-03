// 빈 객체({})면 ''로 변경
// 타입 제한 없이 사용 가능(AptItem, RegionItem 등)
export function checkEmptyItems<T>(items: Record<string, string>[]):T[] {
    const resultItems: T[] = [];
    items.forEach((obj: Record<string, string>) => {    
        // 각 키에 대해 값이 빈 객체({})면 ''로 변경
        const newObj: Record<string, string> = {};
        Object.entries(obj).forEach(([key, value]) => {
        if (typeof value === 'object' && value !== null && Object.keys(value).length === 0) {
            newObj[key] = '';
        } else {
            newObj[key] = value;
        }
        });
        resultItems.push(newObj as T);  
    });
    return resultItems;
}

/**
 * 날짜 문자열을 원하는 형식으로 포맷팅하는 함수
 * @param dateStr - 날짜 문자열 (YYYYMMDD 형식)
 * @param format - 원하는 출력 형식 (기본값: 'YYYY-MM-DD')
 * @returns 포맷팅된 날짜 문자열
 */
export function formatDate(dateStr: string, format: string = 'YYYY-MM-DD'): string {
    if (!dateStr || dateStr.length !== 8) {
        return '';
    }

    const year = dateStr.substring(0, 4);
    const month = dateStr.substring(4, 6);
    const day = dateStr.substring(6, 8);

    return format
        .replace('YYYY', year)
        .replace('MM', month)
        .replace('DD', day)
        .replace('YY', year.substring(2))
        .replace('M', String(parseInt(month, 10)))
        .replace('D', String(parseInt(day, 10)));
}

/**
 * 년월 문자열을 원하는 형식으로 포맷팅하는 함수
 * @param ymStr - 년월 문자열 (YYYYMM 형식)
 * @param format - 원하는 출력 형식 (기본값: 'YYYY-MM')
 * @returns 포맷팅된 년월 문자열
 */
export function formatYearMonth(ymStr: string, format: string = 'YYYY-MM'): string {
    if (!ymStr || ymStr.length !== 6) {
        return '';
    }

    const year = ymStr.substring(0, 4);
    const month = ymStr.substring(4, 6);

    return format
        .replace('YYYY', year)
        .replace('MM', month)
        .replace('YY', year.substring(2))
        .replace('M', String(parseInt(month, 10)));
}

/**
 * 숫자를 3자리마다 콤마(,)로 포맷
 * @param value 숫자 또는 문자열
 * @returns 포맷된 문자열
 */
export function formatNumber(value: number | string): string {
  if (value === null || value === undefined) return '';
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * 숫자를 한글 금액 단위(만원, 억, 조 등)로 변환
 * @param value 숫자 또는 문자열
 * @returns 예: 1,234,567,890 → 12억 3,456만 7,890원
 */
export function formatKoreanMoney(value: number | string): string {
  let num = typeof value === 'string' ? parseInt(value.replace(/,/g, ''), 10) : value;
  if (isNaN(num) || num === 0) return '0원';

  const units = [
    { unit: '조', value: 1_0000_0000_0000 },
    { unit: '억', value: 1_0000_0000 },
    { unit: '만', value: 1_0000 },
    { unit: '', value: 1 }
  ];

  let result = '';
  for (const { unit, value: unitValue } of units) {
    const unitAmount = Math.floor(num / unitValue);
    if (unitAmount > 0) {
      result += `${formatNumber(unitAmount)}${unit} `;
      num -= unitAmount * unitValue;
    }
  }
  return result.trim() + '원';
}

