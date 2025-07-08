<template>
  <div class="form-wrapper">
    <h2>📩 Buat Laporan Barang Hilang</h2>
    <form @submit.prevent="submit">
      <div class="form-group">
        <label>Nama Pelapor</label>
        <input v-model="nama" required />
      </div>
      <div class="form-group">
        <label>Nama Barang</label>
        <input v-model="barang" required />
      </div>
      <div class="form-group">
        <label>Deskripsi</label>
        <textarea v-model="deskripsi" required></textarea>
      </div>
      <div class="form-group">
        <label>Lokasi Hilang</label>
        <input v-model="lokasi" required />
      </div>
      <div class="form-group">
        <label>Nomor Telepon</label>
        <input v-model="telepon" required />
      </div>
      <div class="form-group">
        <label>Tanggal Kehilangan</label>
        <input type="date" v-model="tanggal" required />
      </div>
      <div class="form-group">
        <label>Upload Gambar Barang (Opsional)</label>
        <input type="file" accept="image/*" @change="handleFile" />
        <img v-if="preview" :src="preview" class="preview" />
      </div>
      <button type="submit">Kirim Laporan</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useReportStore } from '../stores/report'
import { useUserStore } from '../stores/user'

const nama = ref('')
const barang = ref('')
const deskripsi = ref('')
const lokasi = ref('')
const telepon = ref('')
const tanggal = ref('')
const gambar = ref('')
const preview = ref(null)

const reportStore = useReportStore()
const userStore = useUserStore()
const router = useRouter()

const handleFile = (e) => {
  const file = e.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = () => {
      gambar.value = reader.result
      preview.value = reader.result
    }
    reader.readAsDataURL(file)
  }
}

const submit = async () => {
  await reportStore.addReport({
    nama: nama.value,
    barang: barang.value,
    deskripsi: deskripsi.value,
    lokasi: lokasi.value,
    telepon: telepon.value,
    tanggal: tanggal.value,
    gambar: gambar.value,
    userId: userStore.username
  })

  // Reset form
  nama.value = ''
  barang.value = ''
  deskripsi.value = ''
  lokasi.value = ''
  telepon.value = ''
  tanggal.value = ''
  gambar.value = ''
  preview.value = null

  alert('✅ Laporan berhasil dikirim!')
  router.push('/mine')
}
</script>

<style scoped>
.form-wrapper {
  background: white;
  padding: 30px;
  border-radius: 12px;
  max-width: 600px;
  margin: auto;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  /* Efek animasi masuk */
  opacity: 0;
  transform: translateY(40px);
  animation: fadeSlideIn 0.7s ease-out forwards;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: 600;
  margin-bottom: 6px;
  color: #333;
}

input,
textarea {
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
}

textarea {
  min-height: 90px;
  resize: vertical;
}

.preview {
  margin-top: 10px;
  max-height: 200px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

button {
  background: linear-gradient(to right, #0d2238, #2d4a61);
  color: white;
  padding: 12px;
  width: 100%;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
}

button:hover {
  background: linear-gradient(to right, #6280a2, #5681a3);
}

/* Animasi */
@keyframes fadeSlideIn {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
