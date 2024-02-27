import { NextRequest, NextResponse } from 'next/server'
import { EnumToken } from 'service/auth/auth-token.service'

export async function middleware(req: NextRequest, res: NextResponse) {
	const { url, cookies } = req
	const refreshToken = cookies.get(EnumToken.REFRESH_TOKEN)?.value

	const isAuthPage = url.includes('/signIn')

	if (isAuthPage && refreshToken) {
		return NextResponse.redirect(new URL('/myprofile/profile', url))
	}

	if (isAuthPage) {
		return NextResponse.next()
	}

	if (!refreshToken) {
		return NextResponse.redirect(new URL('/signIn', req.url))
	}

	return
}

export const config = {
	matcher: ['/signIn/:path', '/Register'],
}
