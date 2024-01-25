import axiosApi, { axiosClassic } from 'api/interceptor'

export const UserService = {
	async getMyProfile() {
		try {
			const response = await axiosApi.get(`/users/myprofile/`)
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

	async getMyProfileById(id: string) {
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

	async getMyProfileByIdReservation() {
		try {
			const response = await axiosApi.get(`/users/profile/reservation/`)
			const profile = response.data
			return profile
		} catch (error) {
			console.error('Error fetching reservation profile:', error)
		}
	},
}
