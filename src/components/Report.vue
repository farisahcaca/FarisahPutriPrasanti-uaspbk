<template>
  <div class="about">
    <h2>Tentang Konser & Penyanyi</h2>
    <div class="cards-container">
      <div v-for="penyanyi in penyanyiList" :key="penyanyi.nama" class="card">
        <img :src="penyanyi.foto" :alt="penyanyi.nama" />
        <h3>{{ penyanyi.nama }}</h3>
        <p><strong>Jadwal Konser:</strong> <span class="jadwal">{{ penyanyi.jadwal }}</span></p>
        <p><strong>Deskripsi:</strong></p>
        <p class="deskripsi">{{ penyanyi.deskripsi }}</p>
        <p><strong>Lagu Populer:</strong></p>
        <ul>
          <li>{{ penyanyi.lagu[0] }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const penyanyiList = [
  {
    nama: 'BLACKPINK',
    foto: 'https://i.pinimg.com/474x/91/0b/4a/910b4a649acf6fe62122f7f91fdf1e26.jpg',
    lagu: ['How You Like That'],
    jadwal: '25 Juni 2025 - Jakarta, GBK',
    deskripsi: 'BLACKPINK adalah girl group asal Korea Selatan yang terkenal dengan gaya musik pop dan tarian energik.'
  },
  {
    nama: 'Coldplay',
    foto: 'https://i.scdn.co/image/ab6761610000e5eb1ba8fc5f5c73e7e9313cc6eb',
    lagu: ['The Scientist'],
    jadwal: '5 Juli 2025 - Bali, GWK',
    deskripsi: 'Coldplay adalah band rock alternatif asal Inggris yang dikenal dengan melodi emosional dan lirik mendalam.'
  },
  {
    nama: 'Bruno Mars',
    foto: 'https://froyonion.sgp1.cdn.digitaloceanspaces.com/images/blogdetail/cd79136689fc612cd3e5fee8d68dcaa88cdcdad4.jpg',
    lagu: ['Die With a Smile'],
    jadwal: '15 Agustus 2025 - Jakarta, JIS',
    deskripsi: 'Bruno Mars adalah penyanyi dan penulis lagu asal Amerika yang dikenal dengan suara soulful dan penampilan panggung yang enerjik.'
  }
]
</script>

<style scoped>
.about {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 40px 20px;
  min-height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  background: linear-gradient(180deg, #0d0d0d, #0f2027);
  color: #f5f5f5; /* putih terang semua teks default */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h2 {
  text-align: center;
  margin-bottom: 50px;
  color: #f5f5f5; /* putih */
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: 1px;
  text-shadow: 1px 1px 6px #000;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
  width: 100%;
  max-width: 1200px;
}

.card {
  background: #12283a; /* biru gelap navy */
  padding: 30px 25px;
  border-radius: 20px;
  box-shadow: 0 6px 20px rgba(37, 64, 97, 0.6);
  border: 2px solid #1b3a57; /* border biru gelap */
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  flex: 1 1 28%;
  max-width: 28%;
  box-sizing: border-box;
  color: #f5f5f5; /* teks putih di card */
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(37, 64, 97, 0.9);
  border-color: #365d84;
}

.card img {
  width: 100%;
  height: auto;
  border-radius: 16px;
  margin-bottom: 18px;
  object-fit: cover;
  box-shadow: 0 6px 12px rgba(37, 64, 97, 0.7);
  border: 2px solid #1b3a57;
}

h3 {
  margin: 16px 0 10px;
  color: #f5f5f5; /* putih */
  font-size: 1.8rem;
  font-weight: 700;
  text-shadow: 1px 1px 4px #000;
}

.jadwal {
  font-weight: 600;
  font-size: 1.2rem;
  color: #f5f5f5; /* putih */
  margin-bottom: 10px;
  display: inline-block;
}

.deskripsi {
  font-size: 1rem;
  font-style: italic;
  color: #f5f5f5; /* putih */
  margin-bottom: 18px;
  min-height: 60px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 10px 0 0;
}

li {
  font-size: 1.2rem;
  color: #f5f5f5; /* putih */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

li::before {
  content: '🎵';
  display: inline-block;
  font-size: 1.2rem;
}

/* Responsive Adjustments */
@media (max-width: 1024px) {
  .card {
    flex: 1 1 40%;
    max-width: 40%;
  }
}

@media (max-width: 768px) {
  h2 {
    font-size: 2rem;
  }

  .card {
    flex: 1 1 80%;
    max-width: 80%;
  }
}

</style>
