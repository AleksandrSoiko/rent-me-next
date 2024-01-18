import axiosApi from 'api/interceptor'

export const UserService = {
	async getProfile() {
		try {
			const response = await axiosApi.get('/users/profile')
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
}
