import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Projetarmed - Medicina e Segurança do Trabalho',
    template: '%s | Projetarmed',
  },
  description: 'A Projetarmed é uma empresa especializada em saúde e segurança ocupacional, oferecendo soluções completas em medicina do trabalho, engenharia de segurança e gestão ambiental desde 2007.',
  keywords: ['medicina do trabalho', 'segurança do trabalho', 'saúde ocupacional', 'exame toxicológico', 'PCMSO', 'PGR', 'Betim', 'MG'],
  authors: [{ name: 'Projetarmed' }],
  creator: 'Projetarmed',
  metadataBase: new URL('https://projetarmed.com.br'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Projetarmed',
    title: 'Projetarmed - Medicina e Segurança do Trabalho',
    description: 'Soluções completas em saúde e segurança ocupacional desde 2007.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport = {
  themeColor: '#1e3a5f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
