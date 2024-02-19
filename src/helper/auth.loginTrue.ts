import { authOptions } from 'lib/auth'
import { getServerSession } from 'next-auth'
import { UserService } from 'service/user.service.ts/user.service'

const checkAndResvonseAuthProfileforServer = async () => {
	const session = await getServerSession(authOptions)
	if (session) {
		const profile = await UserService.getMyProfile()
		return profile
	}
	return null
}

export default checkAndResvonseAuthProfileforServer
