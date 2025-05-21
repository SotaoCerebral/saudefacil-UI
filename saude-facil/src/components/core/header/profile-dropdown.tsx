import { LogOut, MessageCircleQuestion, User } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useCurretUser } from '@/hooks/utils/use-current-user'

function ProfileDropdown() {
  const currentUser = useCurretUser()
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem('auth')
    router.push('/auth/login')
  }

  if (!currentUser?.pacienteId && !currentUser?.medicoId) {
    return (
      <div className="flex items-center gap-2">
        <Button variant="outline">
          <Link href="/auth/login">Entrar</Link>
        </Button>
        <Button variant="secondary">
          <Link href="/auth/cadastrar">Criar conta</Link>
        </Button>
      </div>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <User /> {currentUser?.email}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Link className="flex items-center gap-2" href="/dados-da-conta">
            <User />
            Dados da conta
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link className="flex items-center gap-2" href="/suporte">
            <MessageCircleQuestion />
            Suporte
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <button onClick={handleLogout} className="flex items-center gap-2">
            <LogOut />
            Sair
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export { ProfileDropdown }
