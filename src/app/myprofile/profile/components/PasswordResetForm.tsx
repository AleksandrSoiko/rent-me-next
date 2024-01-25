'use client'
import { btnHoverOrange } from '../../../page'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { ErrorMessageText } from './SendFormUser'
import useAxiosPost from 'hooks/useAxios'
import 'toastr/build/toastr.css'
import toastr from 'toastr'
import { useEffect } from 'react'

const validationSchema = Yup.object().shape({
	currPassword: Yup.string()
		.min(6, 'Too Short password!')
		.max(35, 'Too Long password!')
		.required('Password is required'),
	newPass: Yup.string()
		.min(6, 'Too Short new password!')
		.max(35, 'Too Long new password!')
		.required('New password is required'),
	confNewPass: Yup.string()
		.min(6, 'Too Short Confirm new password!')
		.max(35, 'Too Long Confirm new password!')
		.required('Confirm new password is required'),
})

interface FormValues {
	currPassword: string
	newPass: string
	confNewPass: string
}

export const styleInputProfile = (
	formikError: string | undefined,
	formikTouch: undefined | boolean
) => {
	return `px-[1rem] py-[0.75rem] rounded-[0.625rem] w-[100%] ${
		formikError && formikTouch ? 'bg-[#ffe3e3]' : 'bg-blue1'
	} `
}

export const PasswordResetForm: React.FC = () => {
	const { data, loading, error, fetchAxios } = useAxiosPost()

	const formik = useFormik<FormValues>({
		initialValues: {
			currPassword: '',
			newPass: '',
			confNewPass: '',
		},
		validationSchema: validationSchema,
		onSubmit: async (values) => {
			if (formik.values.newPass === formik.values.confNewPass) {
				await fetchAxios({
					url: '/users/update/password',
					method: 'PUT',
					body: { password: values.currPassword, newPassword: values.newPass },
				})
			}
		},
	})

	useEffect(() => {
		if (error) {
			toastr.error(error)
		} else if (data) {
			formik.setFieldValue('currPassword', '')
			formik.setFieldValue('newPass', '')
			formik.setFieldValue('confNewPass', '')
			toastr.success('You successfully change password')
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data, error])

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target
		formik.setFieldValue(name, value)
	}

	return (
		<form
			className="my-[1.5rem] flex flex-col gap-[1.5rem]"
			onSubmit={formik.handleSubmit}
		>
			<ul className="flex flex-col gap-[1.5rem]">
				<li>
					<label htmlFor="" className="flex gap-[1.5rem] items-center relative">
						<p className="block w-[12.5rem] text-[0.875rem] max-lg:hidden">
							Current password
						</p>
						<input
							name="currPassword"
							required
							type="password"
							placeholder=" Current password"
							className={styleInputProfile(
								formik.errors.currPassword,
								formik.touched.currPassword
							)}
							onChange={handleInputChange}
							onBlur={formik.handleBlur}
							value={formik.values.currPassword}
						/>
						{formik.errors.currPassword &&
							formik.touched.currPassword &&
							ErrorMessageText(formik.errors.currPassword)}
					</label>
				</li>
				<li>
					<label htmlFor="" className="flex gap-[1.5rem] items-center relative">
						<p className="block w-[12.5rem] text-[0.875rem] max-lg:hidden">
							New password
						</p>
						<input
							name="newPass"
							required
							type="password"
							placeholder="New password"
							className={styleInputProfile(
								formik.errors.newPass,
								formik.touched.newPass
							)}
							onChange={handleInputChange}
							onBlur={formik.handleBlur}
							value={formik.values.newPass}
						/>
						{formik.errors.newPass &&
							formik.touched.newPass &&
							ErrorMessageText(formik.errors.newPass)}
					</label>
				</li>
				<li>
					<label htmlFor="" className="flex gap-[1.5rem] items-center relative">
						<p className="block w-[12.5rem] text-[0.875rem] max-lg:hidden">
							Confirm new password
						</p>
						<input
							name="confNewPass"
							required
							type="password"
							placeholder="  Confirm new password"
							className={
								formik.touched.confNewPass &&
								formik.values.newPass !== formik.values.confNewPass
									? styleInputProfile(
											formik.errors.confNewPass,
											formik.touched.confNewPass
										)
									: styleInputProfile('', true)
							}
							onChange={handleInputChange}
							onBlur={formik.handleBlur}
							value={formik.values.confNewPass}
						/>
						{formik.values.newPass !== formik.values.confNewPass &&
							ErrorMessageText('Passwords do not match')}
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
