import { NextAuthOptions, User } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import axios from 'axios'
import { API_URL } from 'config/api.config'

// function getGoogleCredentials() {
// 	const clientId = process.env.GOOGLE_CLIENT_ID
// 	const clientSecret = process.env.GOOGLE_CLIENT_SECRET

// 	if (!clientId || clientId.length === 0) {
// 		throw new Error('Missing GOOGLE_CLIENT_ID')
// 	}
// 	if (!clientSecret || clientSecret.length === 0) {
// 		throw new Error('Missing GOOGLE_CLIENT_SECRET')
// 	}
// 	return { clientId, clientSecret }
// }

export const authOptions: NextAuthOptions = {
	session: {
		strategy: 'jwt',
	},
	pages: {
		signIn: '/signIn',
	},
	providers: [
		// GoogleProvider({
		// 	clientId: getGoogleCredentials().clientId,
		// 	clientSecret: getGoogleCredentials().clientSecret,
		// }),
		CredentialsProvider({
			name: 'credentials',
			credentials: {
				email: { label: 'Username', type: 'email', placeholder: 'jsmith' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				const response = await axios.post(`${API_URL}/auth/login/`, {
					email: credentials?.email,
					password: credentials?.password,
				})
				const { password, ...user } = response.data.user
				const accessToken = response.data.accessToken
				const refreshToken = response.data.refreshToken
				return {
					...user,
					accessToken,
					refreshToken,
				}
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			return { ...token, ...user }
		},
		async session({ session, token }) {
			session.user = token as any
			return session
		},
	},
}
