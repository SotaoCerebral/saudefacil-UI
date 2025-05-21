'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useDoctor } from '@/hooks/https/use-doctor'

export default function DoctorPage() {
  const { id } = useParams<{ id: string }>()

  const { data: doctor, isLoading } = useDoctor(Number(id))

  if (isLoading) {
    return <div>Carregando...</div>
  }

  if (!doctor) {
    return <div>Médico não encontrado</div>
  }

  return (
    <div className="c-container flex flex-col items-center justify-center py-8 md:py-16">
      <Card className="w-full">
        <CardHeader className="flex flex-col gap-4 border-b pb-4 md:flex-row md:gap-8">
          <div className="flex-shrink-0">
            <Image
              src="/doctor.png"
              alt="Dr. Carlos"
              width={112}
              height={112}
              className="mx-auto h-28 w-28 object-cover md:mx-0"
            />
          </div>
          <div className="flex-1">
            <CardTitle>
              {doctor.nome} - {doctor.especialidade}
            </CardTitle>
            <ul className="text-muted-foreground mt-1 space-y-1 text-sm">
              <li>
                <span className="text-foreground font-medium">CRM:</span>{' '}
                {doctor.crm}
              </li>
              <li>
                <span className="text-foreground font-medium">Email:</span>{' '}
                {doctor.email}
              </li>
              <li>
                <span className="text-foreground font-medium">Telefone:</span>{' '}
                {doctor.telefone}
              </li>
              <li>
                <span className="text-foreground font-medium">
                  Data de Nascimento:
                </span>{' '}
                {doctor.dataNascimento}
              </li>
            </ul>
          </div>
          <div className="flex-shrink-0">
            <Button
              className="w-full bg-cyan-400 px-0 text-white hover:bg-cyan-500 md:w-auto"
              style={{ minWidth: 120 }}
            >
              <Link className="w-full" href={`/medicos/${id}/agendar`}>
                Agendamento
              </Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-6 py-6 md:py-8">
          <div className="text-muted-foreground flex min-h-[100px] w-full flex-col items-center gap-6 rounded-xl border p-4 text-base md:p-8 md:text-lg">
            <div className="w-full">
              <h3 className="text-foreground mb-2 text-base font-semibold">
                Valores
              </h3>
              <ul className="mb-4 list-disc pl-5 text-sm">
                <li>
                  Consulta inicial:{' '}
                  <span className="text-foreground font-medium">R$ 150,00</span>
                </li>
                <li>
                  Sessão avulsa:{' '}
                  <span className="text-foreground font-medium">R$ 100,00</span>
                </li>
                <li>
                  Pacote mensal (8 sessões):{' '}
                  <span className="text-foreground font-medium">R$ 700,00</span>
                </li>
              </ul>
              <h3 className="text-foreground mb-2 text-base font-semibold">
                Planos de Saúde Atendidos
              </h3>
              <ul className="mb-4 list-disc pl-5 text-sm">
                <li>Unimed</li>
                <li>Amil</li>
                <li>Bradesco Saúde</li>
                <li>Particular</li>
              </ul>
              <h3 className="text-foreground mb-2 text-base font-semibold">
                Feedbacks de Pacientes
              </h3>
              <ul className="list-none space-y-2 pl-0 text-sm">
                <li className="flex flex-col gap-2">
                  <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>{' '}
                  &quot;Excelente profissional, muito atencioso!&quot;
                </li>
                <li className="flex flex-col gap-2">
                  <span className="text-yellow-400">⭐⭐⭐⭐</span> &quot;Ótimo
                  atendimento e resultados visíveis.&quot;
                </li>
                <li className="flex flex-col gap-2">
                  <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>{' '}
                  &quot;Recomendo para todos que precisam de fisioterapia.&quot;
                </li>
              </ul>
            </div>
          </div>
          <div className="text-muted-foreground flex min-h-[100px] w-full items-center justify-center rounded-xl border p-4 text-base md:p-8 md:text-lg">
            Área de agendamento (em breve)
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
