'use client'
import { useEffect, useState } from 'react'
import { btnHoverOrange } from '../../../page'
import useProfile from 'hooks/useAxios'
import 'toastr/build/toastr.css'
import toastr from 'toastr'

const SupportForm = () => {
	const { data, loading, error, fetchAxios } = useProfile()
	const [questionText, setQuestionText] = useState('')
	const [userEmail, setUserEmail] = useState('')

	const sendSupportQuestion = async () => {
		if (userEmail && questionText) {
			await fetchAxios({
				url: '/support/register',
				method: 'POST',
				body: { text: questionText, email: userEmail },
			})
		}
	}

	useEffect(() => {
		if (data) {
			toastr.success('Your support letter has been sent successfully')
			setQuestionText('')
			setUserEmail('')
		}
		if (error) {
			toastr.success('An error occurred, please try again later')
		}
	}, [data, error])

	return (
		<div>
			<h2 className="text-center text-[1.25rem] lg:text-[2rem] lg:font-semibold mb-[1.5rem] height-[2.4rem]">
				Welcome to the Help Center !
			</h2>
			<h3 className="text-center text-[1rem] lg:text-[1.5rem] font-semibold height-[1.8rem] mb-[1.5rem]">
				Search and Find Your Perfect Home with Us
			</h3>
			<form
				className="border-[1px] border-blue1 p-[1.5rem]"
				onSubmit={sendSupportQuestion}
			>
				<p className="text-[1rem] lg:font-semibold height-[1.8rem]">
					Feel free to ask your question or describe your situation, and ll be
					happy to assist you.
				</p>
				<div className="my-[1.5rem] flex flex-col gap-[1.5rem]">
					<label className="flex gap-[1.5rem]">
						<p className="block w-[12.5rem] text-[0.875rem] max-lg:hidden">
							Write down your question
						</p>
						<textarea
							required
							value={questionText}
							cols={30}
							rows={6}
							className="bg-blue1 px-[1rem] py-[0.75rem] rounded-[0.625rem] w-[100%]"
							placeholder="Text"
							onChange={(e) => setQuestionText(e.target.value)}
						></textarea>
					</label>
					<label htmlFor="emailSupp" className="flex gap-[1.5rem]">
						<p className="block w-[12.5rem] text-[0.875rem] max-lg:hidden">
							Your email
						</p>
						<input
							required
							value={userEmail}
							type="email"
							placeholder="Email"
							id="emailSupp"
							className="bg-blue1 px-[1rem] py-[0.75rem] rounded-[0.625rem] w-[100%]"
							onChange={(e) => setUserEmail(e.target.value)}
						/>
					</label>
				</div>
				<div className="flex justify-end">
					<button
						className={`${btnHoverOrange} px-2 py-[0.625rem] text-[#fff] whitespace-nowrap text-center bg-orange text-ellipsis font-Comfortaa text-sm font-semibold w-[8.75rem] rounded-[0.625rem]`}
					>
						Send
					</button>
				</div>
			</form>
		</div>
	)
}

export default SupportForm
