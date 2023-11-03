import RegisterForm from './components/RegisterForm'
import Head from './head'

const Register = () => {
    return (
        <section
            className="flex flex-col gap-6 py-12 lg:py-[7.5rem] items-center w-[22.5rem] px-4 lg:w-[25.75rem] mx-[auto]"
        >
            <Head/>
            <h2 className="font-Comfortaa text-2xl leading-[1.8rem] text-center">
                Register to save the properties and much more
            </h2>
            <div className="flex gap-5 justify-center">
                <button
                    className="px-8 py-4 whitespace-nowrap text-center border-[1px] border-orange text-ellipsis font-Comfortaa text-base font-bold w-[9.625rem] lg:w-[11.25rem] rounded-[0.625rem]"
                >
                    Google
                </button>
                <button
                    className="px-8 py-4 whitespace-nowrap text-center border-[1px] border-orange text-ellipsis font-Comfortaa text-base font-bold w-[9.625rem] lg:w-[11.25rem] rounded-[0.625rem]"
                >
                    Facebook
                </button>
            </div>
            <p className="font-Manrope text-sm">or sign in with your email</p>
            <RegisterForm />
            <p className="font-Manrope text-base">
                By registering you accept our 
                <span className="font-medium underline">Terms of Use</span> and 
                <span className="font-medium underline">Privacy Policy</span>
            </p>
        </section>
    )
}

export default Register