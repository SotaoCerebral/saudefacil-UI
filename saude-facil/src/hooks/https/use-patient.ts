import { useQuery } from '@tanstack/react-query'

import { api } from '@/lib/axios'

interface Patient {
  id: number
  nomeCompleto: string
  cpf: string
  crm: string
  email: string
  telefone: string
  dataNascimento: string
  especialidade: string
}

function usePatients() {
  return useQuery({
    queryKey: ['patients'],
    queryFn: async () => {
      const response = await api.get<Patient[]>('/pacientes')

      return response.data as Patient[]
    },
  })
}

function usePatient(id: number) {
  return useQuery({
    queryKey: ['patient', id],
    queryFn: async () => {
      const response = await api.get<Patient>(`/pacientes/${id}`)

      return response.data as Patient
    },
  })
}

export { usePatient, usePatients }
