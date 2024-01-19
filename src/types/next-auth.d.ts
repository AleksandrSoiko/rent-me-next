import { Session } from 'next-auth'

declare module 'next-auth' {
	interface Session {
		user: {
			name: string
			accessToken: string
			email: string
			exp: number
			iat: number
			isAdmin: boolean
			jti: string
			refreshToken: string
			_id: string
		}
	}
}
