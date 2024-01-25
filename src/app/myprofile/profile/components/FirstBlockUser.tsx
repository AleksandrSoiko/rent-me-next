'use client'
import Link from 'next/link'
import { btnHoverOrangeReverse } from '../../../page'
import Image from 'next/image'
import { IUser } from 'types/user.types'
import useAxiosPost from 'hooks/useAxios'
import 'toastr/build/toastr.css'
import toastr from 'toastr'
import { useEffect } from 'react'

export const FirstBlockUser: React.FC<{ profile: IUser }> = ({ profile }) => {
	const {
		data: data1,
		loading: loading1,
		error: error1,
		fetchAxios: fetchAxios1,
	} = useAxiosPost()
	const {
		data: data2,
		loading: loading2,
		error: error2,
		fetchAxios: fetchAxios2,
	} = useAxiosPost()

	const handleFileChange = async (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const file = event.target.files?.[0] || null

		if (file) {
			const formData = new FormData()
			formData.append('photo', file)
			try {
				await fetchAxios1({
					url: '/files',
					method: 'POST',
					body: formData,
				})
			} catch (error) {
				console.error('Error uploading photo', error)
			}
		}
	}

	const deletePhoto = async () => {
		try {
			await fetchAxios2({
				url: '/files',
				method: 'DELETE',
				body: {},
			})
		} catch (error) {
			console.error('Error uploading photo', error)
		}
	}

	useEffect(() => {
		if (error1) {
			toastr.error(error1)
		} else if (data1) {
			toastr.success('You successfully change photo')
			window.location.reload()
		}
		if (error2) {
			toastr.error(error2)
		} else if (data2) {
			toastr.success('You successfully delete photo')
			window.location.reload()
		}
	}, [error1, data1, error2, data2])

	return (
		<div className="p-[1.5rem] w-[17.4rem] max-lg:mx-[auto]">
			<div className="flex flex-col gap-[1rem] items-center">
				<Image
					src={profile.foto || '/nofoto.png'}
					width="170"
					height="170"
					alt="avatar"
					className="rounded-[100%]"
				/>
				<label
					htmlFor="addphoto"
					className={`${btnHoverOrangeReverse} px-2 py-[0.625rem] text-[#000] whitespace-nowrap text-center bg-white border-[1px] border-orange text-ellipsis font-Comfortaa text-sm font-semibold w-[100%] rounded-[0.625rem]`}
				>
					Add foto+
					<input id="addphoto" type="file" onChange={handleFileChange} />
				</label>
				<button
					onClick={deletePhoto}
					className="text-xs font-medium height-[1.125rem] font-Inter hover:text-orange"
				>
					Delete photo
				</button>
			</div>
			<div className="h-[1px] w-[100%] bg-blue1 my-[1.5rem] max-lg:hidden"></div>
			<ul className="font-semibold text-base height-[1.2rem] font-Manrope flex flex-col gap-[1rem] max-lg:hidden">
				<li className="hover:text-orange">
					<Link href="#contactInformation">Contact information</Link>
				</li>
				<li className="hover:text-orange">
					<Link href="#Sign-in-Method">Sign-in Method</Link>
				</li>
				<li className="hover:text-orange">
					<Link href="#Payment-methods">Payment methods</Link>
				</li>
				<li className="hover:text-orange">
					<Link href="#Notifications">Email Notifications</Link>
				</li>
				<li className="hover:text-orange">
					<Link href="#deleteaccount">Delete Account</Link>
				</li>
			</ul>
		</div>
	)
}
