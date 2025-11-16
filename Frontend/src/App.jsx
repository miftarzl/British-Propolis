import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeBeforeLogin from './pages/HomeBeforeLogin'
import HomeAfterLogin from './pages/HomeAfterLogin'
import Produk from './pages/Produk'
import DetailProduk from './pages/DetailProduk'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeBeforeLogin />} />
        <Route path="/home" element={<HomeAfterLogin />} />
        <Route path="/produk" element={<Produk />} />
        <Route path="/produk/:id" element={<DetailProduk />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  )
}

export default App

