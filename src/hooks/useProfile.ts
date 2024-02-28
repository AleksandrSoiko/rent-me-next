import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { UserService } from 'service/user.service.ts/user.service'
import { IUser } from 'types/user.types'

export default function useProfileGet() {
	const [load, setLoading] = useState<boolean>(false)
	const [errors, setError] = useState<string | null>(null)
	const [profile, setProfile] = useState<IUser | null>(null)
	const isAuth = Cookies.get('accessToken')

	useEffect(() => {
		if (isAuth) {
			getPro()
		} else {
			setError('You are not autoraize')
		}
	}, [isAuth])

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
