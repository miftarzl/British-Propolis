import { useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import '../styles/AdminReports.css';

export default function Reports() {
  const [reportType, setReportType] = useState('sales');
  const [dateRange, setDateRange] = useState({
    startDate: '2025-11-01',
    endDate: '2025-11-30',
  });

  const handleDownloadReport = () => {
    alert(`Mengunduh laporan ${reportType} dari ${dateRange.startDate} hingga ${dateRange.endDate}`);
    // Di sini akan implementasi download file (CSV, Excel, PDF, dll)
  };

  const handleGeneratePreview = () => {
    alert(`Menampilkan preview laporan ${reportType}`);
  };

  return (
    <AdminLayout>
      <div className="reports-container">
        <div className="reports-header">
          <h1>Laporan</h1>
          <p>Buat dan download laporan penjualan, stok, dan transaksi</p>
        </div>

      {/* Report Form */}
      <div className="report-form-card">
        <h2>Buat Laporan</h2>
        
        <div className="form-section">
          <label className="form-label">Jenis Laporan</label>
          <div className="report-type-grid">
            <label className="radio-card">
              <input
                type="radio"
                name="reportType"
                value="sales"
                checked={reportType === 'sales'}
                onChange={(e) => setReportType(e.target.value)}
              />
              <span className="radio-label">
                <strong>📊 Laporan Penjualan</strong>
                <small>Ringkasan penjualan per periode</small>
              </span>
            </label>

            <label className="radio-card">
              <input
                type="radio"
                name="reportType"
                value="stock"
                checked={reportType === 'stock'}
                onChange={(e) => setReportType(e.target.value)}
              />
              <span className="radio-label">
                <strong>📦 Laporan Stok</strong>
                <small>Status stok barang saat ini</small>
              </span>
            </label>

            <label className="radio-card">
              <input
                type="radio"
                name="reportType"
                value="transactions"
                checked={reportType === 'transactions'}
                onChange={(e) => setReportType(e.target.value)}
              />
              <span className="radio-label">
                <strong>💰 Laporan Transaksi</strong>
                <small>Detail semua transaksi pelanggan</small>
              </span>
            </label>

            <label className="radio-card">
              <input
                type="radio"
                name="reportType"
                value="revenue"
                checked={reportType === 'revenue'}
                onChange={(e) => setReportType(e.target.value)}
              />
              <span className="radio-label">
                <strong>📈 Laporan Pendapatan</strong>
                <small>Analisis pendapatan dan keuntungan</small>
              </span>
            </label>
          </div>
        </div>

        {/* Date Range */}
        <div className="form-section">
          <label className="form-label">Periode Laporan</label>
          <div className="date-range-container">
            <div className="date-input-group">
              <label>Dari Tanggal</label>
              <input
                type="date"
                value={dateRange.startDate}
                onChange={(e) => setDateRange({ ...dateRange, startDate: e.target.value })}
              />
            </div>
            <div className="date-input-group">
              <label>Sampai Tanggal</label>
              <input
                type="date"
                value={dateRange.endDate}
                onChange={(e) => setDateRange({ ...dateRange, endDate: e.target.value })}
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="form-section">
          <div className="button-group">
            <button
              className="btn btn-preview"
              onClick={handleGeneratePreview}
            >
              👁 Lihat Preview
            </button>
            <button
              className="btn btn-download"
              onClick={handleDownloadReport}
            >
              ⬇ Download Laporan
            </button>
          </div>
        </div>
      </div>

      {/* Report Examples */}
      <div className="report-examples">
        <h2>Format Download Tersedia</h2>
        <div className="format-grid">
          <div className="format-card">
            <div className="format-icon">📄</div>
            <h3>PDF</h3>
            <p>Format profesional untuk cetak dan arsip</p>
          </div>
          <div className="format-card">
            <div className="format-icon">📊</div>
            <h3>Excel</h3>
            <p>File spreadsheet untuk analisis lebih lanjut</p>
          </div>
          <div className="format-card">
            <div className="format-icon">📋</div>
            <h3>CSV</h3>
            <p>Format data untuk import ke sistem lain</p>
          </div>
          <div className="format-card">
            <div className="format-icon">🖨</div>
            <h3>Print</h3>
            <p>Siap dicetak langsung dari browser</p>
          </div>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="recent-reports">
        <h2>Laporan Terbaru</h2>
        <div className="reports-list">
          <div className="report-item">
            <div className="report-info">
              <h3>Laporan Penjualan November 2025</h3>
              <p>Dibuat pada 17 Nov 2025 - 14:30</p>
            </div>
            <button className="btn btn-small">Download</button>
          </div>
          <div className="report-item">
            <div className="report-info">
              <h3>Laporan Stok November 2025</h3>
              <p>Dibuat pada 16 Nov 2025 - 10:15</p>
            </div>
            <button className="btn btn-small">Download</button>
          </div>
          <div className="report-item">
            <div className="report-info">
              <h3>Laporan Pendapatan Oktober 2025</h3>
              <p>Dibuat pada 01 Nov 2025 - 09:00</p>
            </div>
            <button className="btn btn-small">Download</button>
          </div>
        </div>
      </div>
    </div>
    </AdminLayout>
  );
}
