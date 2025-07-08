<template>
  <div class="card">
    <div v-if="!isEditing">
      <h3>{{ report.barang }}</h3>
      <p><strong>Pelapor:</strong> {{ report.nama }}</p>
      <p><strong>Deskripsi:</strong> {{ report.deskripsi }}</p>
      <p><strong>Lokasi:</strong> {{ report.lokasi }}</p>
      <p><strong>Tanggal:</strong> {{ report.tanggal }}</p>
      <p><strong>Telepon:</strong> {{ report.telepon }}</p>
      <div class="actions" v-if="editable">
        <button @click="isEditing = true">Edit</button>
        <button @click="remove">Hapus</button>
      </div>
    </div>
    <form v-else @submit.prevent="saveEdit">
      <input v-model="form.nama" required />
      <input v-model="form.barang" required />
      <textarea v-model="form.deskripsi" required></textarea>
      <input v-model="form.lokasi" required />
      <input v-model="form.telepon" required />
      <div class="actions">
        <button type="submit">Simpan</button>
        <button type="button" @click="isEditing = false">Batal</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useReportStore } from '../stores/report'
const props = defineProps(['report', 'editable'])
const reportStore = useReportStore()

const isEditing = ref(false)
const form = ref({ ...props.report })

const remove = () => {
  if (confirm('Yakin ingin menghapus laporan ini?')) {
    reportStore.deleteReport(props.report.id)
  }
}

const saveEdit = async () => {
  await reportStore.updateReport({ ...form.value, id: props.report.id })
  isEditing.value = false
}
</script>

<style scoped>
.card {
  background: #ffffff;
  padding: 20px;
  border-left: 6px solid #1976d2;
  border-radius: 12px;
  margin-bottom: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.07);
  transition: transform 0.2s ease;

  /* Animasi masuk */
  opacity: 0;
  transform: translateY(30px);
  animation: fadeSlideIn 0.6s ease forwards;
}

.card:hover {
  transform: translateY(-3px);
}

h3 {
  color: #0d47a1;
  margin-bottom: 10px;
}

p {
  margin: 4px 0;
  color: #333;
}

input,
textarea {
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #bbb;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

input:focus,
textarea:focus {
  border-color: #1976d2;
  outline: none;
}

.actions {
  display: flex;
  gap: 12px;
  margin-top: 10px;
}

button {
  background: linear-gradient(to right, #082045, #234364);
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: transform 0.2s ease;
}

button:hover {
  transform: scale(1.05);
}

/* === ANIMASI KARTU === */
@keyframes fadeSlideIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
