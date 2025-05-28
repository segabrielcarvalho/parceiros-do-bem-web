import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['200', '300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    template: '%s - Parceiros do Bem',
    default: 'Parceiros do Bem',
  },
  description:
    'Conecte-se a oportunidades de voluntariado! O Parceiros do Bem é a plataforma que une ONGs, eventos e voluntários em todo o Brasil, facilitando o engajamento social, o match inteligente e a gestão automatizada de ações solidárias. Encontre, participe e transforme vidas.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className={`${inter.variable} text-zinc-950 antialiased lg:bg-zinc-100 h-full`}>
      <body className="h-full">{children}</body>
    </html>
  )
}
