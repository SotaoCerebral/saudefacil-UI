import Image from 'next/image'
import Link from 'next/link'

function OptionCard() {
  return (
    <Link href="/sobre">
      <div className="bg-primary flex aspect-video h-auto w-full flex-col items-center justify-center rounded-2xl shadow-md">
        <Image
          src="/logo.png"
          alt="Logo Saúde Fácil"
          width={80}
          height={80}
          className="mb-2"
        />
        <p className="text-sm font-semibold text-white">Saúde Fácil</p>
      </div>
    </Link>
  )
}

export { OptionCard }
