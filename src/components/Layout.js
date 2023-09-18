import { Inter } from "next/font/google"
import Header from "./Header"
import Footer from "./Footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export default function AppLayout({ children }) {
  return (
    <div className={`${inter.variable} font-sans min-h-screen flex flex-col`}>
      <Header />
      <main className="flex-grow bg-gray-100">{children}</main>
      <Footer />
    </div>
  )
}
