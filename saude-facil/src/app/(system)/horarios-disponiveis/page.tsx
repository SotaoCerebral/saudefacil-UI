'use client'

import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
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
      const response = await axios.post(
        'https://saudefacil.onrender.com/horarios-disponiveis',
        null, // corpo vazio
        { params: payload }
      )

      alert('Horário cadastrado com sucesso!')
      setData('')
      setHora('')
      router.push('/agendamentos') // ou a tela que quiser
    } catch (error) {
      console.error('Erro ao cadastrar horário:', error)
      alert('Erro ao cadastrar horário')
    }
  }

  // Protege a página
  if (!user || user.role !== 'ADMIN') {
    return <p className="text-center mt-10">Acesso restrito para médicos.</p>
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-xl shadow-md">
      <h1 className="text-xl font-bold mb-4 text-center">Cadastrar Horário</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Data</label>
          <input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Hora</label>
          <input
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
        >
          Cadastrar Horário
        </button>
      </form>
    </div>
  )
}
