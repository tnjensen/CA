import { useState } from 'react'
import { Routes, Route,Link, useParams } from 'react-router-dom'
import './App.module.css'
import Layout from './components/layout/Layout'
import Home from './components/home/Home'
import RouteNotFound from './components/RouteNotFound.'
import Product from './components/product/Product'
import Cart from './components/cart/Cart'

function App() {
  const [products, setProducts] = useState(0);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='product/:id/' element={<Product />} />
          <Route path='cart' element={<Cart />} />
          <Route path='*' element={<RouteNotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
