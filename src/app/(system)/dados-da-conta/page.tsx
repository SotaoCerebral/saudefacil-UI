'use client'

import Image from 'next/image'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DatePicker } from '@/components/ui/date-picker'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

const isDoctor = true

function ProfilePhotoUpload() {
  const [photo, setPhoto] = useState<string | null>(null)

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader()
      reader.onload = (ev) => setPhoto(ev.target?.result as string)
      reader.readAsDataURL(e.target.files[0])
    }
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <label
        htmlFor="profile-photo"
        className="flex cursor-pointer flex-col items-center gap-2"
      >
        <div className="bg-muted flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border">
          {photo ? (
            <Image
              src={photo}
              alt="Foto de perfil"
              width={80}
              height={80}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="text-muted-foreground text-3xl">+</span>
          )}
        </div>
        <span className="text-muted-foreground text-xs">Insira a foto</span>
        <Input
          id="profile-photo"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handlePhotoChange}
        />
      </label>
    </div>
  )
}

function DoctorForm() {
  return (
    <div className="flex flex-col gap-8 md:flex-row">
      <div className="flex flex-col items-center gap-4 md:w-1/3">
        <ProfilePhotoUpload />
      </div>
      <div className="flex flex-col gap-6 md:w-2/3">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Input placeholder="Especialidade" />
          <Input placeholder="Horário de atendimento" />
          <Input placeholder="Experiência" />
          <Input placeholder="Atendimento" />
        </div>
        <Textarea placeholder="Informações sobre o profissional" />
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label className="text-sm md:text-base">Nome completo</Label>
            <Input placeholder="Nome completo" />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-sm md:text-base">Data de Nascimento</Label>
            <DatePicker />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-sm md:text-base">Gênero</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Gênero" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="masculino">Masculino</SelectItem>
                <SelectItem value="feminino">Feminino</SelectItem>
                <SelectItem value="outro">Outro</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-sm md:text-base">Telefone de contato</Label>
            <Input placeholder="Telefone de contato" />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-sm md:text-base">Estado</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sp">SP</SelectItem>
                <SelectItem value="rj">RJ</SelectItem>
                <SelectItem value="mg">MG</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-sm md:text-base">CPF</Label>
            <Input placeholder="CPF" />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-sm md:text-base">RG</Label>
            <Input placeholder="RG" />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-sm md:text-base">Plano de Saúde</Label>
            <Input placeholder="Plano de Saúde" />
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <Label className="text-sm md:text-base">Endereço</Label>
            <Input placeholder="Endereço" />
          </div>
        </div>
      </div>
    </div>
  )
}

function PatientForm() {
  return (
    <div className="flex flex-col gap-8 md:flex-row">
      <div className="flex flex-col items-center gap-4 md:w-1/3">
        <ProfilePhotoUpload />
      </div>
      <div className="flex flex-col gap-6 md:w-2/3">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label className="text-sm md:text-base">Nome completo</Label>
            <Input placeholder="Nome completo" />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-sm md:text-base">Data de Nascimento</Label>
            <DatePicker />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-sm md:text-base">Gênero</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Gênero" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="masculino">Masculino</SelectItem>
                <SelectItem value="feminino">Feminino</SelectItem>
                <SelectItem value="outro">Outro</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-sm md:text-base">CPF</Label>
            <Input placeholder="CPF" />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-sm md:text-base">RG</Label>
            <Input placeholder="RG" />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-sm md:text-base">Telefone de contato</Label>
            <Input placeholder="Telefone de contato" />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-sm md:text-base">Estado</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sp">SP</SelectItem>
                <SelectItem value="rj">RJ</SelectItem>
                <SelectItem value="mg">MG</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-sm md:text-base">Plano de Saúde</Label>
            <Input placeholder="Plano de Saúde" />
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <Label className="text-sm md:text-base">Endereço</Label>
            <Input placeholder="Endereço" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function DadosDaContaPage() {
  return (
    <div className="c-container py-16">
      <Card className="mx-auto w-full max-w-5xl">
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl">Dados da conta</CardTitle>
          <p className="text-muted-foreground mt-1 text-xs md:text-sm">
            Preencha os campos abaixo com suas informações sobre você
          </p>
        </CardHeader>
        <CardContent>
          {isDoctor ? <DoctorForm /> : <PatientForm />}
          <div className="mt-8 flex justify-center">
            <Button className="w-full">Salvar</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
