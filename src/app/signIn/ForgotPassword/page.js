import FormForgotPassword from './components/FormForgotPassword'
import Head from './head'

// Password recovery page
const ForgotPassword = () => {
    return (
        <section
        className="flex flex-col gap-6 py-12 lg:py-[7.5rem] items-center w-[22.5rem] px-4 lg:w-[25.75rem] mx-[auto]"
        >
            <Head/>
            <h2 className="font-Comfortaa text-xl leading-[1.8rem] text-center">
                Forgotten your password?
            </h2>
            <p className="font-Manrope text-base w-[17.37rem] text-center">
                Enter the email address used to create your account. We’ll send you
                instructions on how to reset the password.
            </p>
            {/* А form component for sending a password reset request */}
            <FormForgotPassword />
        </section>
    )
}

export default ForgotPassword