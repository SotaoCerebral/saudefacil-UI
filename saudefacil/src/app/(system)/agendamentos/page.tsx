'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { useAppointments } from '@/hooks/https/use-appointment'

import { AppointmentCard } from './appointment-card'

export default function Agendamentos() {
  const { data: appointments } = useAppointments()

  return (
    <div className="c-container py-16">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <h1 className="text-2xl font-medium">Agendamentos Marcados</h1>
        <Button className="px-0" variant="outline">
          <Link className="w-full px-4" href="/agendamentos/relatorio">
            Ver relatorio de agendamentos
          </Link>
        </Button>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {appointments?.map((appointment) => (
          <AppointmentCard key={appointment.id} {...appointment} />
        ))}
      </div>
    </div>
  )
}
