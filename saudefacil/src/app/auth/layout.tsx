'use client'

import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()

  const handleBack = () => {
    router.back()
  }

  return (
    <main className="bg-primary relative flex h-screen w-screen items-center justify-center">
      <Button
        onClick={handleBack}
        variant="secondary"
        className="absolute top-4 left-4"
        aria-label="Voltar"
      >
        <ArrowLeft />
        Voltar
      </Button>

      {pathname === '/auth/login' && (
        <div className="absolute top-10 right-[50%] flex translate-x-[50%] flex-col items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={100} height={100} />
          <p className="text-2xl font-bold text-white">Saúde Fácil</p>
        </div>
      )}
      {children}
    </main>
  )
}
