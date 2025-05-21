import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export default function RedefinirSenha() {
  return (
    <Card className="w-[80vw] max-w-xl rounded-2xl p-8 shadow-lg">
      <CardHeader className="mb-4 pl-0">
        <CardTitle className="text-2xl font-semibold">
          Redefinir senha
        </CardTitle>
        <CardDescription>Digite sua nova senha.</CardDescription>
      </CardHeader>
      <form className="flex w-full flex-col gap-4">
        <Input
          id="email"
          type="password"
          placeholder="Senha"
          required
          className="focus:ring-primary rounded-full border-none bg-gray-200 px-6 py-3 text-base focus:ring-2"
        />
        <Input
          id="confirm-password"
          type="password"
          placeholder="Confirmar senha"
          required
          className="focus:ring-primary rounded-full border-none bg-gray-200 px-6 py-3 text-base focus:ring-2"
        />
        <Button
          type="submit"
          className="mt-2 w-full rounded-full text-base font-semibold"
        >
          Enviar
        </Button>
      </form>
    </Card>
  )
}
