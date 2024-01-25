import SavedProperties from './components/SavedProperties'
import HowItWorks from './components/howItWork'
import User from './components/User'
import { btnHoverOrange, btnHoverOrangeReverse } from '../../../page'

const AccountCustomer = () => {
	return (
		<section className="px-4 mx-[auto] lg:w-[73.5rem]  flex flex-col items-center">
			<User />
			<div className="my-12 lg:my-20">
				<p className="font-Comfortaa text-2xl leading-[1.8rem] lg:text-[3.125rem] lg:leading-[3.75rem] mb-10 text-center">
					How it works
				</p>
				<HowItWorks />
			</div>
			<div className="py-12">
				<p className="font-Comfortaa text-2xl leading-[1.8rem] lg:text-[3.125rem] lg:leading-[3.75rem]">
					Saved properties
				</p>
				<SavedProperties />
				<div className="flex gap-4 max-md:justify-center">
					<button
						className={`${btnHoverOrange} w-[9.75rem] lg:w-[11.25rem] px-2 py-[0.625rem] text-[#fff] whitespace-nowrap text-center bg-orange text-ellipsis font-Comfortaa text-sm font-semibold w-[8.75rem] rounded-[0.625rem]`}
					>
						Email
					</button>
					<button
						className={`${btnHoverOrangeReverse} w-[9.75rem] lg:w-[11.25rem] px-8 py-[0.625rem] lg:py-4 whitespace-nowrap text-center border-[1px] border-orange text-ellipsis font-Comfortaa text-sm font-semibold w-[8.75rem] rounded-[0.625rem]`}
					>
						Call
					</button>
				</div>
			</div>
		</section>
	)
}

export default AccountCustomer
