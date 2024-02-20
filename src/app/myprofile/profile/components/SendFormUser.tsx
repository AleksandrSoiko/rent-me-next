'use client'
import { useFormik } from 'formik'
import { btnHoverOrange } from '../../../page'
import * as Yup from 'yup'
import { IUser, formikVal } from 'types/user.types'
import useAxiosPost from 'hooks/useAxios'
import { useEffect } from 'react'
import 'toastr/build/toastr.css'
import toastr from 'toastr'

const validationSchema = Yup.object().shape({
	firstname: Yup.string()
		.min(2, 'Too Short First Name!')
		.max(35, 'Too Long First Name!')
		.required('First Name is required'),
	lastname: Yup.string()
		.min(2, 'Too Short Last Name!')
		.max(35, 'Too Long Last Name!')
		.required('Last Name is required'),
	email: Yup.string().email('Invalid email').required('Email is required'),
	phonenumber: Yup.string()
		.min(14, 'Too Short Phone number!')
		.max(14, 'Too Long Phone number!'),
	age: Yup.date().required('Your age is required'),
	city: Yup.string().required('City is required'),
	country: Yup.string()
		.min(2, 'Too Short Country Name!')
		.max(50, 'Too Long Country Name!')
		.required('Country is required'),
	address: Yup.string()
		.min(2, 'Too Short Address Name!')
		.max(50, 'Too Long Address Name!'),
})

export const styleInputProfile = (
	formikError: string | undefined,
	formikTouch: undefined | boolean
) => {
	return `px-[1rem] py-[0.75rem] rounded-[0.625rem] w-[100%] ${
		formikError && formikTouch ? 'bg-[#ffe3e3]' : 'bg-blue1'
	} `
}

export const ErrorMessageText = (text: string) => {
	return (
		<span className="text-xs text-[red] absolute top-[15px] right-[20px]">
			{text}
		</span>
	)
}

export const SendFormUser: React.FC<{ profile: IUser }> = ({ profile }) => {
	const { data, loading, error, fetchAxios } = useAxiosPost()

	const formik = useFormik<formikVal>({
		initialValues: {
			firstname: profile.firstname,
			lastname: profile.lastname || '',
			phonenumber: profile.phonenumber || '',
			age: profile.age,
			country: profile.country || '',
			city: profile.city || '',
			address: profile.address || '',
		},
		// validationSchema: validationSchema,
		onSubmit: async (values) => {
			await fetchAxios({
				url: '/users/update/profile',
				method: 'PUT',
				body: values,
			})
		},
	})

	useEffect(() => {
		if (error) {
			toastr.error(error)
		} else if (data) {
			toastr.success('Your contact information has been successfully changed')
		}
	}, [error, data])

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target
		formik.setFieldValue(name, value)
	}

	return (
		<form
			onSubmit={formik.handleSubmit}
			className="my-[1.5rem] flex flex-col gap-[1.5rem]"
			id="contactInformation"
		>
			<ul className="flex flex-col gap-[1.5rem]">
				<li>
					<label htmlFor="firstname" className="flex gap-[1.5rem] items-center">
						<p className="block w-[12.5rem] text-[0.875rem] max-lg:hidden">
							First Name<span className="text-[red]">*</span>
						</p>
						<div className="flex flex-col w-[100%] relative">
							<input
								required
								type="text"
								placeholder="Name"
								name="firstname"
								id="firstname"
								className={styleInputProfile(
									formik.errors.firstname,
									formik.touched.firstname
								)}
								onChange={handleInputChange}
								onBlur={formik.handleBlur}
								value={formik.values.firstname}
							/>
							{formik.errors.firstname &&
								formik.touched.firstname &&
								ErrorMessageText(formik.errors.firstname)}
						</div>
					</label>
				</li>
				<li>
					<label htmlFor="lastname" className="flex gap-[1.5rem] items-center">
						<p className="block w-[12.5rem] text-[0.875rem] max-lg:hidden">
							Last Name<span className="text-[red]">*</span>
						</p>
						<div className="flex flex-col w-[100%] relative">
							<input
								required
								type="text"
								placeholder="Last Name"
								id="lastname"
								name="lastname"
								className={styleInputProfile(
									formik.errors.lastname,
									formik.touched.lastname
								)}
								onChange={handleInputChange}
								onBlur={formik.handleBlur}
								value={formik.values.lastname}
							/>
							{formik.errors.lastname &&
								formik.touched.lastname &&
								ErrorMessageText(formik.errors.lastname)}
						</div>
					</label>
				</li>
				<li>
					<label htmlFor="email" className="flex gap-[1.5rem] items-center">
						<p className="block w-[12.5rem] text-[0.875rem] max-lg:hidden">
							Your email
						</p>
						<div className="flex flex-col w-[100%] relative">
							<input
								disabled
								required
								type="email"
								placeholder="Email"
								id="email"
								name="email"
								className={`${styleInputProfile(
									formik.errors.email,
									formik.touched.email
								)} bg-[#cfd6d8]`}
								value={profile.email}
							/>
						</div>
					</label>
				</li>
				<li>
					<label htmlFor="phone" className="flex gap-[1.5rem] items-center">
						<p className="block w-[12.5rem] text-[0.875rem] max-lg:hidden">
							Phone number<span className="text-[red]">*</span>
						</p>
						<div className="flex flex-col w-[100%] relative">
							<input
								required
								type="tel"
								placeholder="Phone number"
								id="phonenumber"
								name="phonenumber"
								className={styleInputProfile(
									formik.errors.phonenumber,
									formik.touched.phonenumber
								)}
								onChange={handleInputChange}
								onBlur={formik.handleBlur}
								value={formik.values.phonenumber}
							/>
							{formik.errors.phonenumber &&
								formik.touched.phonenumber &&
								ErrorMessageText(formik.errors.phonenumber)}
						</div>
					</label>
				</li>
				<li>
					<label htmlFor="age" className="flex gap-[1.5rem] items-center">
						<p className="block w-[12.5rem] text-[0.875rem] max-lg:hidden">
							Your age<span className="text-[red]">*</span>
						</p>
						<div className="flex flex-col w-[100%] relative">
							<input
								value={formik.values.age}
								required
								type="date"
								placeholder="age"
								id="age"
								name="age"
								className="bg-blue1 px-[1rem] py-[0.75rem] rounded-[0.625rem] w-[100%]"
								onChange={(e) =>
									formik.setFieldValue('age', String(e.target.value))
								}
								onBlur={formik.handleBlur}
							/>
							{formik.errors.age &&
								formik.touched.age &&
								ErrorMessageText('Your age is required')}
						</div>
					</label>
				</li>
				<li>
					<label htmlFor="country" className="flex gap-[1.5rem] items-center">
						<p className="block w-[12.5rem] text-[0.875rem] max-lg:hidden">
							Country<span className="text-[red]">*</span>
						</p>
						<div className="flex flex-col w-[100%] relative">
							<input
								required
								type="text"
								placeholder="Country"
								id="country"
								name="country"
								className={styleInputProfile(
									formik.errors.country,
									formik.touched.country
								)}
								onChange={handleInputChange}
								onBlur={formik.handleBlur}
								value={formik.values.country}
							/>
							{formik.errors.country &&
								formik.touched.country &&
								ErrorMessageText(formik.errors.country)}
						</div>
					</label>
				</li>
				<li>
					<label htmlFor="city" className="flex gap-[1.5rem] items-center">
						<p className="block w-[12.5rem] text-[0.875rem] max-lg:hidden">
							City<span className="text-[red]">*</span>
						</p>
						<div className="flex flex-col w-[100%] relative">
							<input
								required
								type="text"
								placeholder="City"
								id="city"
								name="city"
								className={styleInputProfile(
									formik.errors.city,
									formik.touched.city
								)}
								onChange={handleInputChange}
								onBlur={formik.handleBlur}
								value={formik.values.city}
							/>
							{formik.errors.city &&
								formik.touched.city &&
								ErrorMessageText(formik.errors.city)}
						</div>
					</label>
				</li>
				<li>
					<label htmlFor="address" className="flex gap-[1.5rem] items-center">
						<p className="block w-[12.5rem] text-[0.875rem] max-lg:hidden">
							Address
						</p>
						<div className="flex flex-col w-[100%] relative">
							<input
								type="text"
								placeholder="Address"
								id="address"
								name="address"
								className={styleInputProfile(
									formik.errors.address,
									formik.touched.address
								)}
								onChange={handleInputChange}
								onBlur={formik.handleBlur}
								value={formik.values.address}
							/>
							{formik.errors.address &&
								formik.touched.address &&
								ErrorMessageText(formik.errors.address)}
						</div>
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
