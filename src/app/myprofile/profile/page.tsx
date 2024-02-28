import { btnHoverOrange } from '../../page'
import MyProfile from '../page'
import DeleteAccount from './components/DeleteAccount'
import EmailNotifications from './components/EmailNotifications'
import { FirstBlockUser } from './components/FirstBlockUser'
import { PasswordResetForm } from './components/PasswordResetForm'
import PaymentMethods from './components/PaymentMethods'
import { SendFomrEmail } from './components/SendFomrEmail'
import { SendFormUser } from './components/SendFormUser'

const MyReservation: React.FC = async () => {
	return (
		<div className="flex flex-col lg:flex-row gap-[1.5rem]  max-w-[1180px] mx-[auto]">
			<MyProfile activeLabel={'profile'} />
			<div className="border-[1px] border-blue1">
				<FirstBlockUser />
			</div>
			<div className="lg:w-[52%] gap-[1.5rem] flex flex-col">
				<div className="border-[1px] border-blue1  p-[1.5rem] ">
					<p className="font-semibold text-base height-[1.2rem] font-Manrope">
						Contact information
					</p>
					<SendFormUser />
				</div>
				<div>
					<div className="border-[1px] border-blue1  p-[1.5rem]">
						<p className="font-semibold text-base height-[1.2rem] font-Manrope">
							Sign-in Method
						</p>
						<SendFomrEmail />
						<PasswordResetForm />
					</div>
				</div>
				<div>
					<div className="border-[1px] border-blue1  p-[1.5rem]">
						<p className="font-semibold text-base height-[1.2rem] font-Manrope">
							Payment methods
						</p>
						<PaymentMethods />
						<PaymentMethods />
						<div className="flex justify-end">
							<button
								className={`${btnHoverOrange} px-2 py-[0.625rem]  text-[#fff] whitespace-nowrap text-center bg-orange text-ellipsis font-Comfortaa text-sm font-semibold w-[10rem] rounded-[0.625rem]`}
							>
								+ Add method
							</button>
						</div>
					</div>
				</div>
				<div>
					<div className="border-[1px] border-blue1  p-[1.5rem]">
						<p className="font-semibold text-base height-[1.2rem] font-Manrope">
							Email Notifications
						</p>
						<EmailNotifications />
					</div>
				</div>
				<div>
					<div className="border-[1px] border-blue1  p-[1.5rem]">
						<p className="font-semibold text-base height-[1.2rem] font-Manrope">
							Delete Account
						</p>
						<DeleteAccount />
					</div>
				</div>
			</div>
		</div>
	)
}

export default MyReservation
