import { axiosClassic } from 'api/interceptor'

export const ApartamentService = {
	async getAllApartament() {
		try {
			const response = await axiosClassic.get('/apartament')
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
