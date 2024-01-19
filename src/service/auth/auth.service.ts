import axiosApi from 'api/interceptor'

export const AuthService = {
	async register(body) {
		try {
			const response = await axiosApi.post('/auth/register', body)
			const profile = response.data
			return profile
		} catch (error) {
			console.error('Error fetching user profile:', error)
			return {
				redirect: {
					destination: '/',
					permanent: false,
				},
			}
		}
	},

	async login(body) {
		try {
			const response = await axiosApi.post('/auth/login', body)
			const profile = response.data
			return profile
		} catch (error) {
			console.error('Error fetching user profile:', error)
			return {
				redirect: {
					destination: '/myprofile/profile',
					permanent: false,
				},
			}
		}
	},

	async loginAcess() {
		try {
			const response = await axiosApi.get('/auth/login/acess')
			const profile = response.data
			return profile
		} catch (error) {
			console.error('Error fetching user profile:', error)
			return {
				redirect: {
					destination: '/myprofile/profile',
					permanent: false,
				},
			}
		}
	},
}

export default AuthService
