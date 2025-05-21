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
import { Separator } from '@/components/ui/separator'

export default function Confirmacao() {
  const router = useRouter()

  return (
    <div className="c-container flex flex-col items-center justify-center py-8 md:py-16">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Confirmar Agendamento
          </CardTitle>
          <CardDescription>
            Por favor, confirme os detalhes do seu agendamento com o Dr. Carlos.
          </CardDescription>
        </CardHeader>
        <Separator />
        <CardContent className="grid grid-cols-1 gap-8 py-8 md:grid-cols-[1fr_1fr] md:gap-12">
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
            <ul className="text-muted-foreground mt-1 w-full space-y-1 text-sm">
              <li>
                <span className="text-foreground font-medium">
                  Localização:
                </span>{' '}
                São Caetano do Sul - São Paulo
              </li>
              <li>
                <span className="text-foreground font-medium">
                  Experiência:
                </span>{' '}
                15 anos
              </li>
              <li>
                <span className="text-foreground font-medium">
                  Atendimento:
                </span>{' '}
                Domiciliar ou Consultório
              </li>
            </ul>
          </div>

          {/* Appointment Details */}
          <div className="flex flex-1 flex-col justify-center gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-muted-foreground text-sm font-medium">
                  Data
                </h3>
                <p className="text-lg font-medium">25 de Março de 2024</p>
              </div>
              <div>
                <h3 className="text-muted-foreground text-sm font-medium">
                  Horário
                </h3>
                <p className="text-lg font-medium">09:00</p>
              </div>
              <div>
                <h3 className="text-muted-foreground text-sm font-medium">
                  Duração
                </h3>
                <p className="text-lg font-medium">50 minutos</p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Button
                className="w-full bg-cyan-400 text-white hover:bg-cyan-500"
                onClick={() => {
                  // TODO: Handle confirmation
                  router.push('/medicos/1/agendar/confirmacao/pagamento')
                }}
              >
                Confirmar Agendamento
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => router.back()}
              >
                Voltar
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
