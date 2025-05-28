<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
    <p v-if="error" style="color:#d17f46; margin-top: 10px;">{{ error }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      error: ''
    };
  },
  methods: {
    handleLogin() {
      localStorage.setItem('isLoggedIn', true);
      this.error = '';
      this.$router.push('/dashboard');
    }
  }
};
</script>

<style scoped>
.login {
  max-width: 380px;
  margin: 80px auto;
  padding: 30px 60px;
  background: linear-gradient(135deg, #2e1e0f, #1a1a1a);
  border-radius: 18px;
  box-shadow: 0 8px 20px rgba(193, 130, 60, 0.6);
  text-align: center;
  color: #d9b382; /* cokelat keemasan */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  box-sizing: border-box;
}

.login h2 {
  margin-bottom: 28px;
  font-weight: 700;
  font-size: 2rem;
  color: #d9b382;
  text-shadow: 0 0 6px #b17a35;
}

input {
  display: block;
  width: 100%;
  margin: 15px 0;
  padding: 14px 16px;
  border: none;
  border-radius: 12px;
  background-color: #3d2f15; /* coklat tua */
  color: #f5f5f5;
  font-size: 1.1em;
  box-shadow: inset 0 0 8px rgba(255, 215, 130, 0.2);
  transition: background-color 0.3s ease;
}

input::placeholder {
  color: #c4a169;
}

input:focus {
  outline: none;
  background-color: #5a4220;
  box-shadow: 0 0 8px #d9b382;
  color: #fff;
}

button {
  margin-top: 20px;
  padding: 14px 28px;
  background: #a9744a; /* cokelat hangat */
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  font-size: 1.15em;
  box-shadow: 0 5px 15px rgba(169, 116, 74, 0.6);
  transition: background 0.4s ease;
}

button:hover {
  background: #d3a56e;
  box-shadow: 0 8px 20px rgba(211, 165, 110, 0.8);
}
</style>
