import type { Metadata } from 'next'
import './globals.css'
import BottomNavigation from '@/components/bottom-navigation'

export const metadata: Metadata = {
  title: 'Wakan',
  description: 'Application spirituelle quotidienne',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col">
        <main className="flex-1">{children}</main>
        <BottomNavigation activeTab="accueil" />
      </body>
    </html>
  )
}
