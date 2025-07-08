<template>
  <div>
    <h2>Semua Laporan</h2>
    <ReportItem
      v-for="report in reports"
      :key="report.id"
      :report="report"
      :editable="false"
    />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useReportStore } from '../stores/report'
import ReportItem from '../components/ReportItem.vue'

const reportStore = useReportStore()
onMounted(() => reportStore.fetchReports())
const reports = reportStore.reports
</script>
