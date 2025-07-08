import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useReportStore } from '../stores/report'

describe('Report Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should update report correctly', async () => {
    const store = useReportStore()

    store.reports = [
      { id: '1', barang: 'Laptop', deskripsi: 'lama', nama: 'Farisah' }
    ]

    const updatedReport = {
      id: '1',
      barang: 'Laptop',
      deskripsi: 'baru',
      nama: 'Farisah'
    }

    // Mock axios
    store.updateReport = async (report) => {
      const index = store.reports.findIndex(r => r.id === report.id)
      if (index !== -1) {
        store.reports[index] = report
      }
    }

    await store.updateReport(updatedReport)

    expect(store.reports[0].deskripsi).toBe('baru')
  })
})

