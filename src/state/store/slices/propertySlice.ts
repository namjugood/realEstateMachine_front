import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 매물 타입 정의
export interface Property {
  region: string;
  start_deal_dt: string;
  end_deal_dt: string;
}

// 초기 상태 타입 정의
export interface PropertyState {
  properties: Property[];
  loading: boolean;
  error: string | null;
  selectedProperty: Property | null;
}

// 초기 상태
const initialState: PropertyState = {
  properties: [],
  loading: false,
  error: null,
  selectedProperty: null,
};

// Property Slice 생성
const propertySlice = createSlice({
  name: 'property',
  initialState,
  reducers: {
    // 매물 목록 설정
    setProperties: (state, action: PayloadAction<Property[]>) => {
      state.properties = action.payload;
    },
    /*
    // 매물 추가
    addProperty: (state, action: PayloadAction<Property>) => {
      state.properties.push(action.payload);
    },
    // 매물 수정
    updateProperty: (state, action: PayloadAction<Property>) => {
      const index = state.properties.findIndex(p => p.region === action.payload.region);
      if (index !== -1) {
        state.properties[index] = action.payload;
      }
    },
    // 선택된 매물 설정
    setSelectedProperty: (state, action: PayloadAction<Property | null>) => {
      state.selectedProperty = action.payload;
    },
    */
    // 로딩 상태 설정
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    // 에러 상태 설정
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

// 액션 생성자 내보내기
export const {
  setProperties,
  /*
  addProperty,
  updateProperty,
  deleteProperty,
  setSelectedProperty,
  */
  setLoading,
  setError,
} = propertySlice.actions;

// 리듀서 내보내기
export default propertySlice.reducer; 