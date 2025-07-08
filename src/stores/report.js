import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useReportStore = defineStore('report', () => {
  const reports = ref([])

  const fetchReports = async () => {
    const res = await axios.get('http://localhost:3002/reports')
    reports.value = res.data
  }

  const addReport = async (report) => {
    const res = await axios.post('http://localhost:3002/reports', report)
    reports.value.push(res.data)
  }

  const deleteReport = async (id) => {
    await axios.delete(`http://localhost:3002/reports/${id}`)
    reports.value = reports.value.filter(r => r.id !== id)
  }

  const updateReport = async (report) => {
    await axios.put(`http://localhost:3002/reports/${report.id}`, report)
    fetchReports()
  }

  return { reports, fetchReports, addReport, deleteReport, updateReport }
})
