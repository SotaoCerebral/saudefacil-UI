import { useMutation } from '@tanstack/react-query'

import { api } from '@/lib/axios'

interface CreatePatient {
  email: string
  senha: string
  paciente: {
    nomeCompleto: string
    dataNascimento: string
    cpf: string
    genero: string
    estadoCivil: string
    telefone: string
    email: string
  }
}

function useCreatePatient() {
  return useMutation({
    mutationFn: async (data: CreatePatient) => {
      const response = await api.post('/usuarios/criar-paciente', data)

      return response.data
    },
  })
}

export { useCreatePatient }
