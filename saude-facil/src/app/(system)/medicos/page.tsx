'use client'

import { useState } from 'react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useDoctors } from '@/hooks/https/use-doctor'

import { DoctorCard } from './doctor-card'

export default function Consultas() {
  const { data: doctors } = useDoctors()
  const [selectedSpecialty, setSelectedSpecialty] = useState('TODAS')

  const filteredDoctors =
    selectedSpecialty === 'TODAS'
      ? doctors
      : doctors?.filter((doctor) => doctor.especialidade === selectedSpecialty)

  return (
    <div className="c-container py-16">
      <h1 className="text-2xl font-medium">Médicos Disponíveis</h1>

      <Select onValueChange={setSelectedSpecialty}>
        <SelectTrigger className="mt-8">
          <SelectValue placeholder="Selecione uma especialidade" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="TODAS">Todas as especialidades</SelectItem>
          <SelectItem value="OBSTETRICIA">Obstetrícia</SelectItem>
          <SelectItem value="DERMATOLOGIA">Dermatologia</SelectItem>
          <SelectItem value="ORTOPEDIA">Ortopedia</SelectItem>
        </SelectContent>
      </Select>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredDoctors?.map((doctor, index) => (
          <DoctorCard key={index} doctor={doctor} />
        ))}

        {filteredDoctors?.length === 0 && (
          <div className="col-span-full flex items-center justify-center">
            <p className="text-muted-foreground text-sm">
              Nenhum médico encontrado
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
