import React from 'react'
import { Spin } from 'antd'
import Loadable from 'react-loadable'
// 路由表
const Loading = () => <Spin />
// import LogIn from 
const LogIn = Loadable({
  loader: () => import('../components/Login'),
  loading: Loading
})
// import Product from '../components/Product'
const Product = Loadable({
  loader: () => import('../components/Product'),
  loading: Loading
})
// import ProductDetail from '../components/ProductDetail'
const ProductDetail = Loadable({
  loader: () => import('../components/ProductDetail'),
  loading: Loading
})

const routes = [
  {
    path: '/login',
    component: LogIn
  },
  {
    path: '/product',
    children: [
      {
        path: '',
        component: Product
      },
      {
        path: '/:id',
        component: ProductDetail
      }
    ]
  }
]

export default routes
