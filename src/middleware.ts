import { NextRequest, NextResponse } from 'next/server'
import { EnumToken } from 'service/auth/auth-token.service'

export async function middleware(req: NextRequest, res: NextResponse) {
	const { url, cookies } = req

	const refreshToken = cookies.get(EnumToken.REFRESH_TOKEN)?.value
	const accessToken = cookies.get(EnumToken.ACCESS_TOKEN)?.value

	const isAuthPage = url.includes('/signIn')
	const isProfilePage = url.startsWith('/myprofile/')

	if (
		(isAuthPage && refreshToken && accessToken) ||
		(isProfilePage && refreshToken && accessToken)
	) {
		return NextResponse.redirect(new URL('/myprofile/profile', url))
	}

	if (isAuthPage) {
		return NextResponse.next()
	}

	if (!refreshToken || !accessToken) {
		return NextResponse.redirect(new URL('/signIn', req.url))
	}

	return
}

export const config = {
	matcher: ['/myprofile/:path*', '/signIn'],
}
