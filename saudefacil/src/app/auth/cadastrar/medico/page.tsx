'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useCreateDoctorForm } from '@/hooks/form/use-create-doctor-form'

export default function MedicoForm() {
  const { register, handleSubmit, errors, isSubmitting, onSubmit } =
    useCreateDoctorForm()

  return (
    <Card className="w-[80vw] max-w-xl rounded-2xl p-8 shadow-lg">
      <CardHeader className="mb-4 pl-0">
        <CardTitle className="text-2xl font-semibold">
          Crie sua conta de médico
        </CardTitle>
        <CardDescription>
          Preencha os campos abaixo para criar sua conta de médico.
        </CardDescription>
      </CardHeader>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-4"
      >
        <div className="flex flex-col gap-1">
          <Input
            {...register('medico.nome')}
            type="text"
            placeholder="Nome completo"
            className="focus:ring-primary rounded-full border-none bg-gray-200 px-6 py-3 text-base focus:ring-2"
          />
          {errors.medico?.nome && (
            <span className="text-sm text-red-500">
              {errors.medico.nome.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <Input
            {...register('medico.cpf')}
            type="text"
            placeholder="CPF"
            className="focus:ring-primary rounded-full border-none bg-gray-200 px-6 py-3 text-base focus:ring-2"
          />
          {errors.medico?.cpf && (
            <span className="text-sm text-red-500">
              {errors.medico.cpf.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <Input
            {...register('medico.crm')}
            type="text"
            placeholder="Número de Registro Médico (CRM)"
            className="focus:ring-primary rounded-full border-none bg-gray-200 px-6 py-3 text-base focus:ring-2"
          />
          {errors.medico?.crm && (
            <span className="text-sm text-red-500">
              {errors.medico.crm.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <Input
            {...register('email')}
            type="email"
            placeholder="E-mail"
            className="focus:ring-primary rounded-full border-none bg-gray-200 px-6 py-3 text-base focus:ring-2"
          />
          {errors.email && (
            <span className="text-sm text-red-500">{errors.email.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <Input
            {...register('senha')}
            type="password"
            placeholder="Senha"
            className="focus:ring-primary rounded-full border-none bg-gray-200 px-6 py-3 text-base focus:ring-2"
          />
          {errors.senha && (
            <span className="text-sm text-red-500">{errors.senha.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <Input
            {...register('medico.telefone')}
            type="text"
            placeholder="Telefone"
            className="focus:ring-primary rounded-full border-none bg-gray-200 px-6 py-3 text-base focus:ring-2"
          />
          {errors.medico?.telefone && (
            <span className="text-sm text-red-500">
              {errors.medico.telefone.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <Input
            {...register('medico.dataNascimento')}
            type="date"
            className="focus:ring-primary rounded-full border-none bg-gray-200 px-6 py-3 text-base focus:ring-2"
          />
          {errors.medico?.dataNascimento && (
            <span className="text-sm text-red-500">
              {errors.medico.dataNascimento.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <Input
            {...register('medico.especialidade')}
            type="text"
            placeholder="Especialidade"
            className="focus:ring-primary rounded-full border-none bg-gray-200 px-6 py-3 text-base focus:ring-2"
          />
          {errors.medico?.especialidade && (
            <span className="text-sm text-red-500">
              {errors.medico.especialidade.message}
            </span>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 w-full rounded-full text-base font-semibold"
        >
          {isSubmitting ? 'Criando conta...' : 'Criar conta'}
        </Button>
      </form>
    </Card>
  )
}
