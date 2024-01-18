'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { btnHoverOrange } from '../../page'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

// Form component for user authorization
const AuthorizationForm = () => {
	// State hidden for password
	const [passHidden, setPassHidden] = useState(true)
	// State, input-email for submit
	const [email, setEmail] = useState('')
	// State, input-password for submit
	const [password, setPassword] = useState('')
	const route = useRouter()

	const handleSignIn = async (e) => {
		e.preventDefault()
		// Виклик функції signIn для авторизації
		const result = await signIn('credentials', {
			redirect: false,
			email: email,
			password: password,
		})

		if (result.error) {
			console.error('Authentication error:', result.error)
		} else {
			route.push('/myprofile/profile')
		}
	}

	return (
		<form
			action=""
			className="flex flex-col gap-6 w-[100%] relative"
			onSubmit={handleSignIn}
		>
			<input
				onChange={(e) => setEmail(e.target.value)}
				value={email}
				type="email"
				placeholder="Email*"
				className="w-[100%] py-4 px-4 tex-base font-medium border-[1px] border-[#000] rounded-[0.5rem]"
			/>
			<input
				onChange={(e) => setPassword(e.target.value)}
				value={password}
				type={passHidden ? 'password' : 'text'}
				placeholder="Password*"
				className="w-[100%] py-4 px-4 tex-base font-medium border-[1px] border-[#000] rounded-[0.5rem]"
			/>
			<button type="button" onClick={() => setPassHidden(!passHidden)}>
				{' '}
				<Image
					src="/eye.svg"
					width="32"
					height="23"
					alt="eye"
					className="absolute top-[100px] right-4"
				/>
			</button>
			<Link
				href="signIn/ForgotPassword"
				className="font-Manrope font-medium underline text-base  hover:text-orange"
			>
				Forgot password
			</Link>
			<button
				type="submit"
				className={`${btnHoverOrange} px-8 py-4 whitespace-nowrap text-center text-[#fff] bg-orange text-ellipsis font-Comfortaa text-base font-bold w-[100%] rounded-[0.625rem]`}
			>
				Sign In
			</button>
			<p className="font-Manrope text-base text-center">
				No account? 
				<Link
					href="Register"
					className="font-medium underline hover:text-orange"
				>
					Register
				</Link>
			</p>
		</form>
	)
}

export default AuthorizationForm
