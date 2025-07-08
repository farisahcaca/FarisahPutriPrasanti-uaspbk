<template>
  <div class="login-container">
    <div class="login-card">
      <transition name="fade-slide">
        <div class="login-content">
          <h2>🔐 Login ke LostNFound</h2>
          <form @submit.prevent="login" class="login-form">
            <div class="input-group">
              <input v-model="username" type="text" id="username" required />
              <label for="username">Username</label>
            </div>
            <div class="input-group">
              <input v-model="password" type="password" id="password" required />
              <label for="password">Password</label>
            </div>
            <button type="submit">Masuk</button>
          </form>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '../stores/user'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const userStore = useUserStore()
const router = useRouter()

const login = () => {
  userStore.setUser(username.value)
  router.push('/')
}
</script>

<style scoped>
/* Container Pastel Background */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #e0f7fa, #fce4ec);
  padding: 20px;
}

/* Login Card */
.login-card {
  background: #ffffff;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 420px;
  animation: fadeUp 0.8s ease-out;
}

/* Judul */
h2 {
  color: #607d8b;
  margin-bottom: 30px;
  font-size: 1.8rem;
}

/* Form */
.login-form {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

/* Input Group Floating Label */
.input-group {
  position: relative;
}

.input-group input {
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #cfd8dc;
  border-radius: 10px;
  outline: none;
  background: #f1f8ff;
  transition: border 0.3s;
}

.input-group input:focus {
  border-color: #90caf9;
}

.input-group label {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #9e9e9e;
  font-size: 0.95rem;
  pointer-events: none;
  transition: 0.3s ease;
  background: white;
  padding: 0 6px;
}

.input-group input:focus + label,
.input-group input:not(:placeholder-shown):valid + label {
  top: -10px;
  left: 10px;
  font-size: 0.75rem;
  color: #64b5f6;
}

/* Button Pastel Style */
button {
  background-color: #81d4fa;
  color: #ffffff;
  padding: 12px;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

button:hover {
  background-color: #4fc3f7;
  transform: scale(1.03);
}

/* Animasi Masuk */
.fade-slide-enter-active {
  transition: all 0.6s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
