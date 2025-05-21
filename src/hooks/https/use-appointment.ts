import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

import { api } from '@/lib/axios'
import { queryClient } from '@/lib/query'

interface Appointment {
  id: number
  pacientId: number
  medicoId: number
  dataHora: string
  status: string
  tipoConsulta: string
  observacoes: string | null
}

interface CreateAppointment {
  pacienteId: number
  medicoId: number
  data: string // 2025-06-24
  hora: string // 16:30
  tipoConsulta: string // PRESENCIAL
  observacoes: string
}

function useAppointments() {
  return useQuery({
    queryKey: ['appointments'],
    queryFn: async () => {
      const response = await api.get('/agendamentos')

      return response.data as Appointment[]
    },
  })
}

function useCreateAppointment() {
  const router = useRouter()
  return useMutation({
    mutationFn: async (data: CreateAppointment) => {
      const response = await api.post('/agendamentos', null, { params: data })

      return response.data as Appointment
    },
    onSuccess: (_, variables) => {
      router.push(`/medicos/${variables.medicoId}/agendar/confirmacao`)
      queryClient.invalidateQueries({ queryKey: ['appointments'] })
    },
  })
}

export { useAppointments, useCreateAppointment }
