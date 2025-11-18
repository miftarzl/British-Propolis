import { useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import '../styles/AdminManageUsers.css';

export default function ManageUsers() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Admin Utama', email: 'admin@british.com', role: 'Admin', status: 'Aktif' },
    { id: 2, name: 'Admin Asisten', email: 'admin2@british.com', role: 'Admin', status: 'Aktif' },
    { id: 3, name: 'Budi Santoso', email: 'budi@email.com', role: 'User', status: 'Aktif' },
    { id: 4, name: 'Siti Nurhaliza', email: 'siti@email.com', role: 'User', status: 'Aktif' },
    { id: 5, name: 'Ahmad Hidayat', email: 'ahmad@email.com', role: 'User', status: 'Nonaktif' },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [filterRole, setFilterRole] = useState('All');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'User',
    password: '',
  });

  const handleAddAdmin = () => {
    setShowForm(true);
    setEditingId(null);
    setFormData({ name: '', email: '', role: 'Admin', password: '' });
  };

  const handleEditUser = (user) => {
    setShowForm(true);
    setEditingId(user.id);
    setFormData({
      name: user.name,
      email: user.email,
      role: user.role,
      password: '',
    });
  };

  const handleSaveUser = () => {
    if (editingId) {
      setUsers(
        users.map((u) =>
          u.id === editingId ? { ...u, ...formData } : u
        )
      );
    } else {
      setUsers([
        ...users,
        {
          id: Math.max(...users.map((u) => u.id), 0) + 1,
          ...formData,
          status: 'Aktif',
        },
      ]);
    }
    setShowForm(false);
  };

  const handleDeleteUser = (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus user ini?')) {
      setUsers(users.filter((u) => u.id !== id));
    }
  };

  const filteredUsers = filterRole === 'All' 
    ? users 
    : users.filter((u) => u.role === filterRole);

  const adminUsers = users.filter((u) => u.role === 'Admin');
  const regularUsers = users.filter((u) => u.role === 'User');

  return (
    <AdminLayout>
      <div className="manage-users-container">
        <div className="manage-header">
          <h1>Kelola Pengguna</h1>
          <button className="btn-primary" onClick={handleAddAdmin}>
            + Tambah Admin
          </button>
        </div>

      {/* User Form Modal */}
      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{editingId ? 'Edit Pengguna' : 'Tambah Admin Baru'}</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Nama Lengkap</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Admin Utama"
                  required
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="admin@british.com"
                  required
                />
              </div>

              <div className="form-group">
                <label>Role</label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                >
                  <option value="Admin">Admin</option>
                  <option value="User">User</option>
                </select>
              </div>

              {!editingId && (
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="••••••••"
                    required
                  />
                </div>
              )}

              <div className="form-actions">
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => setShowForm(false)}
                >
                  Batal
                </button>
                <button
                  type="button"
                  className="btn-primary"
                  onClick={handleSaveUser}
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Filter Tabs */}
      <div className="filter-tabs">
        <button
          className={`tab ${filterRole === 'All' ? 'active' : ''}`}
          onClick={() => setFilterRole('All')}
        >
          Semua ({users.length})
        </button>
        <button
          className={`tab ${filterRole === 'Admin' ? 'active' : ''}`}
          onClick={() => setFilterRole('Admin')}
        >
          Admin ({adminUsers.length})
        </button>
        <button
          className={`tab ${filterRole === 'User' ? 'active' : ''}`}
          onClick={() => setFilterRole('User')}
        >
          User ({regularUsers.length})
        </button>
      </div>

      {/* Users Table */}
      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Nama</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <span className={`role-badge role-${user.role.toLowerCase()}`}>
                    {user.role}
                  </span>
                </td>
                <td>
                  <span className={`status-badge status-${user.status.toLowerCase()}`}>
                    {user.status}
                  </span>
                </td>
                <td>
                  <button
                    className="btn-action btn-edit"
                    onClick={() => handleEditUser(user)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn-action btn-delete"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    Hapus
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
