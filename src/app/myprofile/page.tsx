import Image from 'next/image'
import Link from 'next/link'
import LogOut from './component/logOut'

async function MyProfile({ activeLabel }: { activeLabel: string }) {
	return (
		<div className="hidden lg:block w-[14.75rem] p-[1.5rem] h-[100] bg-gradient-to-t from-rose to-transparent text-base font-semibold height-[1.2rem] font-Manrope">
			<ul className="flex flex-col gap-[0.88rem]">
				<li>
					<Link
						href="/myprofile/favorites"
						className={`flex gap-[1rem] py-[1rem] px-[0.62rem] hover:bg-orange hover:text-[#fff] rounded-[0.5rem] transition ${
							activeLabel === 'reserv' && 'bg-orange text-[#fff]'
						}`}
					>
						<span>
							<Image
								src="/header/user.svg"
								width="24"
								height="24"
								alt="user"
								className="fill-[red]"
							/>
						</span>
						<span>Favorites</span>
					</Link>
				</li>
				<li>
					<Link
						href="/myprofile/reservations"
						className={`flex gap-[1rem] py-[1rem] px-[0.62rem] hover:bg-orange hover:text-[#fff] rounded-[0.5rem] transition ${
							activeLabel === 'favorite' && 'bg-orange text-[#fff]'
						}`}
					>
						<span>
							<Image
								src="/header/user.svg"
								width="24"
								height="24"
								alt="user"
								className="fill-[red]"
							/>
						</span>
						<span>My reservation</span>
					</Link>
				</li>
				<li>
					<Link
						href="/myprofile/chat"
						className={`flex gap-[1rem] py-[1rem] px-[0.62rem] hover:bg-orange hover:text-[#fff] rounded-[0.5rem] transition ${
							activeLabel === 'chat' && 'bg-orange text-[#fff]'
						}`}
					>
						<span>
							<Image
								src="/header/user.svg"
								width="24"
								height="24"
								alt="user"
								className="fill-[red]"
							/>
						</span>
						<span>Chat</span>
					</Link>
				</li>
				<li>
					<Link
						href="/myprofile/support"
						className={`flex gap-[1rem] py-[1rem] px-[0.62rem] hover:bg-orange hover:text-[#fff] rounded-[0.5rem] transition ${
							activeLabel === 'support' && 'bg-orange text-[#fff]'
						}`}
					>
						<span>
							<Image
								src="/header/user.svg"
								width="24"
								height="24"
								alt="user"
								className="fill-[red]"
							/>
						</span>
						<span>Support</span>
					</Link>
				</li>
				<li>
					<Link
						href="/myprofile/profile"
						className={`flex gap-[1rem] py-[1rem] px-[0.62rem] hover:bg-orange hover:text-[#fff] rounded-[0.5rem] transition ${
							activeLabel === 'profile' && 'bg-orange text-[#fff]'
						}`}
					>
						<span>
							<Image
								src="/header/user.svg"
								width="24"
								height="24"
								alt="user"
								className="fill-[red]"
							/>
						</span>
						<span>My profile</span>
					</Link>
				</li>
				<li>
					<Link
						href="/myprofile/notification"
						className={`flex gap-[1rem] py-[1rem] px-[0.62rem] hover:bg-orange hover:text-[#fff] rounded-[0.5rem] transition ${
							activeLabel === 'notification' && 'bg-orange text-[#fff]'
						}`}
					>
						<span>
							<Image
								src="/header/user.svg"
								width="24"
								height="24"
								alt="user"
								className="fill-[red]"
							/>
						</span>
						<span>Notification</span>
						<span className="bg-[#FACA15] w-[1rem] h-[1rem] text-xs font-medium font-Inter text-center rounded-[100%]">
							2
						</span>
					</Link>
				</li>
				<li className="w-[100%] h-[1px] bg-[#E5E7EB]"></li>
				<LogOut />
			</ul>
		</div>
	)
}

export default MyProfile
