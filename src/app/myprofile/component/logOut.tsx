'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { removeFromStorage } from 'service/auth/auth-token.service'
import { UserService } from 'service/user.service.ts/user.service'
import { toastr } from 'toastr'
import 'toastr/build/toastr.css'
const LogOut = () => {
	const { push } = useRouter()

	const logOut = async () => {
		await UserService.logOut()
		removeFromStorage()
		push('/')
		toastr.error('You have successfully exited')
	}
	return (
		<li>
			<button
				type="button"
				className="flex gap-[1rem] py-[1rem] px-[0.62rem] hover:bg-orange hover:text-[#fff] rounded-[0.5rem] transition w-[100%]"
				onClick={logOut}
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
				<span>Log out</span>
			</button>
		</li>
	)
}
export default LogOut
