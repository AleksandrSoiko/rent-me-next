'use client'

import 'toastr/build/toastr.css'
import toastr from 'toastr'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { btnHoverOrange } from '../../page'
import useProfile from 'hooks/useAxios'
import { useRouter } from 'next/navigation'

// А form component for register
const RegisterForm = () => {
	const route = useRouter()
	const { data, loading, error, fetchAxios } = useProfile()
	// State hidden for password
	const [passHidden, setPassHidden] = useState<boolean>(true)
	// State, input-email for submit
	const [email, setEmail] = useState<string>('')
	// State, input-password for submit
	const [password, setPassword] = useState('')
	// State, input-name for submit
	const [name, setName] = useState('')

	const sendChangeEmail = async (e) => {
		e.preventDefault()
		await fetchAxios({
			url: '/auth/register/',
			method: 'POST',
			body: {
				email,
				password,
				fistname: name,
			},
		})
	}

	useEffect(() => {
		if (error) {
			toastr.error(error)
		} else if (data) {
			setEmail('')
			setPassword('')
			setName('')
			route.push('/')
			toastr.success('Email has been successfully changed')
		}
	}, [error, data, route])

	return (
		<form className="flex flex-col gap-6 w-[100%] relative">
			<input
				onChange={(e) => setName(e.target.value)}
				value={name}
				type="text"
				placeholder="Name*"
				className="w-[100%] py-4 px-4 tex-base font-medium border-[1px] border-[#000] rounded-[0.5rem]"
			/>
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
				<Image
					src="/eye.svg"
					width="32"
					height="23"
					alt="eye"
					className="absolute top-[180px] right-4"
				/>
			</button>
			<button
				onClick={sendChangeEmail}
				className={`${btnHoverOrange} px-8 py-4 whitespace-nowrap text-center text-[#fff] bg-orange text-ellipsis font-Comfortaa text-base font-bold w-[100%] rounded-[0.625rem]`}
			>
				Register
			</button>
			<p className="font-Manrope text-base text-center">
				Already registered? 
				<Link
					href="/signIn"
					className="font-medium underline hover:text-orange"
				>
					Sign in
				</Link>
			</p>
		</form>
	)
}
export default RegisterForm
