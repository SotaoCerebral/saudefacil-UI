import { useQuery } from '@tanstack/react-query'

import { api } from '@/lib/axios'

interface Time {
  id: number
  medicoId: number
  data: string
  hora: string
  disponivel: boolean
}

function useTimes() {
  return useQuery({
    queryKey: ['times'],
    queryFn: async () => {
      const response = await api.get('/horarios-disponiveis')

      return response.data as Time[]
    },
  })
}

export { useTimes }
