<template>
  <div class="app-layout">
    <!-- Navbar global, kecuali halaman login -->
    <header v-if="route.path !== '/login'" class="navbar">
      <nav class="nav-links">
        <router-link to="/dashboard">Home</router-link>
        <router-link to="/booking">Booking Ticket</router-link>
        <router-link to="/pesanan">Rincian</router-link>
        <router-link to="/about-konser">About Concert</router-link>
      </nav>
    </header>

    <!-- Konten halaman -->
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<style scoped>
/* Struktur Global */
.app-layout {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: #0d0d0d;
  font-family: 'Segoe UI', sans-serif;
  color: #f5f5f5;
  margin: 0;
}

/* Navbar horizontal */
.navbar {
  background: #0f2027;
  padding: 20px 40px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-links {
  display: flex;
  gap: 40px;
}

.nav-links a {
  color: #e0f7ff;
  font-weight: 600;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 8px 14px;
  transition: 0.3s ease;
}

.nav-links a:hover {
  color: #66c1ff;
  border-bottom: 2px solid #66c1ff;
}

.router-link-active {
  color: #ffffff;
  border-bottom: 2px solid #e0f7ff;
}

/* Konten utama */
.content {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
}

/* Responsive: Tablet & HP */
@media (max-width: 768px) {
  .nav-links {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .nav-links a {
    font-size: 1rem;
  }
}
</style>
