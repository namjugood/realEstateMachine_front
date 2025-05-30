# 🏠 부동산 실거래가 분석 시스템 (프론트엔드)

## 1. 📋 프로젝트 명
부동산 실거래가 분석 시스템 프론트엔드 (Real Estate Transaction Analysis System Frontend)

## 2. 🎯 프로젝트 목표
- 💻 사용자 친화적인 웹 인터페이스 구현
- 📊 실거래가 데이터의 시각화 및 통계 분석 기능 제공
- 🔄 실시간 데이터 조회 및 필터링 기능 구현
- 📱 반응형 웹 디자인을 통한 다양한 디바이스 지원

## 3. ⚙️ 개발환경
<details>
<summary>🔧 개발 환경 상세 보기</summary>

<table>
    <thead>
        <tr>
            <th>구분</th>
            <th>항목</th>
            <th>상세 내용</th>
        </tr>
    </thead>
    <tr>
        <td rowspan="6"><strong>프론트엔드</strong></td>
        <td>📝 언어</td>
        <td>TypeScript</td>
    </tr>
    <tr>
        <td>⚛️ 프레임워크</td>
        <td>React 18</td>
    </tr>
    <tr>
        <td>🎨 스타일링</td>
        <td>CSS3, Styled Components</td>
    </tr>
    <tr>
        <td>🔄 라우팅</td>
        <td>React Router v6</td>
    </tr>
    <tr>
        <td>🔌 빌드 도구</td>
        <td>Vite</td>
    </tr>
    <tr>
        <td>💅 스타일 관리</td>
        <td>Styled Components</td>
    </tr>
    <tr>
        <td rowspan="3"><strong>개발 도구</strong></td>
        <td>💻 IDE</td>
        <td>Visual Studio Code</td>
    </tr>
    <tr>
        <td>🔄 버전 관리</td>
        <td>Git</td>
    </tr>
    <tr>
        <td>🔍 코드 품질</td>
        <td>ESLint, TypeScript</td>
    </tr>
</table>
</details>

## 4. ⏱️ 타임라인
<details>
<summary>📅 개발 진행 상황 보기</summary>

### 완료된 작업
| 날짜 | 작업 내용 | 세부 사항 |
|------|-----------|-----------|
| 5월 23일 | 🏗️ 프로젝트 초기 설정 | • React + TypeScript 프로젝트 생성<br>• Vite 설정<br>• 기본 디렉토리 구조 설정<br>• 기본 라우팅 설정 |

### 진행 예정 작업
| 기간 | 작업 내용 | 세부 사항 |
|------|-----------|-----------|
| 5월 26일 ~ 5월 31일 | 📁 기본 구조 보완<br>🎨 UI 컴포넌트 개발 | • 공통 컴포넌트 개발<br>• 레이아웃 컴포넌트 구현<br>• Styled Components 설정<br>• 기본 페이지 템플릿 구현 |
| 6월 1일 ~ 6월 5일 | 🔄 API 연동<br>🔄 상태 관리 구현 | • API 서비스 레이어 구현<br>• 상태 관리 설정 (Context API)<br>• 데이터 fetching 로직 구현<br>• 에러 처리 및 로딩 상태 관리 |
| 6월 6일 ~ 6월 10일 | 📊 데이터 시각화<br>🔍 검색 기능 | • 차트 라이브러리 통합<br>• 데이터 시각화 컴포넌트 구현<br>• 검색 필터 구현<br>• 반응형 디자인 적용 |
| 6월 11일 ~ 6월 15일 | ✅ 테스트<br>🚀 배포 준비 | • 단위 테스트 작성<br>• E2E 테스트 구현<br>• 성능 최적화<br>• 배포 환경 구성 |

### 진행률
- [x] 1단계: 프로젝트 초기화 (100%)
- [ ] 2단계: 기본 UI 구현 (0%)
- [ ] 3단계: API 연동 및 상태 관리 (0%)
- [ ] 4단계: 데이터 시각화 및 검색 기능 (0%)
- [ ] 5단계: 테스트 및 배포 (0%)
</details>

## 5. 📁 프로젝트 구조
```
realEstateMachine_front/
├── assets/           # 정적 파일
│   ├── js/             # JavaScript 파일
│   ├── images/         # 이미지 파일
│   └── css/            # CSS 파일
├── components/         # 재사용 가능한 컴포넌트
│   ├── common/         # 공통 컴포넌트
│   └── layout/         # 레이아웃 컴포넌트
├── state/              # 상태 관리
│   ├── hooks/          # 커스텀 훅
│   ├── store/          # 전역 상태
│   └── context/        # Context API
├── services/           # API 통신
│   └── api/            # API 엔드포인트
├── types/              # TypeScript 타입
├── utils/              # 유틸리티 함수
├── views/              # 실제 화면 파일
├── App.tsx             # 루트 컴포넌트
├── main.tsx            # 진입점
├── index.html          # HTML 템플릿
├── vite.config.ts      # Vite 설정
├── vite-env.d.ts       # Vite 타입 정의
├── tsconfig.json       # TypeScript 기본 설정
├── tsconfig.node.json  # Node.js용 TypeScript 설정
├── tsconfig.app.json   # 애플리케이션용 TypeScript 설정
├── package.json        # 프로젝트 의존성 및 스크립트
├── package-lock.json   # 의존성 버전 잠금
└── .gitignore          # Git 제외 파일 목록
```

### 주요 파일 설명
- **설정 파일**
  - `vite.config.ts`      : Vite 빌드 도구 설정
  - `tsconfig.json`       : TypeScript 컴파일러 설정
  - `tsconfig.node.json`  : Node.js 환경의 TypeScript 설정
  - `tsconfig.app.json`   : 애플리케이션 코드의 TypeScript 설정
  - `package.json`        : 프로젝트 의존성 및 npm 스크립트 정의
  - `.gitignore`          : Git 버전 관리에서 제외할 파일 목록

- **소스 파일**
  - `App.tsx`    : 애플리케이션의 루트 컴포넌트
  - `main.tsx`   : 애플리케이션의 진입점
  - `index.html` : HTML 템플릿

## 6. 🚀 설치 및 실행 방법
<details>
<summary>📋 설치 및 실행 방법 보기</summary>

### 필수 요구사항
- Node.js 16.0 이상
- npm

### 설치 단계
1. 저장소 클론
```bash
git clone https://github.com/yourusername/realEstateMachine_front.git
cd realEstateMachine_front
```

2. 의존성 패키지 설치
```bash
npm install
```

3. 개발 서버 실행
```bash
npm run dev
```

4. 프로덕션 빌드
```bash
npm run build
```

### 실행 확인
1. 웹 브라우저에서 `http://localhost:5173` 접속
2. 기본 라우트:
   - 홈: `/`
   - 매물 목록: `/properties`

### 주의사항
- API 엔드포인트 설정이 필요합니다
- 환경 변수 설정이 필요한 경우 `.env` 파일을 생성하세요

### 문제 해결
1. 의존성 설치 오류
```bash
# node_modules 삭제 후 재설치
rm -rf node_modules
npm install
```

2. 타입스크립트 오류
```bash
# 타입 체크
npm run type-check
```
</details>

## 7. 💡 주요 기능
- 📊 실시간 부동산 실거래가 데이터 조회
- 📅 기간별 데이터 필터링
- 📈 데이터 시각화 및 분석
- 🔍 지역별 검색 기능
- 📱 반응형 웹 디자인
