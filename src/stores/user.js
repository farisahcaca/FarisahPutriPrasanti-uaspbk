import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const username = ref('')

  const setUser = (name) => {
    username.value = name
  }

  const logout = () => {
    username.value = ''
  }

  return { username, setUser, logout }
})
