import { useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import '../styles/AdminManageCategories.css';

export default function ManageCategories() {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Propolis Murni', description: 'Propolis tanpa campuran apapun' },
    { id: 2, name: 'Propolis Syrup', description: 'Propolis dalam bentuk sirup' },
    { id: 3, name: 'Propolis Extract', description: 'Propolis terkonsentrasi' },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });

  const handleAddCategory = () => {
    setShowForm(true);
    setEditingId(null);
    setFormData({ name: '', description: '' });
  };

  const handleEditCategory = (category) => {
    setShowForm(true);
    setEditingId(category.id);
    setFormData({
      name: category.name,
      description: category.description,
    });
  };

  const handleSaveCategory = () => {
    if (editingId) {
      setCategories(
        categories.map((c) =>
          c.id === editingId ? { ...c, ...formData } : c
        )
      );
    } else {
      setCategories([
        ...categories,
        {
          id: Math.max(...categories.map((c) => c.id), 0) + 1,
          ...formData,
        },
      ]);
    }
    setShowForm(false);
  };

  const handleDeleteCategory = (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus kategori ini?')) {
      setCategories(categories.filter((c) => c.id !== id));
    }
  };

  return (
    <AdminLayout>
      <div className="manage-categories-container">
        <div className="manage-header">
          <h1>Kelola Kategori</h1>
          <button className="btn-primary" onClick={handleAddCategory}>
            + Tambah Kategori
          </button>
      </div>

      {/* Category Form Modal */}
      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{editingId ? 'Edit Kategori' : 'Tambah Kategori Baru'}</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Nama Kategori</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Propolis Murni"
                  required
                />
              </div>

              <div className="form-group">
                <label>Deskripsi</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Deskripsi kategori"
                  rows="4"
                  required
                />
              </div>

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
                  onClick={handleSaveCategory}
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Categories Grid */}
      <div className="categories-grid">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <h3>{category.name}</h3>
            <p>{category.description}</p>
            <div className="card-actions">
              <button
                className="btn-action btn-edit"
                onClick={() => handleEditCategory(category)}
              >
                Edit
              </button>
              <button
                className="btn-action btn-delete"
                onClick={() => handleDeleteCategory(category.id)}
              >
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </AdminLayout>
  );
}
