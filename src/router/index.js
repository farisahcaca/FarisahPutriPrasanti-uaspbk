import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../stores/user'
import Login from '../views/login.vue'
import Dashboard from '../views/Dashboard.vue'
import AllReports from '../views/AllReports.vue'
import MyReports from '../views/MyReports.vue'
import AddReport from '../views/AddReport.vue'

const routes = [
  { path: '/login', component: Login },
  { path: '/', component: Dashboard },
  { path: '/all', component: AllReports },
  { path: '/mine', component: MyReports },
  { path: '/add', component: AddReport },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// ✅ Navigation Guard
router.beforeEach((to, from, next) => {
  const publicPages = ['/login']
  const authRequired = !publicPages.includes(to.path)
  const userStore = useUserStore()

  if (authRequired && !userStore.username) {
    return next('/login')
  }

  next()
})

export default router
