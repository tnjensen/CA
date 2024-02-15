import { Routes, Route} from 'react-router-dom'
import './App.module.css'
import Layout from './components/layout/Layout'
import Home from './components/home/Home'
import RouteNotFound from './components/RouteNotFound.'
import Product from './components/product/Product'
import Cart from './components/cart/Cart'
import Checkout from './components/checkout/Checkout'
import Shop from './components/shop/Shop'
import Contact from './components/contact/Contact'

function App() {
 
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='product/:id/' element={<Product />} />
          <Route path='cart' element={<Cart />} />
          <Route path='shop' element={<Shop />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<RouteNotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
