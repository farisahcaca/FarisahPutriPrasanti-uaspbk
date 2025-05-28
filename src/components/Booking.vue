<template>
  <div class="booking-page">
    <h2>🎟️ Pesan Tiket Konser</h2>
    <div class="booking-form-container">
      <form @submit.prevent="submitBooking">
        <input v-model="nama" placeholder="Nama Lengkap" required />
        <input v-model="email" type="email" placeholder="Email.." required />

        <select v-model="konser" required>
          <option disabled value="">Pilih Konser</option>
          <option v-for="item in daftarKonser" :key="item.nama">
            {{ item.nama }} - Rp{{ item.harga.toLocaleString() }}
          </option>
        </select>

        <button type="submit">Pesan Tiket</button>
      </form>

      <div class="konser-preview" v-if="konserData">
        <img :src="konserData.image" alt="Gambar Konser" />
        <h3>{{ konserData.penyanyi }}</h3>
        <p><strong>Jadwal:</strong> {{ getJadwal(konserData.nama) }}</p>
        <p><strong>Harga:</strong> Rp{{ konserData.harga.toLocaleString() }}</p>
        <p><strong>Lagu Populer:</strong> {{ konserData.lagu }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const nama = ref('')
const email = ref('')
const konser = ref('')

const daftarKonser = [
  {
    nama: 'BLACKPINK - Jakarta, GBK',
    penyanyi: 'BLACKPINK',
    harga: 750000,
    lagu: '',
    image: 'https://i.pinimg.com/474x/91/0b/4a/910b4a649acf6fe62122f7f91fdf1e26.jpg'
  },
  {
    nama: 'Coldplay - Bali, GWK',
    penyanyi: 'Coldplay',
    harga: 1200000,
    lagu: 'The Scientist',
    image: 'https://i.scdn.co/image/ab6761610000e5eb1ba8fc5f5c73e7e9313cc6eb'
  },
  {
    nama: 'Bruno Mars - Jakarta, JIS',
    penyanyi: 'Bruno Mars',
    harga: 500000,
    lagu: 'Die With a Smile',
    image: 'https://froyonion.sgp1.cdn.digitaloceanspaces.com/images/blogdetail/cd79136689fc612cd3e5fee8d68dcaa88cdcdad4.jpg'
  }
]

const konserData = computed(() => {
  return daftarKonser.find(k => konser.value.includes(k.nama))
})

function submitBooking() {
  if (nama.value && email.value && konser.value) {
    const konserSelected = konserData.value
    const dataBaru = {
      nama: nama.value,
      konser: konser.value,
      penyanyi: konserSelected.penyanyi,
      harga: konserSelected.harga,
      jadwal: getJadwal(konserSelected.nama)
    }

    // Simpan di sessionStorage, bukan localStorage
    const existing = JSON.parse(sessionStorage.getItem('pesanan')) || []
    existing.push(dataBaru)
    sessionStorage.setItem('pesanan', JSON.stringify(existing))

    alert(`🎉 Tiket berhasil dipesan untuk ${konser.value} atas nama ${nama.value}!`)
    router.push('/dashboard')
  }
}

function getJadwal(namaKonser) {
  if (namaKonser.includes('BLACKPINK')) return '25 Juni 2025'
  if (namaKonser.includes('Coldplay')) return '5 Juli 2025'
  if (namaKonser.includes('Bruno Mars')) return '15 Agustus 2025'
  return 'TBD'
}
</script>

<style scoped>
.booking-page {
  font-family: 'Segoe UI', sans-serif;
  width: 100vw;
  height: 100vh;
  padding: 30px;
  padding-top: 60px; /* Tambahkan jarak dari atas */
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Naikkan konten ke atas */
  align-items: center;
  background: linear-gradient(to bottom, #0d0d0d, #1a1a1a);
  color: #f5f5f5;
  box-sizing: border-box;
}


h2 {
  color: #c2b280;
  margin-bottom: 30px;
  font-size: 2em;
  text-shadow: 1px 1px 2px #000;
}

.booking-form-container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;
}

form {
  background: #2e2e2e;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
  max-width: 400px;
  border: 1px solid #444;
}

input, select {
  padding: 14px;
  font-size: 1.1em;
  border-radius: 8px;
  border: 1px solid #555;
  background-color: #1a1a1a;
  color: #f5f5f5;
  transition: border-color 0.3s ease;
}

input::placeholder, select option {
  color: #bbb;
}

input:focus, select:focus {
  outline: none;
  border-color: #c2b280;
  box-shadow: 0 0 5px #c2b280;
}

button {
  padding: 14px;
  background-color: #c2b280;
  color: #1a1a1a;
  font-weight: bold;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.1em;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #8b7a4a;
  color: #fff;
}

.konser-preview {
  background: #2e2e2e;
  border-radius: 20px;
  padding: 25px;
  max-width: 400px;
  width: 100%;
  text-align: center;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.5);
  border: 1px solid #444;
}

.konser-preview img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  margin-bottom: 15px;
  box-shadow: 0 0 15px #4682b4;
}

.konser-preview h3 {
  margin-bottom: 10px;
  color: #c2b280;
  font-size: 1.6em;
  text-shadow: 1px 1px 2px #000;
}

.konser-preview p {
  margin: 5px 0;
  font-size: 1em;
  color: #ddd;
}
</style>
