# 📦 LostNFound – Sistem Laporan Barang Hilang

**LostNFound** adalah aplikasi berbasis web yang dibangun menggunakan Vue 3 untuk membantu mahasiswa dan warga kampus **Brataly University** dalam melaporkan dan menemukan barang yang hilang. Aplikasi ini memungkinkan pengguna untuk membuat laporan kehilangan, melihat laporan orang lain, dan mengelola laporan mereka sendiri.

---
## Author
Farisah Putri Prasanti – Teknik Informatika - 4B

## Teknologi
- Vue 3
- Vue Router
- Pinia
- Axios
- json-server
- Vitest
  
## 🚀 Fitur Utama

- 🔐 Login user berbasis username
- 📋 Melihat semua laporan barang hilang
- 🧾 Melihat laporan pribadi (hanya laporan milik user login)
- ➕ Menambahkan laporan barang hilang dengan upload gambar
- ✏️ Mengedit dan menghapus laporan sendiri
- 🔄 Navigasi sidebar yang dinamis (bersembunyi di halaman login)
- 🧪 Pengujian unit untuk store dengan **Vitest**
- 📦 Konsumsi API dari `json-server` (mock REST API)

---

## 🧭 Navigasi Aplikasi

| Halaman | Deskripsi |
|---------|-----------|
| `/login` | Halaman login user |
| `/` | Dashboard (beranda) |
| `/all` | Menampilkan semua laporan barang hilang |
| `/mine` | Menampilkan dan mengelola laporan milik sendiri |
| `/add` | Form untuk membuat laporan baru |

---

## 🔗 Endpoint API (`json-server`, port 3002)

| Method | Endpoint | Fungsi |
|--------|----------|--------|
| GET    | `/reports` | Mendapatkan semua laporan |
| POST   | `/reports` | Menambahkan laporan baru |
| PUT    | `/reports/:id` | Mengubah laporan berdasarkan ID |
| DELETE | `/reports/:id` | Menghapus laporan berdasarkan ID |

---

## 📁 Struktur Folder
src/
├── components/
│ └── ReportItem.vue
├── views/
│ ├── AddReport.vue
│ ├── AllReports.vue
│ ├── Dashboard.vue
│ ├── Login.vue
│ └── MyReports.vue
├── stores/
│ ├── report.js
│ └── user.js
├── tests/
│ └── ReportStore.test.js
├── App.vue
├── main.js
└── router/
└── index.js

---

## ⚙️ Cara Menjalankan Aplikasi
```bash
git clone https://github.com/farisahcaca/farisahputriprasanti-uaspbk.git
cd farisahputriprasanti-uaspbk
npm install
json-server --watch db.json --port 3002   //Jalankan json-server
npx vitest run     // Testing dengan vitest
npm run dev        //Jalankan aplikasi Vue

