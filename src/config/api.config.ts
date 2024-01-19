export const API_URL = `${process.env.API_URL}/api`
export const NEXTAUTH_API = `${process.env.NEXTAUTH_API}/api`

export const getAll = (string: string) => `/apartament${string}`
export const getUserProfile = (string: string) => `/users${string}`
