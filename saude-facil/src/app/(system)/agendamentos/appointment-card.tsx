import Image from 'next/image'

import { Card, CardContent } from '@/components/ui/card'
import { usePatient } from '@/hooks/https/use-patient'

interface Appointment {
  id: number
  pacientId: number
  medicoId: number
  dataHora: string
  status: string
  tipoConsulta: string
  observacoes: string | null
}

function AppointmentCard({
  dataHora,
  tipoConsulta,
  pacientId,
  status,
}: Appointment) {
  const { data: patient } = usePatient(pacientId)

  return (
    <Card className="mx-auto flex w-full flex-col items-start gap-6 bg-white px-8 py-6 md:flex-row md:items-center">
      <div className="flex-shrink-0">
        <Image
          src={'/patient.jpg'}
          alt={patient?.nomeCompleto || ''}
          width={80}
          height={80}
          className="bg-muted h-10 w-10 rounded-xl object-cover md:h-20 md:w-20"
        />
      </div>
      <CardContent className="flex flex-col justify-center p-0">
        <span className="mb-1 text-xl leading-tight font-semibold">
          {patient?.nomeCompleto}
        </span>
        <span className="text-muted-foreground mb-1 text-sm">{dataHora}</span>
        <span className="mb-1 text-sm">{tipoConsulta}</span>
        <span className="text-primary text-sm font-medium">{status}</span>
      </CardContent>
    </Card>
  )
}

export { AppointmentCard }
