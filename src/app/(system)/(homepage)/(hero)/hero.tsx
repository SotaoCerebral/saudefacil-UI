import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { SelectSpecialist } from './select-specialist'
import { SelectState } from './select-state'

function Hero() {
  return (
    <div className="bg-primary h-full md:h-[50vh]">
      <div className="c-container relative flex h-full flex-col-reverse items-end justify-between gap-10 md:flex-row">
        <Card className="mb-10 ml-0 w-full md:w-[60%]">
          <CardHeader>
            <CardTitle className="text-primary text-2xl font-black">
              Agende agora sua consulta
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4 md:flex-row">
              <SelectSpecialist />
              <SelectState />
              <Button variant="secondary">
                <Link href="/medicos">Agendar</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Image
          src="/medic-pacient-2.png"
          alt="doctor"
          width={500}
          height={500}
          className="translate-y-10"
        />
      </div>
    </div>
  )
}

export { Hero }
