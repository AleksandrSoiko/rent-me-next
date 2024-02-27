import { useState } from 'react'
import 'toastr/build/toastr.css'
import toastr from 'toastr'
import axiosApi from 'api/interceptor'

export default function useAxiosPost() {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [data, setData] = useState<string | null>(null)

	const fetchAxios = async ({ url, method, body }) => {
		setLoading(true)
		setError(null)
		setData(null)
		try {
			const response = await axiosApi.request({
				url,
				method,
				data: body,
				// headers: {
				// 	'Content-Type':
				// 		body instanceof FormData
				// 			? 'multipart/form-data'
				// 			: 'application/json',
				// },
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
