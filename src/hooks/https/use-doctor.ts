import { useQuery } from '@tanstack/react-query'

import { api } from '@/lib/axios'

interface Doctor {
  id: number
  nome: string
  cpf: string
  crm: string
  email: string
  telefone: string
  dataNascimento: string
  especialidade: string
}

function useDoctors() {
  return useQuery({
    queryKey: ['doctors'],
    queryFn: async () => {
      const response = await api.get<Doctor[]>('/medicos')

      return response.data as Doctor[]
    },
  })
}

function useDoctor(id: number) {
  return useQuery({
    queryKey: ['doctor', id],
    queryFn: async () => {
      const response = await api.get<Doctor>(`/medicos/${id}`)

      return response.data as Doctor
    },
  })
}

export { useDoctor, useDoctors }
