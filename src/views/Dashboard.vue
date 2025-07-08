<template>
  <div class="dashboard">
    <div class="hero">
      <h1>📦 Kehilangan Barang?</h1>
      <p class="hero-sub">
        LostNFound siap membantumu menemukan atau melaporkan barang hilang dengan cepat dan mudah.
      </p>
      <router-link to="/add">
        <button class="cta">➕ Laporkan Sekarang</button>
      </router-link>
    </div>

    <section class="features">
      <h2>🌟 Fitur Unggulan</h2>
      <div class="cards">
        <div class="feature-card">
          <h3>🔎 Temukan Cepat</h3>
          <p>Jelajahi laporan barang hilang/temuan dari pengguna lain secara real-time.</p>
        </div>
        <div class="feature-card">
          <h3>📱 Hubungi Langsung</h3>
          <p>Langsung hubungi pelapor via nomor telepon yang tersedia.</p>
        </div>
        <div class="feature-card">
          <h3>📝 Laporan Mudah</h3>
          <p>Formulir simpel, responsif, dan cepat diisi dari perangkat apa pun.</p>
        </div>
        <div class="feature-card">
          <h3>🔐 Privasi Terjaga</h3>
          <p>Laporan hanya bisa diubah atau dihapus oleh pemiliknya.</p>
        </div>
      </div>
    </section>

    <!-- ✅ Gambar ilustrasi tambahan -->
    <div class="illustration-wrapper">
      <img
        class="illustration"
        src="https://balipustakanews.com/wp-content/uploads/2021/12/airport-lost-item-missing-search-travel-shutter-6c30673b1ef86037665bd4c1bb2e950e_600x400.jpg"
        alt="Ilustrasi orang mencari barang hilang"
      />
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '../stores/user'
const userStore = useUserStore()
</script>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

/* === HERO SECTION === */
.hero {
  text-align: center;
  background: linear-gradient(to right, #182942, #185da3);
  color: white;
  padding: 60px 30px;
  border-radius: 16px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transform: translateY(50px);
  animation: fadeSlideUp 1s ease forwards;
}

.hero h1 {
  font-size: 2.6rem;
  margin-bottom: 10px;
}

.hero-sub {
  font-size: 1.2rem;
  margin-bottom: 30px;
  max-width: 600px;
  margin-inline: auto;
}

.cta {
  background-color: #ffffff;
  color: #1976d2;
  padding: 12px 22px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta:hover {
  background-color: #e3f2fd;
  transform: scale(1.05);
}

/* === FEATURES SECTION === */
.features {
  padding: 20px;
  text-align: center;
}

.features h2 {
  color: #0d47a1;
  font-size: 2rem;
  margin-bottom: 30px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.feature-card {
  background-color: #ffffff;
  border-left: 5px solid #1976d2;
  border-radius: 10px;
  padding: 20px;
  text-align: left;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeSlideUp 0.8s ease forwards;
}

.feature-card:nth-child(1) { animation-delay: 0.2s; }
.feature-card:nth-child(2) { animation-delay: 0.4s; }
.feature-card:nth-child(3) { animation-delay: 0.6s; }
.feature-card:nth-child(4) { animation-delay: 0.8s; }

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-card h3 {
  margin-bottom: 10px;
  color: #0d47a1;
}

.feature-card p {
  color: #333;
  font-size: 0.95rem;
}

/* === ILUSTRASI === */
.illustration-wrapper {
  text-align: center;
  padding: 40px 20px 80px;
}

.illustration {
  max-width: 100%;
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  animation: fadeSlideUp 1s ease 1s forwards;
  opacity: 0;
  transform: translateY(40px);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.illustration:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

/* === ANIMASI KEYFRAMES === */
@keyframes fadeSlideUp {
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
