<template>
  <div class="dashboard">
    <div class="hero">
      <h1>🎵 WELCOME TO TIX.ON!</h1>
      <p>Pesan tiket konser artis favoritmu dengan mudah dan cepat 🎫</p>
      <router-link to="/booking" class="cta-button">Pesan Tiket Sekarang</router-link>
    </div>

    <div class="features">
      <div class="feature">
        <img src="https://cdn-icons-png.flaticon.com/512/3208/3208720.png" alt="Fast Booking" />
        <h3>Booking Cepat</h3>
        <p>Tanpa ribet, pilih konser dan langsung pesan tiketnya.</p>
      </div>
      <div class="feature">
        <img src="https://cdn-icons-png.flaticon.com/512/3123/3123637.png" alt="Trusted Artists" />
        <h3>Artis Ternama</h3>
        <p>BLACKPINK, Coldplay, Bruno Mars dan banyak lagi menantimu di panggung!</p>
      </div>
      <div class="feature">
        <img src="https://cdn-icons-png.flaticon.com/512/4149/4149643.png" alt="Secure Payment" />
        <h3>Pembayaran Aman</h3>
        <p>Sistem pemesanan kami aman dan terjamin.</p>
      </div>
    </div>

    <div class="promo-banner">
      <h2>🔥 PROMO TERBATAS 🔥</h2>
      <p>Dapatkan potongan harga hingga 20% untuk pemesanan hari ini!</p>
    </div>
  </div>
</template>


<style scoped>
.dashboard {
  text-align: center;
  padding: 30px;
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(to bottom, #0d0d0d, #1a1a1a);
  color: #f5f5f5;

  /* Buat tinggi penuh layar */
  min-height: 100vh;
  /* Buat lebar penuh layar */
  width: 100vw;

  margin: 0;
  box-sizing: border-box;
}



.hero {
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364); /* biru gelap */
  padding: 50px 20px;
  border-radius: 20px;
  color: #f5f5f5;
  margin-bottom: 50px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
}

.hero h1 {
  font-size: 2.8em;
  margin-bottom: 15px;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
}

.hero p {
  font-size: 1.3em;
  margin-bottom: 25px;
}

.cta-button {
  background: #f5f5f5;
  color: #1a1a1a;
  padding: 14px 28px;
  border-radius: 50px;
  font-weight: bold;
  text-decoration: none;
  transition: 0.3s;
  font-size: 1em;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.cta-button:hover {
  background-color: #c2b280; /* coklat keemasan */
  color: #000;
}

.features {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  margin-bottom: 60px;
}

.feature {
  background: #2e2e2e;
  padding: 25px;
  border-radius: 20px;
  width: 250px;
  text-align: center;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease, background 0.3s ease;
  border: 1px solid #444;
}

.feature:hover {
  transform: translateY(-8px);
  background: #383838;
}

.feature img {
  width: 64px;
  height: 64px;
  margin-bottom: 15px;
  filter: brightness(0.9) drop-shadow(0 0 4px #4682b4); /* biru sorotan */
}

.feature h3 {
  margin-bottom: 10px;
  color: #c2b280; /* coklat keemasan */
  font-size: 1.3em;
}

.promo-banner {
  background: #3a3a3a;
  color: #c2b280;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.6);
}

.promo-banner h2 {
  margin: 0 0 12px 0;
  font-size: 1.6em;
  text-shadow: 1px 1px 2px #000;
}

.promo-banner p {
  margin: 0;
  font-weight: bold;
  font-size: 1.1em;
}

</style>
