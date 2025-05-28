<template>
  <div class="pesanan-saya">
    <h2>🎫 Tiket Pemesanan </h2>

    <div v-if="pesanan.length === 0" class="empty">
      <p>Belum ada tiket yang dipesan.</p>
    </div>

    <div v-else class="tiket-list">
      <div v-for="(item, index) in pesanan" :key="index" class="tiket-card">
        <div class="tiket-header">
          <h3>🎫 Concert ({{ item.penyanyi }})</h3>
        </div>
        <div class="tiket-body">
          <p><strong>Nama Pemesan:</strong> {{ item.nama }}</p>
          <p><strong>Jadwal:</strong> {{ item.jadwal }}</p>
          <p><strong>Harga Tiket:</strong> Rp{{ item.harga.toLocaleString() }}</p>
          <button class="btn-payment" @click="handlePayment(item)">💳 Payment</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const pesanan = ref([])

onMounted(() => {
  // Gunakan sessionStorage agar data hilang saat reload
  const stored = JSON.parse(sessionStorage.getItem('pesanan')) || []
  pesanan.value = stored
})

function handlePayment(item) {
  alert(`Melanjutkan pembayaran untuk konser ${item.penyanyi} atas nama ${item.nama}.`)
}
</script>

<style scoped>
/* (tambahkan styling sesuai kebutuhan) */
</style>

<style scoped>
.pesanan-saya {
  min-height: 100vh;
  width: 100vw;
  padding: 40px 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(180deg, #0a0a0a, #1f1f1f);
  color: #e0d8c3;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  margin-bottom: 40px;
  color: #b3864d;
  font-size: 2.5rem;
  font-weight: bold;
  text-shadow: 1px 1px 3px #000000cc;
  text-align: center;
}

.empty {
  color: #7a6f5a;
  font-style: italic;
  margin-top: 60px;
  font-size: 1.2rem;
}

.tiket-list {
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
}

.tiket-card {
  background: #121212;
  border: 2px solid #b3864d;
  padding: 24px;
  border-radius: 20px;
  width: 300px;
  box-shadow: 0 6px 20px rgba(179,134,77,0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  color: #e0d8c3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.tiket-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 28px rgba(179,134,77,0.7);
  border-color: #8b5e3c;
}

.tiket-header {
  border-bottom: 2px solid #b3864d;
  padding-bottom: 12px;
  margin-bottom: 16px;
}

.tiket-header h3 {
  margin: 0;
  font-size: 1.4rem;
  color: #8b5e3c;
  text-shadow: 1px 1px 2px #000000cc;
}

.tiket-body p {
  margin: 8px 0;
  font-size: 1.05rem;
  color: #d4c8a8;
}

/* Tombol Payment */
.btn-payment {
  margin-top: 20px;
  padding: 12px 20px;
  background-color: #b3864d;
  color: #121212;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(179,134,77,0.6);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.btn-payment:hover {
  background-color: #e0c97e;
  box-shadow: 0 6px 20px rgba(224,201,126,0.9);
  color: #121212;
}

/* Responsive */
@media (max-width: 768px) {
  h2 {
    font-size: 2rem;
  }

  .tiket-card {
    width: 90%;
  }
}
</style>
