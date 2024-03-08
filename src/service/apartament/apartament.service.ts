import axiosApi, { axiosClassic } from 'api/interceptor'

export const ApartamentService = {
	async getAllApartament() {
		try {
			const response = await axiosClassic.get(`/apartament/`)
			const profile = response.data
			return profile
		} catch (error) {
			console.error('Error fetching apartament:', error)
			return {
				redirect: {
					destination: '/',
					permanent: false,
				},
			}
		}
	},
	async getFavoriteApartament() {
		try {
			const response = await axiosApi.get(`/apartament/favorite`)
			const profile = response.data
			return profile
		} catch (error) {
			console.error('Error fetching apartament:', error)
			return {
				redirect: {
					destination: '/',
					permanent: false,
				},
			}
		}
	},
	async getApartamentById(id: string) {
		try {
			const response = await axiosClassic.get(`/apartament/slug/?id=${id}`)
			const profile = response.data
			return profile
		} catch (error) {
			console.error('Error fetching apartament:', error)
			return {
				redirect: {
					destination: '/',
					permanent: false,
				},
			}
		}
	},
}
