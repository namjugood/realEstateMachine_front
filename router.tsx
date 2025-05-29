import { createBrowserRouter } from 'react-router-dom';
import Home from './views/Home';
import PropertyList from './views/PropertyList';
import App from './App';

/**
 * 애플리케이션의 라우터 설정
 * 각 경로에 대한 컴포넌트 매핑을 정의합니다.
 */
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'properties',
        element: <PropertyList />,
      },
    ],
  },
]); 