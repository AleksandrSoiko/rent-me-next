import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

// Check the data in file .env for googleID/secret
function getGoogleCredentials() {
	// Receiving sensitive google data from the environment
	const clientId = process.env.GOOGLE_CLIENT_ID
	const clientSecret = process.env.GOOGLE_CLIENT_SECRET

	// Checking the presence of confidential data
	if (!clientId || clientId.length === 0) {
		throw new Error('Missing GOOGLE_CLIENT_ID')
	}
	if (!clientSecret || clientSecret.length === 0) {
		throw new Error('Missing GOOGLE_CLIENT_SECRET')
	}
	return { clientId, clientSecret }
}

export const authOptions: NextAuthOptions = {
	session: {
		strategy: 'jwt',
	},
	pages: {
		signIn: '/login',
	},
	providers: [
		GoogleProvider({
			clientId: getGoogleCredentials().clientId,
			clientSecret: getGoogleCredentials().clientSecret,
		}),
	],
	callbacks: {
		async session({ session, token }) {
			if (token) {
				session.user = {
					name: token.name,
					email: token.email,
					image: token.picture,
				}
			}

			return session
		},
		redirect() {
			return '/agent'
		},
	},
}
