'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'

export default function Pagamento() {
  const router = useRouter()
  return (
    <div className="c-container flex flex-col items-center justify-center py-8 md:py-16">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Tela de pagamento
          </CardTitle>
          <CardDescription>
            Para confirmação do agendamento só mediante o pagamento
          </CardDescription>
        </CardHeader>
        <Separator />
        <CardContent className="grid grid-cols-1 gap-8 py-8 md:grid-cols-[1fr_1.2fr] md:gap-12">
          {/* Doctor Info */}
          <div className="flex flex-1 flex-col items-center gap-4 md:max-w-sm md:items-start">
            <Image
              src="/doctor.png"
              alt="Dr. Carlos"
              width={112}
              height={112}
              className="h-28 w-28 object-cover"
            />
            <CardTitle className="w-full text-center md:text-left">
              Dr. Carlos - Fisioterapeuta
            </CardTitle>
            <ul className="mt-1 w-full space-y-1 text-sm">
              <li>
                <span className="text-foreground font-medium">
                  São Caetano do Sul - São Paulo
                </span>
              </li>
              <li className="text-muted-foreground">
                Horário da consulta: 15:30
              </li>
              <li className="text-muted-foreground">
                Dia da consulta: 23/03/25
              </li>
              <li className="text-muted-foreground">
                Atendimento: Consultório
              </li>
            </ul>
          </div>

          {/* Payment Form */}
          <form
            className="flex flex-1 flex-col justify-center gap-4"
            onSubmit={(e) => {
              e.preventDefault()
              router.push('/consultas')
            }}
          >
            <div className="flex flex-col gap-2">
              <Label htmlFor="titular" className="text-sm">
                Titular
              </Label>
              <Input
                id="titular"
                name="titular"
                placeholder="Nome impresso no cartão"
                required
                className="px-3 py-2 text-sm"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="cpf" className="text-sm">
                CPF/CNPJ
              </Label>
              <Input
                id="cpf"
                name="cpf"
                placeholder="Digite o CPF ou CNPJ"
                required
                className="px-3 py-2 text-sm"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="numero" className="text-sm">
                Número do Cartão
              </Label>
              <Input
                id="numero"
                name="numero"
                placeholder="0000 0000 0000 0000"
                required
                maxLength={19}
                className="px-3 py-2 text-sm"
              />
            </div>
            <div className="flex gap-4">
              <div className="flex flex-1 flex-col gap-2">
                <Label htmlFor="validade" className="text-sm">
                  Validade (MM/AA)
                </Label>
                <Input
                  id="validade"
                  name="validade"
                  placeholder="MM/AA"
                  required
                  maxLength={5}
                  className="px-3 py-2 text-sm"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <Label htmlFor="cvv" className="text-sm">
                  Código (CVV)
                </Label>
                <Input
                  id="cvv"
                  name="cvv"
                  placeholder="CVV"
                  required
                  maxLength={4}
                  className="px-3 py-2 text-sm"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="pagamento" className="text-sm">
                Pagamento
              </Label>
              <Select name="pagamento" required>
                <SelectTrigger className="w-full px-3 py-2 text-sm">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="avista">1x R$ 200,00 à vista</SelectItem>
                  <SelectItem value="2x">2x R$ 100,00 sem juros</SelectItem>
                  <SelectItem value="3x">3x R$ 66,67 sem juros</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              type="submit"
              className="mt-4 bg-cyan-400 text-white hover:bg-cyan-500"
            >
              Concluir Pagamento
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
