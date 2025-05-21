import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useCreateDoctor } from '../https/use-create-doctor'

const createDoctorFormSchema = z.object({
  email: z.string().email('Invalid email address'),
  senha: z.string().min(6, 'Password must be at least 6 characters'),
  medico: z.object({
    nome: z.string().min(1, 'Name is required'),
    cpf: z.string().min(11, 'CPF must have 11 digits'),
    crm: z.string().min(1, 'CRM is required'),
    telefone: z.string().min(1, 'Phone number is required'),
    dataNascimento: z.string().min(1, 'Birth date is required'),
    especialidade: z.string().min(1, 'Specialty is required'),
  }),
})

type CreateDoctorFormData = z.infer<typeof createDoctorFormSchema>

export function useCreateDoctorForm() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateDoctorFormData>({
    resolver: zodResolver(createDoctorFormSchema),
  })

  const { mutateAsync: createDoctor } = useCreateDoctor()

  const onSubmit = async (data: CreateDoctorFormData) => {
    const requestData = {
      ...data,
      medico: {
        ...data.medico,
        email: data.email,
      },
    }
    await createDoctor(requestData)
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
