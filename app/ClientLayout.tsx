'use client'

import { usePathname } from 'next/navigation'
import BottomNavigation from '@/components/bottom-navigation'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const getActiveTab = (): "accueil" | "tirages" | "quiz" | "astres" | "journal" => {
    if (pathname.startsWith('/tirages')) return 'tirages'
    if (pathname.startsWith('/quiz')) return 'quiz'
    if (pathname.startsWith('/astres')) return 'astres'
    if (pathname.startsWith('/journal')) return 'journal'
    return 'accueil'
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">{children}</main>
      <BottomNavigation activeTab={getActiveTab()} />
    </div>
  )
}
