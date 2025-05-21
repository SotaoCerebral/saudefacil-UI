'use client'

import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { CalendarIcon } from 'lucide-react'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'

export function DatePicker() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-full justify-start bg-white text-left font-normal text-black dark:bg-zinc-800 dark:text-white',
            !date && 'text-muted-foreground dark:text-zinc-400',
          )}
        >
          <CalendarIcon className="text-muted-foreground dark:text-zinc-400" />
          {date ? (
            format(date, 'PPP', { locale: ptBR })
          ) : (
            <span className="text-muted-foreground dark:text-zinc-400">
              Selecione uma data
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-auto border-zinc-200 bg-white p-0 text-black dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
        align="start"
      >
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
