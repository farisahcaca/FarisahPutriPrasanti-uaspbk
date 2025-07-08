<template>
  <div class="layout">
    <aside v-if="showSidebar">
      <h2>📘 LostNFound Brataly University</h2>
      <router-link to="/">🏠 Beranda</router-link>
      <router-link to="/all">📋 Laporan Umum</router-link>
      <router-link to="/mine">🧾 Laporan Saya</router-link>
      <router-link to="/add">➕ Buat Laporan</router-link>

      <!-- 🔓 Tombol Logout -->
      <button class="logout-btn" @click="handleLogout">🚪 Logout</button>
    </aside>

    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
import { useUserStore } from './stores/user'

const route = useRoute()
const router = useRouter()
const userStore = useUserStore()

const showSidebar = computed(() => route.path !== '/login')

const handleLogout = () => {
  userStore.logout()
  router.push('/login')
}
</script>

<style scoped>
.layout {
  display: flex;
  min-height: 100vh;
  background: linear-gradient(to right, #082045, #234364);
  font-family: 'Segoe UI', sans-serif;
}

/* === SIDEBAR STYLING WITH CURVE === */
aside {
  width: 230px;
  background-color: #051835;
  color: white;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  box-shadow: 3px 0 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  height: 100vh;
}

aside h2 {
  margin-bottom: 30px;
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  background: linear-gradient(45deg, #8cadc9, #ccd2d8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

aside a {
  color: white;
  text-decoration: none;
  padding: 12px 18px;
  border-radius: 10px;
  transition: background-color 0.25s ease, transform 0.2s ease;
  font-weight: 500;
}

aside a:hover {
  background: linear-gradient(to right, #698eb4, #6097c4);
  color: white;
  transform: translateX(5px);
}

/* === TOMBOL LOGOUT === */
.logout-btn {
  background-color: transparent;
  border: 1px solid #fff;
  color: white;
  padding: 10px 16px;
  margin-top: auto;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.3s ease, transform 0.2s ease;
}

.logout-btn:hover {
  background-color: #234364;
  transform: scale(1.05);
}

/* === MAIN CONTENT === */
main {
  flex: 1;
  padding: 40px;
  background-color: #f9fafe;
  overflow-y: auto;
}
</style>
