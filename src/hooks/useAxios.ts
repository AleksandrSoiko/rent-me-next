import axios from 'axios'
import { API_URL } from 'config/api.config'
import { useSession } from 'next-auth/react'
import { useState } from 'react'

const axiosApiClient = axios.create({
	baseURL: API_URL,
	timeout: 1000,
	headers: { 'Content-Type': 'application/json' },
})

export default function useAxiosPost() {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [data, setData] = useState<string | null>(null)
	const session = useSession()

	axiosApiClient.interceptors.request.use(async (config) => {
		if (session) {
			const accessToken = session.data?.user.accessToken
			if (accessToken) {
				config.headers.Authorization = `Bearer ${accessToken}`
			}
		}
		return config
	})

	const fetchAxios = async (api: string, body) => {
		setLoading(true)
		try {
			const response = await axiosApiClient.put(api, body)
			setLoading(false)
			setError(null)
			setData(response.data)
		} catch (error) {
			setLoading(false)
			setError(error.response.data.message)
			console.log(error)
		}
	}

	return { loading, error, data, fetchAxios }
}
