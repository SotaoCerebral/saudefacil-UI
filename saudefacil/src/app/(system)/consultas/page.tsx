'use client'

import { useAppointments } from '@/hooks/https/use-appointment'

import { ConsultationCard } from './consultation-card'

export default function Consultas() {
  const { data: appointments } = useAppointments()

  return (
    <div className="c-container py-16">
      <h1 className="text-2xl font-medium">Consultas Agendadas</h1>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {appointments?.map((appointment) => (
          <ConsultationCard key={appointment.id} {...appointment} />
        ))}
      </div>
    </div>
  )
}
