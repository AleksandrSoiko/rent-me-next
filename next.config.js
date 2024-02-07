/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	async rewrites() {
		return [
			{
				source: '/uploads/:path*',
				destination: 'http://localhost:4000/uploads/:path*',
			},
		]
	},
	transpilePackages: ['three'],
}

module.exports = nextConfig
