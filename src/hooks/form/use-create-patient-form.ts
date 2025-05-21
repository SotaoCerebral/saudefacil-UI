import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useCreatePatient } from '../https/use-create-patient'

const createPatientFormSchema = z.object({
  email: z.string().email('Invalid email address'),
  senha: z.string().min(6, 'Password must be at least 6 characters'),
  paciente: z.object({
    nomeCompleto: z.string().min(1, 'Full name is required'),
    dataNascimento: z.string().min(1, 'Birth date is required'),
    cpf: z.string().min(11, 'CPF must have 11 digits'),
    genero: z.string().min(1, 'Gender is required'),
    estadoCivil: z.string().min(1, 'Marital status is required'),
    telefone: z.string().min(1, 'Phone number is required'),
  }),
})

type CreatePatientFormData = z.infer<typeof createPatientFormSchema>

export function useCreatePatientForm() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreatePatientFormData>({
    resolver: zodResolver(createPatientFormSchema),
  })

  const { mutateAsync: createPatient } = useCreatePatient()

  const onSubmit = async (data: CreatePatientFormData) => {
    const requestData = {
      ...data,
      paciente: {
        ...data.paciente,
        email: data.email,
      },
    }
    await createPatient(requestData)
    router.push('/auth/login')
  }

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
  }
}
