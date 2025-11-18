import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../components/AdminLayout';
import '../styles/AdminManageProducts.css';

export default function ManageProducts() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([
    { id: 1, code: 'BP001', name: 'Propolis Premium', weight: '500g', stock: 45, price: 450000, categoryId: 1 },
    { id: 2, code: 'BP002', name: 'Propolis Murni', weight: '1kg', stock: 30, price: 750000, categoryId: 1 },
    { id: 3, code: 'BP003', name: 'Propolis Syrup', weight: '250ml', stock: 60, price: 320000, categoryId: 2 },
    { id: 4, code: 'BP004', name: 'Propolis Extract', weight: '100ml', stock: 25, price: 580000, categoryId: 3 },
  ]);

  // Sample categories for selector (could be fetched from API)
  const [categories] = useState([
    { id: 1, name: 'Propolis Murni' },
    { id: 2, name: 'Propolis Syrup' },
    { id: 3, name: 'Propolis Extract' },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    code: '',
    name: '',
    weight: '',
    stock: '',
    price: '',
    categoryId: 1,
  });

  const handleAddProduct = () => {
    setShowForm(true);
    setEditingId(null);
    setFormData({ code: '', name: '', weight: '', stock: '', price: '', categoryId: categories[0]?.id || 1 });
  };

  const handleEditProduct = (product) => {
    setShowForm(true);
    setEditingId(product.id);
    setFormData({
      code: product.code,
      name: product.name,
      weight: product.weight,
      stock: product.stock,
      price: product.price,
      categoryId: product.categoryId || categories[0]?.id || 1,
    });
  };

  const handleSaveProduct = () => {
    if (editingId) {
      setProducts(
        products.map((p) =>
          p.id === editingId ? { ...p, ...formData } : p
        )
      );
    } else {
      setProducts([
        ...products,
        {
          id: Math.max(...products.map((p) => p.id), 0) + 1,
          ...formData,
          stock: parseInt(formData.stock),
          price: parseInt(formData.price),
          categoryId: parseInt(formData.categoryId),
        },
      ]);
    }
    setShowForm(false);
  };

  const handleDeleteProduct = (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus produk ini?')) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  return (
    <AdminLayout>
      <div className="manage-products-container">
        <div className="manage-header">
          <h1>Kelola Produk</h1>
          <button className="btn-primary" onClick={handleAddProduct}>
            + Tambah Produk
          </button>
        </div>

      {/* Product Form Modal */}
      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{editingId ? 'Edit Produk' : 'Tambah Produk Baru'}</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Kode Produk</label>
                <input
                  type="text"
                  value={formData.code}
                  onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                  placeholder="BP001"
                  required
                />
              </div>

              <div className="form-group">
                <label>Nama Produk</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Propolis Premium"
                  required
                />
              </div>

              <div className="form-group">
                <label>Berat Produk</label>
                <input
                  type="text"
                  value={formData.weight}
                  onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                  placeholder="500g"
                  required
                />
              </div>

              <div className="form-group">
                <label>Kategori</label>
                <select
                  value={formData.categoryId}
                  onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
                >
                  {categories.map((c) => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Stok</label>
                <input
                  type="number"
                  value={formData.stock}
                  onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                  placeholder="0"
                  required
                />
              </div>

              <div className="form-group">
                <label>Harga</label>
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  placeholder="0"
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
                  onClick={handleSaveProduct}
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Products Table */}
      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Kode</th>
              <th>Nama Produk</th>
              <th>Kategori</th>
              <th>Berat</th>
              <th>Stok</th>
              <th>Harga</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.code}</td>
                <td>{product.name}</td>
                <td>{categories.find((c) => c.id === product.categoryId)?.name || '-'}</td>
                <td>{product.weight}</td>
                <td>{product.stock}</td>
                <td>Rp {product.price.toLocaleString('id-ID')}</td>
                <td>
                  <button
                    className="btn-action btn-edit"
                    onClick={() => handleEditProduct(product)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn-action btn-delete"
                    onClick={() => handleDeleteProduct(product.id)}
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
