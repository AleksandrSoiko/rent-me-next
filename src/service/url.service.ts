import axios from 'axios'

const api = axios.create({
	baseURL: 'http://localhost:4000/api/',
})

export const fetchData = async (endpoint) => {
	try {
		const response = await api.get(endpoint)
		return response.data
	} catch (error) {
		console.error('Error fetching data:', error)
		throw error
	}
}
