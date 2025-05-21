import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export default function EsqueceuSenha() {
  return (
    <Card className="w-[80vw] max-w-xl rounded-2xl p-8 shadow-lg">
      <CardHeader className="mb-4 pl-0">
        <CardTitle className="text-2xl font-semibold">
          Esqueceu sua senha?
        </CardTitle>
        <CardDescription>
          Digite seu e-mail para receber um link de redefinição de senha.
        </CardDescription>
      </CardHeader>
      <form className="flex w-full flex-col gap-4">
        <Input
          id="email"
          type="email"
          placeholder="E-mail"
          required
          className="focus:ring-primary rounded-full border-none bg-gray-200 px-6 py-3 text-base focus:ring-2"
        />
        <Button
          type="submit"
          className="mt-2 w-full rounded-full px-0 text-base font-semibold"
        >
          <Link className="w-full" href="/auth/esqueci-a-senha/redefinir-senha">
            {' '}
            Enviar{' '}
          </Link>
        </Button>
      </form>
    </Card>
  )
}
