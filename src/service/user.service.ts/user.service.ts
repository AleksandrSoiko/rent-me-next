import axiosApi, { axiosClassic } from 'api/interceptor'

export const UserService = {
	async getProfile(id: string) {
		try {
			const response = await axiosApi.get(`/users/myprofile/?id=${id}`)
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

	async getProfileById(id: string) {
		try {
			const response = await axiosClassic.get(`/users/profile/?id=${id}`)
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

	async getProfileByIdReservation(id: string) {
		try {
			const response = await axiosApi.get(
				`/users/profile/reservation/?id=${id}`
			)
			const profile = response.data
			return profile
		} catch (error) {
			console.error('Error fetching reservation profile:', error)
		}
	},
}
