import axios, { CreateAxiosDefaults } from 'axios'
import { API_URL } from 'config/api.config'
import { errorCatch } from './error'
import AuthService from 'service/auth/auth.service'
import {
	getAccessToken,
	removeFromStorage,
} from 'service/auth/auth-token.service'

const options: CreateAxiosDefaults = {
	baseURL: API_URL,
	headers: { 'Content-Type': 'application/json' },
	withCredentials: true,
}

const axiosApi = axios.create(options)
axiosApi.interceptors.request.use(async (config) => {
	const accessToken = getAccessToken()
	if (config?.headers && accessToken)
		config.headers.Authorization = `Bearer ${accessToken}`
	return config
})

axiosApi.interceptors.response.use(
	(config) => config,
	async (error) => {
		const originalRequest = error.config
		if (
			(error.response.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				await AuthService.getNewTokens()
				return axiosApi.request(originalRequest)
			} catch (e) {
				if (errorCatch(e) === 'jwt expired') removeFromStorage()
			}
		}

		throw error
	}
)

export default axiosApi
export const axiosClassic = axios.create(options)
