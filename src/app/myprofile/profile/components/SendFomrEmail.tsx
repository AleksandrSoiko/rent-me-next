'use client'
import { useEffect, useState } from 'react'
import { btnHoverOrange } from '../../../page'
import useAxiosPost from 'hooks/useAxios'
import 'toastr/build/toastr.css'
import toastr from 'toastr'

export const SendFomrEmail = () => {
	const { data, loading, error, fetchAxios } = useAxiosPost()
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	const sendChangeEmail = async (e) => {
		e.preventDefault()
		await fetchAxios({
			url: '/users/update/email',
			method: 'PUT',
			body: { email, password },
		})
	}

	useEffect(() => {
		if (error) {
			toastr.error(error)
		} else if (data) {
			setEmail('')
			setPassword('')
			toastr.success('You successfully register')
		}
	}, [error, data])

	return (
		<form
			onSubmit={sendChangeEmail}
			className="my-[1.5rem] flex flex-col gap-[1.5rem]"
			id="Sign-in-Method"
		>
			<ul className="flex flex-col gap-[1.5rem]">
				<li>
					<label htmlFor="" className="flex gap-[1.5rem] items-center">
						<p className="block w-[12.5rem] text-[0.875rem] max-lg:hidden">
							Enter new email
						</p>
						<input
							required
							type="email"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="bg-blue1 px-[1rem] py-[0.75rem] rounded-[0.625rem] w-[100%]"
						/>
					</label>
				</li>
				<li>
					<label htmlFor="" className="flex gap-[1.5rem] items-center">
						<p className="block w-[12.5rem] text-[0.875rem] max-lg:hidden">
							Confirm password
						</p>
						<input
							value={password}
							required
							type="password"
							placeholder="password"
							onChange={(e) => setPassword(e.target.value)}
							className="bg-blue1 px-[1rem] py-[0.75rem] rounded-[0.625rem] w-[100%]"
						/>
					</label>
				</li>
			</ul>
			<div className="flex justify-end">
				<button
					type="submit"
					className={`${btnHoverOrange} px-2 py-[0.625rem]  text-[#fff] whitespace-nowrap text-center bg-orange text-ellipsis font-Comfortaa text-sm font-semibold w-[10rem] rounded-[0.625rem]`}
				>
					Save
				</button>
			</div>
		</form>
	)
}
