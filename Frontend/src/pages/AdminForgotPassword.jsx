import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AdminForgotPassword.css';

export default function AdminForgotPassword() {
  const [step, setStep] = useState('email'); // email, otp, reset
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/admin/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('OTP telah dikirim ke email Anda');
        setStep('otp');
      } else {
        setError(data.message || 'Email tidak ditemukan');
      }
    } catch (err) {
      setError('Terjadi kesalahan. Coba lagi nanti.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/admin/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('OTP berhasil diverifikasi');
        setStep('reset');
      } else {
        setError(data.message || 'OTP tidak valid');
      }
    } catch (err) {
      setError('Terjadi kesalahan. Coba lagi nanti.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (newPassword !== confirmPassword) {
      setError('Password tidak cocok');
      return;
    }

    if (newPassword.length < 6) {
      setError('Password minimal 6 karakter');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/admin/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          otp,
          newPassword,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Password berhasil direset. Silakan login kembali.');
        setTimeout(() => navigate('/admin/login'), 2000);
      } else {
        setError(data.message || 'Gagal mereset password');
      }
    } catch (err) {
      setError('Terjadi kesalahan. Coba lagi nanti.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-forgot-password-container">
      <div className="admin-forgot-password-wrapper">
        {/* Logo */}
        <div className="admin-logo-section">
          <div className="admin-logo">
            <span className="admin-logo-text">BRITISH <span className="admin-logo-propolis">PROPOLIS</span></span>
            <p className="admin-logo-subtitle">Distributor DANTE PROPOLIS</p>
          </div>
        </div>

        {/* Form Container */}
        <div className="admin-forgot-form-container">
          <div className="admin-forgot-icon">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 6C17.85 6 8 15.85 8 28V48C8 51.3 10.7 54 14 54H46C49.3 54 52 51.3 52 48V28C52 15.85 42.15 6 30 6ZM30 18C33.87 18 37 21.13 37 25C37 28.87 33.87 32 30 32C26.13 32 23 28.87 23 25C23 21.13 26.13 18 30 18Z" fill="#C41E3A" />
            </svg>
          </div>

          <h1 className="admin-forgot-title">Lupa Kata Sandi</h1>

          {/* Email Step */}
          {step === 'email' && (
            <form onSubmit={handleEmailSubmit} className="admin-forgot-form">
              {error && <div className="admin-error-message">{error}</div>}
              {message && <div className="admin-success-message">{message}</div>}

              <div className="admin-form-group">
                <label className="admin-form-label">Masukkan Email Akun Admin</label>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="admin-input"
                />
              </div>

              <button type="submit" disabled={loading} className="admin-btn-primary">
                {loading ? 'Mengirim...' : 'Kirim OTP'}
              </button>

              <button
                type="button"
                onClick={() => navigate('/admin/login')}
                className="admin-btn-secondary"
              >
                Kembali ke Login
              </button>
            </form>
          )}

          {/* OTP Step */}
          {step === 'otp' && (
            <form onSubmit={handleOtpSubmit} className="admin-forgot-form">
              {error && <div className="admin-error-message">{error}</div>}
              {message && <div className="admin-success-message">{message}</div>}

              <div className="admin-form-group">
                <label className="admin-form-label">Masukkan OTP dari Email</label>
                <input
                  type="text"
                  placeholder="OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  maxLength="6"
                  required
                  className="admin-input"
                />
              </div>

              <button type="submit" disabled={loading} className="admin-btn-primary">
                {loading ? 'Memverifikasi...' : 'Verifikasi OTP'}
              </button>

              <button
                type="button"
                onClick={() => setStep('email')}
                className="admin-btn-secondary"
              >
                Kembali
              </button>
            </form>
          )}

          {/* Reset Password Step */}
          {step === 'reset' && (
            <form onSubmit={handleResetPassword} className="admin-forgot-form">
              {error && <div className="admin-error-message">{error}</div>}
              {message && <div className="admin-success-message">{message}</div>}

              <div className="admin-form-group">
                <label className="admin-form-label">Password Baru</label>
                <input
                  type="password"
                  placeholder="Password Baru"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  className="admin-input"
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Konfirmasi Password</label>
                <input
                  type="password"
                  placeholder="Konfirmasi Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="admin-input"
                />
              </div>

              <button type="submit" disabled={loading} className="admin-btn-primary">
                {loading ? 'Mereset...' : 'Reset Password'}
              </button>

              <button
                type="button"
                onClick={() => navigate('/admin/login')}
                className="admin-btn-secondary"
              >
                Kembali ke Login
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
