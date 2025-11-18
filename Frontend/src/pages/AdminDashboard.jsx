import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AdminDashboard.css';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [adminName, setAdminName] = useState('Nama Admin');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState('dashboard');
  
  const [dashboardStats] = useState({
    totalProducts: 156,
    monthlySales: [
      { month: 'Jan', sales: 45000 },
      { month: 'Feb', sales: 52000 },
      { month: 'Mar', sales: 48000 },
      { month: 'Apr', sales: 61000 },
      { month: 'May', sales: 55000 },
      { month: 'Jun', sales: 67000 },
    ],
    lowStockProducts: [
      { id: 1, code: 'BP001', name: 'Propolis Premium', stock: 5, minStock: 10 },
      { id: 2, code: 'BP002', name: 'Propolis Murni', stock: 8, minStock: 15 },
      { id: 3, code: 'BP003', name: 'Propolis Syrup', stock: 3, minStock: 20 },
    ],
    incomingTransactions: [
      { id: 1, date: '17 Nov 2025', supplier: 'PT Supplier A', amount: 50, totalBerat: '500kg', status: 'Diterima' },
      { id: 2, date: '16 Nov 2025', supplier: 'PT Supplier B', amount: 30, totalBerat: '300kg', status: 'Pending' },
      { id: 3, date: '15 Nov 2025', supplier: 'PT Supplier A', amount: 75, totalBerat: '750kg', status: 'Diterima' },
    ],
  });

  useEffect(() => {
    // Ambil nama admin dari localStorage
    const adminUser = localStorage.getItem('adminUser');
    if (adminUser) {
      try {
        const user = JSON.parse(adminUser);
        setAdminName(user.name || 'Nama Admin');
      } catch (e) {
        setAdminName('Nama Admin');
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    navigate('/admin/login');
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    switch(menu) {
      case 'dashboard':
        navigate('/admin/dashboard');
        break;
      case 'kategori':
        navigate('/admin/categories');
        break;
      case 'produk':
        navigate('/admin/products');
        break;
      case 'pesanan':
        navigate('/admin/transactions');
        break;
      case 'users':
        navigate('/admin/users');
        break;
      case 'laporan':
        navigate('/admin/reports');
        break;
      default:
        break;
    }
  };

  return (
    <div className="admin-dashboard-container">
      {/* Sidebar */}
      <aside className={`admin-sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <div className="sidebar-logo-text">
              <span className="logo-british">BRITISH</span>
              <span className="logo-propolis">PROPOLIS</span>
            </div>
            <p className="sidebar-logo-subtitle">Distributor RANTE PROPOLIS</p>
          </div>
        </div>

        <div className="sidebar-title">Admin Panel</div>

        <nav className="sidebar-menu">
          <a
            href="#"
            className={`menu-item ${activeMenu === 'dashboard' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleMenuClick('dashboard');
            }}
          >
            <svg className="menu-icon" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="2" />
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
            <span>Dashboard</span>
          </a>

          <a
            href="#"
            className={`menu-item ${activeMenu === 'kategori' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleMenuClick('kategori');
            }}
          >
            <svg className="menu-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
            </svg>
            <span>Kelola Kategori</span>
          </a>

          <a
            href="#"
            className={`menu-item ${activeMenu === 'produk' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleMenuClick('produk');
            }}
          >
            <svg className="menu-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-1-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
            <span>Kelola Produk</span>
          </a>

          <a
            href="#"
            className={`menu-item ${activeMenu === 'pesanan' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleMenuClick('pesanan');
            }}
          >
            <svg className="menu-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm8 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
            <span>Kelola Pesanan</span>
          </a>

          <a
            href="#"
            className={`menu-item ${activeMenu === 'users' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleMenuClick('users');
            }}
          >
            <svg className="menu-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm8 0c1.66 0 2.99-1.34 2.99-3S25.66 5 24 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
            </svg>
            <span>Kelola Akun Users</span>
          </a>

          <a
            href="#"
            className={`menu-item ${activeMenu === 'laporan' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleMenuClick('laporan');
            }}
          >
            <svg className="menu-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2V17zm4 0h-2V7h2V17zm4 0h-2v-4h2V17z" />
            </svg>
            <span>Laporan</span>
          </a>
        </nav>

        <div className="sidebar-footer">
          <button className="logout-btn" onClick={handleLogout}>
            <svg className="menu-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" />
            </svg>
            Keluar
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        {/* Top Bar */}
        <header className="admin-topbar">
          <div className="topbar-left">
            <button
              className="sidebar-toggle"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
              </svg>
            </button>
          </div>

          <div className="topbar-right">
            <div className="admin-info">
              <span>Selamat Datang, <strong>{adminName}</strong></span>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="admin-content">
          {/* Header Section */}
          <section className="dashboard-header">
            <h1>Dashboard Admin</h1>
            <p>Selamat Datang, <strong>{adminName}</strong>! Berikut adalah ringkasan aktivitas toko Anda hari ini.</p>
          </section>

          {/* Stats Card - Jumlah Barang */}
          <section className="dashboard-stats-section">
            <div className="stat-card-large">
              <div className="stat-icon products">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-1-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </div>
              <div className="stat-content">
                <h3>Jumlah Barang</h3>
                <p className="stat-value-large">{dashboardStats.totalProducts}</p>
                <span className="stat-change">Total produk dalam sistem</span>
              </div>
            </div>
          </section>

          {/* Charts and Tables */}
          <section className="dashboard-content-grid">
            {/* Monthly Sales Chart */}
            <div className="dashboard-card">
              <div className="card-header">
                <h2>Statistik Penjualan (Per Bulan)</h2>
              </div>
              <div className="chart-container">
                <div className="chart-bars">
                  {dashboardStats.monthlySales.map((item, index) => (
                    <div key={index} className="chart-bar-wrapper">
                      <div
                        className="chart-bar"
                        style={{ height: `${(item.sales / 70000) * 100}%` }}
                        title={`Rp ${item.sales.toLocaleString('id-ID')}`}
                      ></div>
                      <span className="chart-label">{item.month}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Low Stock Products Table */}
            <div className="dashboard-card">
              <div className="card-header">
                <h2>Stok Menipis</h2>
                <a href="#" className="view-all">Lihat Semua →</a>
              </div>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Kode</th>
                      <th>Nama Produk</th>
                      <th>Stok Saat Ini</th>
                      <th>Min. Stok</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dashboardStats.lowStockProducts.map((product) => (
                      <tr key={product.id}>
                        <td>{product.code}</td>
                        <td>{product.name}</td>
                        <td>{product.stock}</td>
                        <td>{product.minStock}</td>
                        <td>
                          <span className="status-badge status-warning">⚠ Peringatan</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Incoming Transactions Table */}
            <div className="dashboard-card full-width">
              <div className="card-header">
                <h2>Transaksi Masuk</h2>
                <a href="#" className="view-all">Lihat Semua →</a>
              </div>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Tanggal</th>
                      <th>Supplier</th>
                      <th>Jumlah Item</th>
                      <th>Total Berat</th>
                      <th>Status</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dashboardStats.incomingTransactions.map((transaction) => (
                      <tr key={transaction.id}>
                        <td>{transaction.date}</td>
                        <td>{transaction.supplier}</td>
                        <td>{transaction.amount}</td>
                        <td>{transaction.totalBerat}</td>
                        <td>
                          <span className={`status-badge status-${transaction.status.toLowerCase()}`}>
                            {transaction.status}
                          </span>
                        </td>
                        <td>
                          <button className="btn-action">Detail</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
