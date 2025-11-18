import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AdminLogin.css';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Ganti dengan endpoint API backend Anda
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Simpan token ke localStorage
        localStorage.setItem('adminToken', data.token);
        localStorage.setItem('adminUser', JSON.stringify(data.user));
        navigate('/admin/dashboard');
      } else {
        setError(data.message || 'Username atau password salah');
      }
    } catch (err) {
      setError('Terjadi kesalahan. Coba lagi nanti.');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    navigate('/admin/forgot-password');
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-wrapper">
        {/* Logo */}
        <div className="admin-logo-section">
          <div className="admin-logo">
            <span className="admin-logo-text">BRITISH <span className="admin-logo-propolis">PROPOLIS</span></span>
            <p className="admin-logo-subtitle">Distributor RANTE PROPOLIS</p>
          </div>
        </div>

        {/* Login Form */}
        <div className="admin-login-form-container">
          {/* Icon */}
          <div className="admin-user-icon">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="25" r="15" fill="#C41E3A" />
              <path d="M60 65C60 56.7157 51.0457 50 40 50C28.9543 50 20 56.7157 20 65V75H60V65Z" fill="#C41E3A" />
            </svg>
          </div>

          {/* Title */}
          <h1 className="admin-login-title">Masuk Akun</h1>

          {/* Form */}
          <form onSubmit={handleLogin} className="admin-login-form">
            {/* Error Message */}
            {error && <div className="admin-error-message">{error}</div>}

            {/* Username Input */}
            <div className="admin-form-group">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="admin-input"
              />
            </div>

            {/* Password Input */}
            <div className="admin-form-group">
              <input
                type="password"
                placeholder="Kata Sandi"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="admin-input"
              />
            </div>

            {/* Forgot Password Link */}
            <div className="admin-forgot-password">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="admin-forgot-link"
              >
                Lupa kata sandi?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="admin-login-btn"
            >
              {loading ? 'Memproses...' : 'Masuk'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
