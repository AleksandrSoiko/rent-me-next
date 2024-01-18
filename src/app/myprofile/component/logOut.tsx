'use client'
import { signOut } from 'next-auth/react'
import Image from 'next/image'

const LogOut = () => {
	const handleSignOut = async () => {
		await signOut({ callbackUrl: '/' })
	}
	return (
		<li>
			<button
				onClick={handleSignOut}
				type="button"
				className="flex gap-[1rem] py-[1rem] px-[0.62rem] hover:bg-orange hover:text-[#fff] rounded-[0.5rem] transition w-[100%]"
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
