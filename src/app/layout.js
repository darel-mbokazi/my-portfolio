import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Darel Mbokazi | Full-Stack JavaScript Developer',
  description:
    'Full-Stack JavaScript Developer skilled in React.js, Next.js, Node.js, PostgreSQL, and AWS. Based in South Africa.',
  keywords: [
    'Full-Stack Developer',
    'JavaScript Developer',
    'React.js Developer',
    'Node.js Developer',
    'Next.js Developer',
    'Web Developer South Africa',
    'PostgreSQL',
    'AWS',
  ],
  openGraph: {
    title: 'Darel Mbokazi | Full-Stack JavaScript Developer',
    description:
      'Portfolio of Siyabonga Darel Mbokazi - Full-Stack JavaScript Developer (React, Next.js, Node.js, PostgreSQL, AWS).',
    url: 'https://darel-portfolio.vercel.app',
    siteName: 'Darel Mbokazi Portfolio',
    locale: 'en_ZA',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
