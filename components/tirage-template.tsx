"use client"

import { useState } from "react"
import { ArrowLeft, Share2, UserPlus, Lock } from "lucide-react"
import BottomNavigation from "@/components/bottom-navigation"

interface Rune {
  symbol: string
  name: string
  description: string
}

interface TirageTemplateProps {
  type: "rune" | "tarot"
  title: string
  mainItem: Rune
  additionalItems?: Rune[]
  isPremium?: boolean
  precisionLabel?: string
  precisionCount?: number
  onBack?: () => void
}

export default function TirageTemplate({
  type,
  title,
  mainItem,
  additionalItems = [],
  isPremium = false,
  precisionLabel = "Préciser",
  precisionCount = 3,
  onBack = () => window.history.back(),
}: TirageTemplateProps) {
  const [showPrecision, setShowPrecision] = useState(true)

  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-b from-[#18272e] to-[#1c3039] text-white overflow-hidden">
      {/* Background with blurred runes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=400')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#18272e]/70 to-[#18272e]/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full h-full px-4 pt-6 pb-20">
        {/* Header */}
        <div className="w-full flex justify-between items-center mb-8">
          <button onClick={onBack} className="text-[#cdbcae] flex items-center">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour
          </button>
          <div className="flex space-x-4">
            <button className="text-[#cdbcae]">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="text-[#cdbcae]">
              <UserPlus className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main content */}
        <div className="w-full max-w-md flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold text-[#f6ae31] mb-6">{title}</h2>

          {/* Main rune/card */}
          <div className="mb-6">
            <div className="text-[#f6ae31] text-8xl font-bold mb-2">{mainItem.symbol}</div>
            <h3 className="text-4xl font-bold text-[#f6ae31] mb-6">{mainItem.name}</h3>
            <p className="text-center text-[#f4efeb] mb-8">{mainItem.description}</p>
          </div>

          {/* Precision button (only shown in light version when no additionalItems) */}
          {additionalItems.length === 0 && (
            <button
              className={`${isPremium ? "bg-[#cdbcae]/30 text-[#cdbcae]" : "bg-gradient-to-r from-[#f1ba5b] to-[#f5ce8a] text-[#18272e]"} px-6 py-3 rounded-full font-bold flex items-center mb-8`}
            >
              {precisionLabel} à {precisionCount} {type === "rune" ? "runes" : "cartes"}
              {isPremium && <Lock className="ml-2 w-4 h-4" />}
            </button>
          )}

          {/* Additional runes/cards (only shown in complete version) */}
          {additionalItems.length > 0 && (
            <div className="w-full">
              <h3 className="text-xl font-bold text-[#cdbcae] mb-6">
                Tes {type === "rune" ? "runes" : "cartes"} de précisions :
              </h3>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {additionalItems.map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="text-[#f6ae31] text-5xl font-bold mb-2">{item.symbol}</div>
                    <h4 className="text-2xl font-bold text-[#f6ae31] mb-2">{item.name}</h4>
                  </div>
                ))}
              </div>

              <p className="text-center text-[#f4efeb] mb-8">{additionalItems[0].description}</p>
            </div>
          )}
        </div>
      </div>

      {/* Bottom navigation */}
      <BottomNavigation activeTab="tirages" />
    </div>
  )
}

