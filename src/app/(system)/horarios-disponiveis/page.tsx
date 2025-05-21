'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { useCurretUser } from '@/hooks/utils/use-current-user'

export default function HorariosDisponiveisPage() {
  const user = useCurretUser()
  const router = useRouter()

  const [data, setData] = useState('')
  const [hora, setHora] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!user || user.role !== 'ADMIN') {
      alert('Apenas médicos podem cadastrar horários.')
      return
    }

    const payload = {
      medicoId: user.medicoId,
      data,
      hora,
      disponivel: true,
    }

    try {
      await axios.post(
        'https://saudefacil.onrender.com/horarios-disponiveis',
        null,
        { params: payload },
      )

      alert('Horário cadastrado com sucesso!')
      setData('')
      setHora('')
      router.push('/agendamentos')
    } catch (error) {
      console.error('Erro ao cadastrar horário:', error)
      alert('Erro ao cadastrar horário')
    }
  }

  // Protege a página
  if (!user || user.role !== 'ADMIN') {
    return <p className="mt-10 text-center">Acesso restrito para médicos.</p>
  }

  return (
    <div className="mx-auto mt-10 max-w-md rounded-xl bg-white p-6 shadow-md">
      <h1 className="mb-4 text-center text-xl font-bold">Cadastrar Horário</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Data</label>
          <input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
            required
            className="w-full rounded-md border px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Hora</label>
          <input
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            required
            className="w-full rounded-md border px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
        >
          Cadastrar Horário
        </button>
      </form>
    </div>
  )
}
