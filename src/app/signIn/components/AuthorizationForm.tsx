'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { btnHoverOrange } from '../../page'
import { useRouter } from 'next/navigation'
import 'toastr/build/toastr.css'
import toastr from 'toastr'
import { useMutation } from 'react-query'
import AuthService from 'service/auth/auth.service'

// Form component for user authorization
const AuthorizationForm: React.FC = () => {
	// State hidden for password
	const [passHidden, setPassHidden] = useState(true)
	// State, input-email for submit
	const [email, setEmail] = useState('')
	// State, input-password for submit
	const [password, setPassword] = useState('')

	const { push } = useRouter()
	const { mutate, isLoading, error } = useMutation(
		['auth'], // Ключ для цієї мутації
		() => AuthService.main('login', { email, password }), // Функція, яка буде виконуватися при мутації
		{
			onSuccess: () => {
				window.location.reload()
				toastr.success('Successfully login!')
				setEmail('')
				setPassword('')
				push('/')
			},
			onError: () => {
				toastr.error('Login or password invalid')
			},
		}
	)

	const onSubmit = (e) => {
		e.preventDefault()
		mutate()
	}

	return (
		<form className="flex flex-col gap-6 w-[100%] relative" onSubmit={onSubmit}>
			<input
				required
				onChange={(e) => setEmail(e.target.value)}
				value={email}
				type="email"
				placeholder="Email*"
				className="w-[100%] py-4 px-4 tex-base font-medium border-[1px] border-[#000] rounded-[0.5rem]"
			/>
			<input
				required
				onChange={(e) => setPassword(e.target.value)}
				value={password}
				type={passHidden ? 'password' : 'text'}
				placeholder="Password*"
				className="w-[100%] py-4 px-4 tex-base font-medium border-[1px] border-[#000] rounded-[0.5rem]"
			/>
			<button type="button" onClick={() => setPassHidden(!passHidden)}>
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
