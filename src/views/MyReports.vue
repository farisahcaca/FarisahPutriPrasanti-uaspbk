<template>
  <div class="my-reports">
    <h2>Laporan Saya</h2>

    <div v-if="myReports.length === 0" class="empty-state">
      <p>📭 Kamu belum memiliki laporan.</p>
      <p>Ayo mulai buat laporan pertamamu sekarang!</p>
      <router-link to="/add">
        <button>➕ Buat Laporan</button>
      </router-link>
    </div>

    <ReportItem
      v-else
      v-for="report in myReports"
      :key="report.id"
      :report="report"
      :editable="true"
    />
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useReportStore } from '../stores/report'
import { useUserStore } from '../stores/user'
import ReportItem from '../components/ReportItem.vue'

const reportStore = useReportStore()
const userStore = useUserStore()

onMounted(() => reportStore.fetchReports())

const myReports = computed(() =>
  reportStore.reports.filter(r => r.userId === userStore.username)
)
</script>

<style scoped>
.my-reports {
  animation: fadeSlideIn 0.7s ease-out;
}

.my-reports h2 {
  color: #0f284d;
  margin-bottom: 20px;
  font-size: 1.8rem;
}

.empty-state {
  background-color: #ffffff;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  max-width: 600px;
  margin: 40px auto;
}

.empty-state p {
  font-size: 1.1rem;
  color: #333;
  margin: 10px 0;
}

button {
  background: linear-gradient(to right, #092037, #3a5770);
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.3s ease;
}

button:hover {
  background: linear-gradient(to right, #1565c0, #42a5f5);
}

/* === ANIMASI MASUK === */
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
