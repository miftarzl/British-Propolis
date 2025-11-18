import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeBeforeLogin from './pages/HomeBeforeLogin'
import HomeAfterLogin from './pages/HomeAfterLogin'
import Produk from './pages/Produk'
import DetailProduk from './pages/DetailProduk'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import AdminLogin from './pages/AdminLogin'
import AdminForgotPassword from './pages/AdminForgotPassword'
import AdminDashboard from './pages/AdminDashboard'
import ManageProducts from './pages/ManageProducts'
import ManageCategories from './pages/ManageCategories'
import ManageTransactions from './pages/ManageTransactions'
import ManageUsers from './pages/ManageUsers'
import Reports from './pages/Reports'

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
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/forgot-password" element={<AdminForgotPassword />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/products" element={<ManageProducts />} />
        <Route path="/admin/categories" element={<ManageCategories />} />
        <Route path="/admin/transactions" element={<ManageTransactions />} />
        <Route path="/admin/users" element={<ManageUsers />} />
        <Route path="/admin/reports" element={<Reports />} />
      </Routes>
    </Router>
  )
}

export default App

