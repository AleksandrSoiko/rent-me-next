import './globals.css'
import Header from './components/header'
import Footer from './components/footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />

      <body>
        <main className="min-w-min bg-white">
          <Header />
          {children}
          <Footer />
        </main></body>
    </html>
  )
}
