import axios from 'axios'
import { API_URL } from 'config/api.config'
import { authOptions } from 'lib/auth'
import { getServerSession } from 'next-auth'

const axiosApi = axios.create({
	baseURL: 'http://localhost:4000/api',
	timeout: 1000,
	headers: { 'Content-Type': 'application/json' },
})

axiosApi.interceptors.request.use(async (config) => {
	const session = await getServerSession(authOptions)
	if (session) {
		const accessToken = session.user?.accessToken
		if (accessToken) {
			config.headers.Authorization = `Bearer ${accessToken}`
		}
	}
	return config
})

export default axiosApi

export const axiosClassic = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
})
