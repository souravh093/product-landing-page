import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Root/Home/Home'
import Root from './components/Root/Root'
import ProductDetails from './components/Root/Home/Product/ProductDetails/ProductDetails'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('https://dummyjson.com/products')
      },
      {
        path: '/product/:id',
        element: <ProductDetails />,
        loader: ({params}) => fetch(`https://dummyjson.com/products/${params.id}`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
