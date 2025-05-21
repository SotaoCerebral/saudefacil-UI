import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

import { api } from '@/lib/axios'

export interface LoginData {
  email: string
  password: string
}

export interface LoginResponse {
  id: number
  email: string
  medicoId: number | null
  pacienteId: number
  role: string
}

export function useLogin() {
  const router = useRouter()

  return useMutation({
    mutationFn: async (data: LoginData) => {
      const response = await api.post('/login', {
        email: data.email,
        senha: data.password,
      })

      return response.data
    },
    onSuccess: (data, variables) => {
      localStorage.setItem(
        'auth',
        JSON.stringify({
          ...data,
          password: variables.password,
        }),
      )

      if (data.pacienteId) {
        router.push('/medicos')
      } else {
        router.push('/agendamentos')
      }
    },
  })
}
