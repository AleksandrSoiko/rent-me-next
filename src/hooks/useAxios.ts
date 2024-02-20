import axios from 'axios'
import { API_URL } from 'config/api.config'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import 'toastr/build/toastr.css'
import toastr from 'toastr'

type TypeInput = {
	url: string
	method: 'GET' | 'POST' | 'PUT' | 'DELETE'
	body: any
}

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

	const fetchAxios = async ({ url, method, body }: TypeInput) => {
		setLoading(true)
		setError(null)
		setData(null)
		try {
			const response = await axiosApiClient.request({
				url,
				method,
				data: body,
				headers: {
					'Content-Type':
						body instanceof FormData
							? 'multipart/form-data'
							: 'application/json',
				},
			})

			setLoading(false)
			setError(null)
			setData(response.data)
		} catch (error) {
			toastr.error(error.response.data.message)
			setLoading(false)
			setError(error.response.data.message)
		}
	}

	return { loading, error, data, fetchAxios }
}
