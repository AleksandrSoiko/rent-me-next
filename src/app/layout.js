import './globals.css'
import { NextAuthProvider } from './Provider'
import Header from './components/header'
import Footer from './components/footer'

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head />
			<body>
				<NextAuthProvider>
					<main className="min-w-min bg-white ">
						<Header />
						{children}
						<Footer />
					</main>
				</NextAuthProvider>
			</body>
		</html>
	)
}
