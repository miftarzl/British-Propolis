import { useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import '../styles/AdminManageTransactions.css';

export default function ManageTransactions() {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      date: '17 Nov 2025',
      customer: 'Budi Santoso',
      amount: 450000,
      status: 'Selesai',
      paymentStatus: 'Lunas',
    },
    {
      id: 2,
      date: '16 Nov 2025',
      customer: 'Siti Nurhaliza',
      amount: 750000,
      status: 'Proses',
      paymentStatus: 'Menunggu',
    },
    {
      id: 3,
      date: '15 Nov 2025',
      customer: 'Ahmad Hidayat',
      amount: 320000,
      status: 'Menunggu',
      paymentStatus: 'Pending',
    },
  ]);

  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentProof, setPaymentProof] = useState(null);

  const handleViewDetails = (transaction) => {
    setSelectedTransaction(transaction);
  };

  const handleUpdatePaymentStatus = (transactionId, newStatus) => {
    setTransactions(
      transactions.map((t) =>
        t.id === transactionId ? { ...t, paymentStatus: newStatus } : t
      )
    );
    setShowPaymentModal(false);
  };

  const handleViewProof = () => {
    alert('Bukti pembayaran akan ditampilkan di sini');
  };

  return (
    <AdminLayout>
      <div className="manage-transactions-container">
      <div className="manage-header">
        <h1>Kelola Transaksi</h1>
        <button className="btn-primary">+ Tambah Transaksi</button>
      </div>

      {/* Details Modal */}
      {selectedTransaction && (
        <div className="modal-overlay" onClick={() => setSelectedTransaction(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Detail Transaksi</h2>
            <div className="detail-info">
              <div className="info-row">
                <label>ID Transaksi:</label>
                <span>TRX{selectedTransaction.id.toString().padStart(5, '0')}</span>
              </div>
              <div className="info-row">
                <label>Tanggal:</label>
                <span>{selectedTransaction.date}</span>
              </div>
              <div className="info-row">
                <label>Pelanggan:</label>
                <span>{selectedTransaction.customer}</span>
              </div>
              <div className="info-row">
                <label>Jumlah:</label>
                <span>Rp {selectedTransaction.amount.toLocaleString('id-ID')}</span>
              </div>
              <div className="info-row">
                <label>Status Pesanan:</label>
                <span className="status-badge">{selectedTransaction.status}</span>
              </div>
              <div className="info-row">
                <label>Status Pembayaran:</label>
                <span className="status-badge">{selectedTransaction.paymentStatus}</span>
              </div>

              {/* Riwayat Pesanan */}
              <h3 style={{ marginTop: '20px' }}>Riwayat Pesanan</h3>
              <div className="order-history">
                <div className="history-item">
                  <span className="history-date">17 Nov 14:30</span>
                  <span className="history-event">Pesanan dibuat</span>
                </div>
                <div className="history-item">
                  <span className="history-date">17 Nov 15:00</span>
                  <span className="history-event">Pembayaran diterima</span>
                </div>
                <div className="history-item">
                  <span className="history-date">17 Nov 16:00</span>
                  <span className="history-event">Barang dikemas</span>
                </div>
              </div>

              {/* Update Payment Status */}
              <h3 style={{ marginTop: '20px' }}>Update Status Pembayaran</h3>
              <div className="payment-actions">
                <button
                  className="btn-action btn-info"
                  onClick={handleViewProof}
                >
                  📷 Lihat Bukti
                </button>
                <button
                  className="btn-action btn-success"
                  onClick={() => handleUpdatePaymentStatus(selectedTransaction.id, 'Lunas')}
                >
                  ✓ Ubah ke Lunas
                </button>
                <button
                  className="btn-action btn-warning"
                  onClick={() => handleUpdatePaymentStatus(selectedTransaction.id, 'Pending')}
                >
                  ⏳ Ubah ke Pending
                </button>
              </div>

              <button
                className="btn-secondary"
                onClick={() => setSelectedTransaction(null)}
                style={{ marginTop: '20px', width: '100%' }}
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Transactions Table */}
      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>ID Transaksi</th>
              <th>Tanggal</th>
              <th>Pelanggan</th>
              <th>Jumlah</th>
              <th>Status Pesanan</th>
              <th>Status Pembayaran</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>TRX{transaction.id.toString().padStart(5, '0')}</td>
                <td>{transaction.date}</td>
                <td>{transaction.customer}</td>
                <td>Rp {transaction.amount.toLocaleString('id-ID')}</td>
                <td>
                  <span className={`status-badge status-${transaction.status.toLowerCase()}`}>
                    {transaction.status}
                  </span>
                </td>
                <td>
                  <span className={`status-badge status-${transaction.paymentStatus.toLowerCase()}`}>
                    {transaction.paymentStatus}
                  </span>
                </td>
                <td>
                  <button
                    className="btn-action btn-detail"
                    onClick={() => handleViewDetails(transaction)}
                  >
                    Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </AdminLayout>
  );
}
