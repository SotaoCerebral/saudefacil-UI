'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useCreatePatientForm } from '@/hooks/form/use-create-patient-form'

export default function PacienteForm() {
  const { register, handleSubmit, errors, isSubmitting, onSubmit } =
    useCreatePatientForm()

  return (
    <Card className="w-[80vw] max-w-xl rounded-2xl p-8 shadow-lg">
      <CardHeader className="mb-4 pl-0">
        <CardTitle className="text-2xl font-semibold">
          Crie sua conta de paciente
        </CardTitle>
        <CardDescription>
          Preencha os campos abaixo para criar sua conta de paciente.
        </CardDescription>
      </CardHeader>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-4"
      >
        <Input
          {...register('email')}
          type="email"
          placeholder="E-mail"
          required
          className="focus:ring-primary rounded-full border-none bg-gray-200 px-6 py-3 text-base focus:ring-2"
        />
        {errors.email && (
          <span className="text-sm text-red-500">{errors.email.message}</span>
        )}
        <Input
          {...register('senha')}
          type="password"
          placeholder="Senha"
          required
          className="focus:ring-primary rounded-full border-none bg-gray-200 px-6 py-3 text-base focus:ring-2"
        />
        {errors.senha && (
          <span className="text-sm text-red-500">{errors.senha.message}</span>
        )}
        <Input
          {...register('paciente.nomeCompleto')}
          type="text"
          placeholder="Nome completo"
          required
          className="focus:ring-primary rounded-full border-none bg-gray-200 px-6 py-3 text-base focus:ring-2"
        />
        {errors.paciente?.nomeCompleto && (
          <span className="text-sm text-red-500">
            {errors.paciente.nomeCompleto.message}
          </span>
        )}
        <Input
          {...register('paciente.dataNascimento')}
          type="date"
          required
          className="focus:ring-primary rounded-full border-none bg-gray-200 px-6 py-3 text-base focus:ring-2"
        />
        {errors.paciente?.dataNascimento && (
          <span className="text-sm text-red-500">
            {errors.paciente.dataNascimento.message}
          </span>
        )}
        <Input
          {...register('paciente.cpf')}
          type="text"
          placeholder="CPF"
          required
          className="focus:ring-primary rounded-full border-none bg-gray-200 px-6 py-3 text-base focus:ring-2"
        />
        {errors.paciente?.cpf && (
          <span className="text-sm text-red-500">
            {errors.paciente.cpf.message}
          </span>
        )}
        <Input
          {...register('paciente.genero')}
          type="text"
          placeholder="Gênero"
          required
          className="focus:ring-primary rounded-full border-none bg-gray-200 px-6 py-3 text-base focus:ring-2"
        />
        {errors.paciente?.genero && (
          <span className="text-sm text-red-500">
            {errors.paciente.genero.message}
          </span>
        )}
        <Input
          {...register('paciente.estadoCivil')}
          type="text"
          placeholder="Estado civil"
          required
          className="focus:ring-primary rounded-full border-none bg-gray-200 px-6 py-3 text-base focus:ring-2"
        />
        {errors.paciente?.estadoCivil && (
          <span className="text-sm text-red-500">
            {errors.paciente.estadoCivil.message}
          </span>
        )}
        <Input
          {...register('paciente.telefone')}
          type="text"
          placeholder="Telefone"
          required
          className="focus:ring-primary rounded-full border-none bg-gray-200 px-6 py-3 text-base focus:ring-2"
        />
        {errors.paciente?.telefone && (
          <span className="text-sm text-red-500">
            {errors.paciente.telefone.message}
          </span>
        )}
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
