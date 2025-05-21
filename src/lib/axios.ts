import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: false,
})

api.interceptors.request.use((config) => {
  const { email, password } = JSON.parse(localStorage.getItem('auth') || '{}')

  if (email && password) {
    const credentials = btoa(`${email}:${password}`)
    config.headers.Authorization = `Basic ${credentials}`
  }

  return config
})

export { api }
