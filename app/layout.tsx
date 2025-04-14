'use client'

import { usePathname } from 'next/navigation'
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
  const pathname = usePathname()

  const getActiveTab = (): "accueil" | "tirages" | "quiz" | "astres" | "journal" => {
    if (pathname.startsWith('/tirages')) return 'tirages'
    if (pathname.startsWith('/quiz')) return 'quiz'
    if (pathname.startsWith('/astres')) return 'astres'
    if (pathname.startsWith('/journal')) return 'journal'
    return 'accueil'
  }

  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col">
        <main className="flex-1">{children}</main>
        <BottomNavigation activeTab={getActiveTab()} />
      </body>
    </html>
  )
}
