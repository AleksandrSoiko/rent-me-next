'use client'
import { useState } from "react"

// А form component for sending a password reset request
const FormForgotPassword = () => {
    // State, input-email for reset password
    const [email, setEmail] = useState('')

    return (
        <form className="flex flex-col gap-6 w-[100%] relative">
            <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email*"
                className="w-[100%] py-4 px-4 tex-base font-medium border-[1px] border-[#000] rounded-[0.5rem]"
            />
            <button
                className="px-8 py-4 whitespace-nowrap text-center text-[#fff] bg-orange text-ellipsis font-Comfortaa text-base font-bold w-[100%] rounded-[0.625rem]"
            >
                Submit
            </button>
        </form>
    )
}

export default FormForgotPassword