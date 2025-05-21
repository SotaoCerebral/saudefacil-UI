import { useEffect, useState } from 'react'

interface User {
  email: string
  pacienteId: number
  medicoId: number
}

function useCurretUser() {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentUser = JSON.parse(localStorage.getItem('auth') || '{}')
      setCurrentUser(currentUser)
    }
  }, [])

  return currentUser
}

export { useCurretUser }
