import { useState } from 'react'
import { Routes, Route,Link, useParams } from 'react-router-dom'
import './App.module.css'
import Layout from './components/layout/Layout'
import Nav from './components/nav/Nav'
import Home from './components/home/Home'
import Products from './components/products/Products'
import RouteNotFound from './components/RouteNotFound.'
import Product from './components/product/Product'

function App() {
  const [products, setProducts] = useState(0);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='product/:id/' element={<Product />} />
          <Route path='*' element={<RouteNotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
