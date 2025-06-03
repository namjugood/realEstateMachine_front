import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Header from '../header'
import PropertyList from '../views/PropertyList'
import Home from '../views/Home'

// 라우터 설정
const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
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