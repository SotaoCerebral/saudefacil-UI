'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useDoctor } from '@/hooks/https/use-doctor'

interface Appointment {
  id: number
  pacientId: number
  medicoId: number
  dataHora: string
  status: string
  tipoConsulta: string
  observacoes: string | null
}

export function ConsultationCard({
  dataHora,
  tipoConsulta,
  medicoId,
  status,
}: Appointment) {
  const { data: doctor } = useDoctor(medicoId)

  return (
    <Card className="mx-auto flex w-full flex-col items-start gap-6 bg-white px-8 py-6 md:flex-row">
      <div className="flex-shrink-0">
        <Image
          src={'/doctor.png'}
          alt={doctor?.nome || ''}
          width={112}
          height={112}
          className="bg-muted h-20 w-20 rounded-xl object-cover md:h-28 md:w-28"
        />
      </div>
      <CardContent className="flex flex-col justify-center p-0">
        <span className="mb-1 text-xl leading-tight font-semibold">
          {doctor?.nome}
        </span>
        <span className="text-muted-foreground mb-1 text-sm">{dataHora}</span>
        <div className="mb-1 flex flex-col gap-1">
          <span className="text-sm font-medium text-gray-700">
            {tipoConsulta}
          </span>
          <span className="text-sm text-gray-500">{doctor?.especialidade}</span>
          <span className="w-fit rounded bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-700">
            {status}
          </span>
        </div>

        <Button className="mt-6 px-0" size="sm" variant="default">
          <Link className="w-full" href="/consultas/chat">
            Conversar
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
