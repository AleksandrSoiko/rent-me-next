import { axiosClassic } from 'api/interceptor'
import { removeFromStorage, saveAccessToken } from './auth-token.service'
import { IAuthUser } from 'types/auth.types'

export const AuthService = {
	async main(type: 'login' | 'register', data: IAuthUser) {
		const response = await axiosClassic.post(`/auth/${type}`, data)
		if (response.data.accessToken) saveAccessToken(response.data.accessToken)
		return response
	},

	async getNewTokens() {
		const response = await axiosClassic.get('/auth/login/acess')
		if (response.data.accessToken) saveAccessToken(response.data.accessToken)
		return response
	},

	async logout() {
		const response = await axiosClassic.get('/auth/logout/')
		if (response.data) removeFromStorage()
		return response
	},
}

export default AuthService
