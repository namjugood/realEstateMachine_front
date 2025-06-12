import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import PropertyList from '../views/PropertyList'
import Home from '../views/Home'

// 라우터 설정
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'properties',
        element: <PropertyList />
      }
    ]
  }
])

export default router 