# Dante Propolis - Frontend React dengan Tailwind CSS

Frontend aplikasi Dante Propolis yang dibangun menggunakan React dan Tailwind CSS. Project ini dikonversi dari HTML/CSS statis menjadi aplikasi React modern dengan struktur folder yang rapi.

## Teknologi

- **React 18** - Library JavaScript untuk membangun UI
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool dan development server yang cepat
- **React Router** - Routing untuk aplikasi React

## Struktur Folder

```
├── src/
│   ├── assets/
│   │   └── images/          # Semua file gambar (PNG, SVG)
│   ├── components/          # Komponen React yang dapat digunakan kembali
│   │   ├── Header.jsx       # Header/Navbar dengan logo dan navigasi
│   │   ├── Hero.jsx         # Section hero dengan CTA
│   │   ├── Keunggulan.jsx   # Section keunggulan produk
│   │   ├── ProdukTerlaris.jsx  # Section produk terlaris
│   │   ├── CaraPesan.jsx    # Section cara pemesanan
│   │   ├── FAQ.jsx          # Section FAQ dengan accordion
│   │   ├── Contact.jsx      # Section kontak dan sosial media
│   │   └── Footer.jsx      # Footer dengan informasi toko
│   ├── pages/              # Halaman aplikasi
│   │   ├── HomeBeforeLogin.jsx  # Halaman utama sebelum login
│   │   └── HomeAfterLogin.jsx   # Halaman utama setelah login
│   ├── App.jsx             # Komponen utama aplikasi dengan routing
│   ├── main.jsx            # Entry point aplikasi
│   └── index.css           # Global styles dengan Tailwind directives
├── index.html              # HTML template
├── package.json            # Dependencies dan scripts
├── tailwind.config.js      # Konfigurasi Tailwind CSS
├── vite.config.js          # Konfigurasi Vite
├── postcss.config.js       # Konfigurasi PostCSS
└── README.md              # Dokumentasi project
```

## Instalasi

1. Install dependencies:
```bash
npm install
```

2. Jalankan development server:
```bash
npm run dev
```

3. Build untuk production:
```bash
npm run build
```

4. Preview build production:
```bash
npm run preview
```

## Halaman

- `/` - Home Before Login (halaman utama sebelum login)
- `/home` - Home After Login (halaman setelah login dengan fitur tambahan)

## Fitur Komponen

- **Header**: Responsif dengan navigasi, search bar, dan tombol login/cart/profile
- **Hero**: Section utama dengan gambar produk dan CTA
- **Keunggulan**: Menampilkan 3 keunggulan utama dengan ikon
- **ProdukTerlaris**: Grid produk dengan card design
- **CaraPesan**: Step-by-step guide pemesanan
- **FAQ**: Accordion FAQ yang interaktif
- **Contact**: Informasi kontak dan link sosial media
- **Footer**: Footer lengkap dengan navigasi dan informasi toko

## Styling

Semua komponen menggunakan Tailwind CSS dengan:
- Custom colors: `brand-red` (#D2001A) dan `brand-blue` (#093FB4)
- Custom fonts: `Racing Sans One` dan `Poppins`
- Responsive design dengan breakpoints Tailwind
- Hover effects dan transitions

## Catatan

- Semua file gambar sudah dipindahkan ke `src/assets/images/`
- File HTML/CSS lama masih ada di root untuk referensi
- Project menggunakan Vite untuk development yang lebih cepat

