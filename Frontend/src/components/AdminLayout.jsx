import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/AdminLayout.css';

export default function AdminLayout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [adminName, setAdminName] = useState('Nama Admin');
  const [sidebarOpen, setSidebarOpen] = useState(true);

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

  // Determine active menu based on current route
  const getActiveMenu = () => {
    if (location.pathname.includes('/admin/dashboard')) return 'dashboard';
    if (location.pathname.includes('/admin/categories')) return 'kategori';
    if (location.pathname.includes('/admin/products')) return 'produk';
    if (location.pathname.includes('/admin/transactions')) return 'pesanan';
    if (location.pathname.includes('/admin/users')) return 'users';
    if (location.pathname.includes('/admin/reports')) return 'laporan';
    return 'dashboard';
  };

  const activeMenu = getActiveMenu();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    navigate('/admin/login');
  };

  const handleMenuClick = (menu) => {
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
    <div className="admin-layout-wrapper">
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
            <span>Kelola Transaksi</span>
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
            <span>Kelola Akun</span>
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

      {/* Main Content Area */}
      <div className="admin-layout-main">
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

        {/* Page Content */}
        <main className="admin-content">
          {children}
        </main>
      </div>
    </div>
  );
}
