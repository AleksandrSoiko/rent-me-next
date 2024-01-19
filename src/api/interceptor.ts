import axios from 'axios'
import { API_URL, NEXTAUTH_API } from 'config/api.config'
import { authOptions } from 'lib/auth'
import { getServerSession } from 'next-auth'

const axiosApi = axios.create({
	baseURL: 'https://nodejs-hw-goit-03-restapi.onrender.com/api',
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
	baseURL: 'https://nodejs-hw-goit-03-restapi.onrender.com/api',
	headers: {
		'Content-Type': 'application/json',
	},
})
