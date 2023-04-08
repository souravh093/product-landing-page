import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Root/Home/Home'
import Root from './components/Root/Root'
import ProductDetails from './components/Root/Home/Product/ProductDetails/ProductDetails'
import Cart from './components/Root/Cart/Cart'
import { productsAndCartData } from './loaders/getCartAndProduct'
import About from './components/About/About'


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
      },
      {
        path: '/cart',
        element: <Cart />,
        loader: productsAndCartData
      },
      {
        path: '/about',
        element: <About />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
