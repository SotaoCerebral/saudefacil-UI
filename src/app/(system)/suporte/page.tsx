'use client'

import { Paperclip, Wrench, X } from 'lucide-react'
import React from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function Suporte() {
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null)
  const [description, setDescription] = React.useState('')

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleRemoveFile = () => {
    setSelectedFile(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission logic
    console.log({ description, file: selectedFile })
  }

  return (
    <div className="c-container py-16">
      <div className="mb-6 flex items-center justify-center gap-2">
        <Wrench className="size-6" />
        <span className="text-xl font-semibold">Suporte</span>
      </div>
      <Card className="w-full">
        <CardContent className="flex flex-col gap-6">
          <p className="text-muted-foreground text-sm">
            Nos informe sobre seu problema e nossa equipe de suporte entrar em
            contato com você o mais rápido possível.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <Label htmlFor="descricao" className="sr-only">
                Descrição do problema
              </Label>
              <Textarea
                id="descricao"
                className="text-xs"
                placeholder="Nos dê uma breve explicação sobre seu problema."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col items-start gap-2">
              <div className="mr-auto">
                <label htmlFor="imagem" className="cursor-pointer">
                  <Input
                    id="imagem"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <Button
                    className="text-muted-foreground gap-2 text-sm"
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById('imagem')?.click()}
                  >
                    <Paperclip className="size-4" />
                    {selectedFile ? 'Alterar imagem' : 'Anexar imagem'}
                  </Button>
                </label>
              </div>
              {selectedFile && (
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-sm">{selectedFile.name}</span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={handleRemoveFile}
                    aria-label="Remover imagem"
                  >
                    <X className="size-4" />
                  </Button>
                </div>
              )}
            </div>
            <Button type="submit" className="mt-4">
              Enviar mensagem
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
