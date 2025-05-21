'use client'

import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

import { MobileNavMenu, NavMenu } from './nav-menu'
import { ProfileDropdown } from './profile-dropdown'

function Header() {
  return (
    <header className="bg-primary">
      <div className="c-container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            className="h-10 w-10"
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
          />
          <h1 className="text-primary-foreground font-medium">Saúde Facil</h1>
        </Link>

        {/* Desktop Navigation */}
        <NavMenu />

        {/* Desktop User/Auth Buttons */}
        <div className="hidden md:block">
          <ProfileDropdown />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="bg-primary w-[300px] p-0 sm:w-[400px]"
            >
              <SheetHeader className="sr-only">
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex h-full flex-col">
                <div className="border-primary-foreground/10 flex items-center gap-2 border-b p-4">
                  <Image
                    className="h-10 w-10"
                    src="/logo.png"
                    alt="Logo"
                    width={100}
                    height={100}
                  />
                  <h1 className="text-primary-foreground text-lg font-medium">
                    Saúde Facil
                  </h1>
                </div>
                <div className="flex-1 overflow-y-auto p-4">
                  <MobileNavMenu />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export { Header }
