import './globals.css'
import Header from './components/header'
import Footer from './components/footer'
import { Providers } from './providers'

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head />
			<body>
				<Providers>
					<main className="min-w-min bg-white ">
						<Header />
						{children}
						<Footer />
					</main>
				</Providers>
			</body>
		</html>
	)
}
