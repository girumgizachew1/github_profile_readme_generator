import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Github Profile Readme Generator',
  description: 'GitHub Profile Readme Generator is a powerful tool designed to simplify the process of creating a captivating and informative profile README for your GitHub account. With this generator, you can effortlessly generate a professional-looking README file that highlights your skills, projects, and contributions in a visually appealing manner.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
