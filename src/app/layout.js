import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Darel Mbokazi | Full-Stack Web Developer',
  description:
    'Full-Stack Web Developer skilled in ASP.NET Core, React.js, Node.js, SQL, and AWS. Based in South Africa.',
  keywords: [
    'Full-Stack Developer',
    'Web Developer South Africa',
    'ASP.NET Core',
    'React.js',
    'Node.js',
    'SQL',
    'AWS',
  ],
  openGraph: {
    title: 'Darel Mbokazi | Full-Stack Web Developer',
    description:
      'Portfolio of Siyabonga Darel Mbokazi - Full-Stack Developer (ASP.NET Core, React, SQL, AWS).',
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
