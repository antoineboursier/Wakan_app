'use client'

import React from 'react'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, BookOpen, HelpCircle, Star, FileText } from 'lucide-react'

export default function BottomNavigation() {
  const pathname = usePathname()

  const getActive = (tab: string) => {
    return pathname === tab || pathname.startsWith(tab + '/')
  }

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-20"
      style={{
        borderRadius: "var(--sizes-m, 16px)",
        background: "linear-gradient(90deg, var(--background-800, #1C3039) 0%, var(--background-500, #365C6E) 100%)",
        boxShadow: "0px var(--sizes-sm, 12px) var(--sizes-xl, 32px) 0px var(--background-900, #18272E)",
        textAlign: "center",
        padding: "var(--sizes-s, 8px)"
      }}
    >
      <div className="flex justify-between items-center max-w-md mx-auto">
        <Link
          href="/"
          className="flex flex-col items-center p-2"
          style={{
            color: getActive('/') ? "var(--text-primary)" : "var(--text-secondary)",
            opacity: getActive('/') ? 1 : 0.5
          }}
        >
          <Home className="w-6 h-6 mb-1" />
          <span className="text-tabbar">Accueil</span>
        </Link>
        <Link
          href="/tirages"
          className="flex flex-col items-center p-2"
          style={{
            color: getActive('/tirages') ? "var(--text-primary)" : "var(--text-secondary)",
            opacity: getActive('/tirages') ? 1 : 0.5
          }}
        >
          <BookOpen className="w-6 h-6 mb-1" />
          <span className="text-tabbar">Tirages</span>
        </Link>
        <Link
          href="/quiz"
          className="flex flex-col items-center p-2"
          style={{
            color: getActive('/quiz') ? "var(--text-primary)" : "var(--text-secondary)",
            opacity: getActive('/quiz') ? 1 : 0.5
          }}
        >
          <HelpCircle className="w-6 h-6 mb-1" />
          <span className="text-tabbar">Quiz</span>
        </Link>
        <Link
          href="/astres"
          className="flex flex-col items-center p-2"
          style={{
            color: getActive('/astres') ? "var(--text-primary)" : "var(--text-secondary)",
            opacity: getActive('/astres') ? 1 : 0.5
          }}
        >
          <Star className="w-6 h-6 mb-1" />
          <span className="text-tabbar">Astres</span>
        </Link>
        <Link
          href="/journal"
          className="flex flex-col items-center p-2"
          style={{
            color: getActive('/journal') ? "var(--text-primary)" : "var(--text-secondary)",
            opacity: getActive('/journal') ? 1 : 0.5
          }}
        >
          <FileText className="w-6 h-6 mb-1" />
          <span className="text-tabbar">Journal</span>
        </Link>
      </div>
    </div>
  )
}
