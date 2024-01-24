// export const API_URL = `${process.env.NEXTAUTH_API}/api`
export const API_URL = 'http://localhost:4000/api'

export const getAll = (string: string) => `/apartament${string}`
export const getUserProfile = (string: string) => `/users${string}`
