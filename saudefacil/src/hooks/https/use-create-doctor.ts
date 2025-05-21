import { useMutation } from '@tanstack/react-query'

import { api } from '@/lib/axios'

interface CreateDoctor {
  email: string
  senha: string
  medico: {
    nome: string
    cpf: string
    crm: string
    email: string
    telefone: string
    dataNascimento: string
    especialidade: string
  }
}

function useCreateDoctor() {
  return useMutation({
    mutationFn: async (data: CreateDoctor) => {
      const response = await api.post('/usuarios', data)

      return response.data
    },
  })
}

export { useCreateDoctor }
