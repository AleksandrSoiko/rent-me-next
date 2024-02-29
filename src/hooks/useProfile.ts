import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { UserService } from 'service/user.service.ts/user.service'
import { IUser } from 'types/user.types'
import 'toastr/build/toastr.css'
import toastr from 'toastr'

export default function useProfileGet() {
	const [load, setLoading] = useState<boolean>(false)
	const [errors, setError] = useState<string | null>(null)
	const [profile, setProfile] = useState<IUser | null>(null)
	const { push } = useRouter()
	const isAuth = Cookies.get('accessToken')

	useEffect(() => {
		if (isAuth) {
			getPro()
		} else {
			push('/')
		}
	}, [isAuth, push])

	const getPro = async () => {
		setLoading(true)
		setError(null)
		setProfile(null)
		try {
			let profiles = await UserService.getMyProfile()
			setLoading(false)
			setProfile(profiles)
		} catch (error) {
			setError(error)
		}
	}

	return { load, errors, profile }
}
