import axios from 'axios'
import { API_URL } from 'config/api.config'
import { authOptions } from 'lib/auth'
import { getServerSession } from 'next-auth'

const options = {
	baseURL: API_URL,
	headers: { 'Content-Type': 'application/json' },
	withCredentials: true,
}

const axiosApi = axios.create(options)
axiosApi.interceptors.request.use(async (config) => {
	const session = await getServerSession(authOptions)
	console.log(session)

	if (session) {
		const accessToken = session.user?.accessToken
		if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`
	}

	return config
})

export default axiosApi
export const axiosClassic = axios.create(options)

// axiosApi.interceptors.response.use(config => config, async error => {
// 	const originalRequest = error.config

// 	if (error?.response?.status ===401||errorCatch(error)==='jwt expired'||errorCatch(error)==='jwt must be provided'&&error.config&&!error.config._isRetry) {
// 		originalRequest._isRetry = true
// 		try {

// 		}
// 		throw error
// 	}
// } )
