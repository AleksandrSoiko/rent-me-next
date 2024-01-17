import HowItWorks from './components/howItWork'
import User from './components/User'
import { authOptions } from '../../../lib/auth'
import YourProperties from './components/YourProperties'
import { getServerSession } from 'next-auth'
import { notFound } from 'next/navigation'
import axios from 'axios'

const AccountCustomer = async ({}) => {
	const session = await getServerSession(authOptions)
	if (!session) notFound()
	let profile

	if (session && session.user?.name) {
		profile = {
			firstname: session.user.name,
			email: session.user.email,
		}
	} else if (session.user && !session.user?.name) {
		try {
			const res = await axios.get('http://localhost:4000/api/users/profile', {
				headers: {
					Authorization: `Bearer ${session.user?.accessToken}`,
				},
			})

			profile = res.data
		} catch (error) {
			console.error('Error fetching post:', error)
		}
	}

	return (
		<section className="px-4 mx-[auto] lg:w-[73.5rem] flex flex-col items-center">
			<User profileData={profile} />
			<div className="my-12 lg:my-20">
				<p className="font-Comfortaa text-2xl leading-[1.8rem] lg:text-[3.125rem] lg:leading-[3.75rem] mb-10 text-center">
					How it works
				</p>
				<HowItWorks />
			</div>
			<div className="py-12">
				<p className="font-Comfortaa text-2xl leading-[1.8rem] lg:text-[3.125rem] lg:leading-[3.75rem]">
					Your properties
				</p>
				<ul>
					<YourProperties />
				</ul>
			</div>
		</section>
	)
}

export default AccountCustomer
