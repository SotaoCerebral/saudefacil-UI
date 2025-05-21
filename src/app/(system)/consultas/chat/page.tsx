'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

const LOCAL_STORAGE_KEY = 'chat-messages'

export type Message = {
  sender: 'doctor' | 'patient'
  text: string
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY)
    const welcomeMessage = {
      sender: 'doctor' as const,
      text: 'Olá! Bem-vindo(a) ao chat. Como posso ajudar você hoje?',
    }

    if (stored) {
      const parsedMessages = JSON.parse(stored)
      // Check if first message is from doctor, if not add welcome message
      if (parsedMessages[0]?.sender !== 'doctor') {
        setMessages([welcomeMessage, ...parsedMessages])
      } else {
        setMessages(parsedMessages)
      }
    } else {
      setMessages([welcomeMessage])
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(messages))
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  function handleSend(e?: React.FormEvent) {
    e?.preventDefault()
    if (!input.trim()) return
    setMessages((prev) => [...prev, { sender: 'patient', text: input.trim() }])
    setInput('')
  }

  return (
    <div className="bg-background flex w-full flex-col items-center py-16">
      <div className="mb-1 text-lg font-bold sm:text-2xl">Chat</div>
      <div className="c-container text-muted-foreground mb-4 text-center text-xs sm:text-base">
        Nessa tela você poderá ter contato direto com o médico para tirar
        dúvidas sobre a consulta
      </div>
      <Card className="c-container flex h-full min-h-[400px] flex-col justify-between rounded-2xl border p-3 sm:p-6">
        <CardContent className="flex flex-1 flex-col gap-3 overflow-y-auto px-0 pb-2 sm:gap-4">
          {messages.length === 0 && (
            <div className="text-muted-foreground mt-10 text-center text-xs sm:text-sm">
              Nenhuma mensagem ainda
            </div>
          )}
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex items-end ${msg.sender === 'doctor' ? 'justify-start' : 'justify-end'}`}
            >
              {msg.sender === 'doctor' && (
                <Image
                  src="/doctor.png"
                  alt="Doutor"
                  className="mr-2 h-8 w-8 rounded-full border sm:h-10 sm:w-10"
                  width={40}
                  height={40}
                />
              )}
              <div
                className={`max-w-[70%] rounded-2xl px-3 py-2 text-xs sm:px-4 sm:text-sm ${msg.sender === 'doctor' ? 'bg-muted text-left' : 'bg-primary text-primary-foreground text-right'}`}
              >
                {msg.text}
              </div>
              {msg.sender === 'patient' && (
                <Image
                  src="/patient.jpg"
                  alt="Paciente"
                  className="ml-2 h-8 w-8 rounded-full border sm:h-10 sm:w-10"
                  width={40}
                  height={40}
                />
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </CardContent>
        <form onSubmit={handleSend} className="mt-4 flex items-center gap-2">
          <Input
            className="h-10 flex-1 rounded-full px-3 text-xs sm:h-12 sm:px-4 sm:text-base"
            placeholder="Digite sua mensagem..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) handleSend(e)
            }}
            autoFocus
          />
          <Button
            type="submit"
            size="icon"
            className="h-10 w-10 rounded-full sm:h-12 sm:w-12"
          >
            <span className="sr-only">Enviar</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5 sm:h-6 sm:w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-7.5-15-7.5v6l10 1.5-10 1.5v6z"
              />
            </svg>
          </Button>
        </form>
      </Card>
    </div>
  )
}
