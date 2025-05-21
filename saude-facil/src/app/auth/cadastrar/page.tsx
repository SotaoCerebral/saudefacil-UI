import Image from 'next/image'
import Link from 'next/link'

import { Card } from '@/components/ui/card'

export default function Register() {
  return (
    <main className="flex w-[80vw] max-w-2xl flex-col items-center px-4">
      <header className="mt-8 mb-8">
        <h1 className="text-2xl font-extrabold tracking-tight text-white drop-shadow-lg sm:text-3xl">
          Escolha qual tipo de conta você deseja criar
        </h1>
      </header>
      <section className="grid w-full gap-6 sm:gap-10 md:grid-cols-2">
        <Link href="/auth/cadastrar/paciente">
          <Card className="flex aspect-square flex-col items-center justify-center gap-4 p-4 sm:p-6">
            <Image
              src="/patient.png"
              alt="logo"
              width={150}
              height={150}
              className="sm:h-[200px] sm:w-[200px]"
            />
            <p className="text-lg font-medium">Paciente</p>
          </Card>
        </Link>
        <Link href="/auth/cadastrar/medico">
          <Card className="flex aspect-square flex-col items-center justify-center gap-4 p-4 sm:p-6">
            <Image
              src="/doctor.png"
              alt="logo"
              width={150}
              height={150}
              className="sm:h-[200px] sm:w-[200px]"
            />
            <p className="text-lg font-medium">Médico</p>
          </Card>
        </Link>
      </section>
    </main>
  )
}
