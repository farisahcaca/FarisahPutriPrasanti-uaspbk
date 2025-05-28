import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Booking from '../components/Booking.vue'
import Schedule from '../components/Schedule.vue' // isinya sekarang "Pesanan Saya"
import Report from '../components/Report.vue'
import Login from '../views/login.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard },
  { path: '/booking', component: Booking },
  { path: '/pesanan', component: Schedule },
  { path: '/about-konser', component: Report }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
