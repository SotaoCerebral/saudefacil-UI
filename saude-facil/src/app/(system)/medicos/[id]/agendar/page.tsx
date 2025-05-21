'use client'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import {
  useAppointments,
  useCreateAppointment,
} from '@/hooks/https/use-appointment'
import { useDoctor } from '@/hooks/https/use-doctor'
import { useTimes } from '@/hooks/https/use-times'
import { useCurretUser } from '@/hooks/utils/use-current-user'

export default function Agendar() {
  const [selectedTime, setSelectedTime] = useState('')
  const params = useParams()
  const { data: doctor } = useDoctor(Number(params.id))
  const { data: times } = useTimes()
  const { mutate: createAppointment } = useCreateAppointment()
  const { data: appointments } = useAppointments()
  const currentUser = useCurretUser()

  const handleCreateAppointment = () => {
    if (!selectedTime) return

    const selectedTimeData = times?.find(
      (time) => time.id.toString() === selectedTime,
    )
    if (!selectedTimeData) return

    console.log(appointments)

    createAppointment({
      medicoId: Number(params.id),
      data: selectedTimeData.data,
      hora: selectedTimeData.hora,
      tipoConsulta: 'PRESENCIAL',
      observacoes: 'Nenhuma observação',
      pacienteId: currentUser?.pacienteId || 0,
    })
  }

  if (!doctor) {
    return null
  }

  return (
    <div className="c-container flex flex-col items-center justify-center py-8 md:py-16">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Agendamento</CardTitle>
          <CardDescription>
            Escolha uma data e um horário para agendar uma consulta com o Dr.{' '}
            {doctor.nome}.
          </CardDescription>
        </CardHeader>
        <Separator />
        <CardContent className="grid grid-cols-1 gap-8 py-8 md:grid-cols-[1fr_1fr] md:gap-12">
          {/* Doctor Info */}
          <div className="flex flex-1 flex-col items-center gap-4 md:max-w-sm md:items-start">
            <Image
              src="/doctor.png"
              alt={`Dr. ${doctor.nome}`}
              width={112}
              height={112}
              className="h-28 w-28 object-cover"
            />
            <CardTitle className="w-full text-center md:text-left">
              Dr. {doctor.nome} - {doctor.especialidade}
            </CardTitle>
            <ul className="text-muted-foreground mt-1 w-full space-y-1 text-sm">
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

          {/* Scheduling Form */}
          <div className="flex flex-1 flex-col justify-center gap-4">
            <Label htmlFor="time">Data e Hora</Label>
            <Select value={selectedTime} onValueChange={setSelectedTime}>
              <SelectTrigger id="time" className="w-full">
                <SelectValue placeholder="Selecione o horário" />
              </SelectTrigger>
              <SelectContent>
                {times
                  ?.filter((time) => time.disponivel)
                  .filter((time) => time.medicoId === Number(params.id))
                  .length === 0 ? (
                  <SelectItem value="none" disabled>
                    Nenhum horario para esse medico
                  </SelectItem>
                ) : (
                  times
                    ?.filter((time) => time.disponivel)
                    .filter((time) => time.medicoId === Number(params.id))
                    .map((time) => (
                      <SelectItem key={time.id} value={time.id.toString()}>
                        {time.data} - {time.hora}
                      </SelectItem>
                    ))
                )}
              </SelectContent>
            </Select>
            <Button
              className="mt-4 w-full bg-cyan-400 px-0 text-white hover:bg-cyan-500"
              onClick={handleCreateAppointment}
              disabled={!selectedTime}
            >
              Agendar
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
