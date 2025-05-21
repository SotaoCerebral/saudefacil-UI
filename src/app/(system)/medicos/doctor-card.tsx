import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

interface Doctor {
  id: number
  nome: string
  cpf: string
  crm: string
  email: string
  telefone: string
  dataNascimento: string
  especialidade: string
}

interface DoctorCardProps {
  doctor: Doctor
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <Card className="mx-auto flex w-full flex-col items-start gap-6 bg-white px-8 py-6 md:flex-row">
      <div className="flex-shrink-0">
        <Image
          src={'/doctor.png'}
          alt={doctor.nome}
          width={112}
          height={112}
          className="bg-muted h-20 w-20 rounded-xl object-cover md:h-28 md:w-28"
        />
      </div>
      <CardContent className="flex flex-col justify-center p-0">
        <span className="mb-1 text-xl leading-tight font-semibold">
          {doctor.nome}
        </span>
        <span className="text-muted-foreground mb-1 text-sm">
          {doctor.especialidade}
        </span>
        <span className="mb-1 text-sm">CRM: {doctor.crm}</span>
        <span className="mb-1 text-sm">Email: {doctor.email}</span>
        <span className="mb-1 text-sm">Telefone: {doctor.telefone}</span>
        <span className="mb-1 text-sm">
          Data de Nascimento: {doctor.dataNascimento}
        </span>

        <Button className="mt-6 w-full" size="sm" variant="default">
          <Link className="w-full" href={`/medicos/${doctor.id}`}>
            Ver mais informações
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
