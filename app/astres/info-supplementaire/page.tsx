"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { X, Wand2 } from "lucide-react"

export default function InfoSupplementairePage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const field = searchParams.get("field")

  const [value, setValue] = useState("")
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)

  // Get field label based on field parameter
  const getFieldLabel = () => {
    switch (field) {
      case "heure-naissance":
        return "Heure de naissance"
      case "lieu-naissance":
        return "Lieu de naissance"
      case "signe":
        return "Signe du zodiaque"
      case "ascendant":
        return "Ascendant"
      case "element":
        return "Élément majoritaire"
      case "signe-lunaire":
        return "Signe Lunaire"
      case "phase-lunaire":
        return "Phase lunaire de naissance"
      case "noeud-lunaire":
        return "Noeud lunaire"
      case "maison-astrologique":
        return "Maison astrologique"
      case "lune-noire":
        return "Lune noire de Lilith"
      case "etoile-fixe":
        return "Étoile fixe en conjonction"
      default:
        return "Information supplémentaire"
    }
  }

  // Get placeholder based on field parameter
  const getPlaceholder = () => {
    switch (field) {
      case "heure-naissance":
        return "Ex : 13h58"
      case "lieu-naissance":
        return "Ex : Paris, France"
      default:
        return ""
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)

    // Show location suggestions for lieu de naissance
    if (field === "lieu-naissance" && e.target.value.length > 2) {
      // Simulate API call for city suggestions
      const mockSuggestions = [
        "Lille, France",
        "Limoges, France",
        "Lisieux, France",
        "Liverpool, Royaume-Uni",
        "Lisbonne, Portugal",
      ].filter((city) => city.toLowerCase().startsWith(e.target.value.toLowerCase()))

      setSuggestions(mockSuggestions)
      setShowSuggestions(mockSuggestions.length > 0)
    } else {
      setShowSuggestions(false)
    }
  }

  const selectSuggestion = (suggestion: string) => {
    setValue(suggestion)
    setShowSuggestions(false)
  }

  const handleSave = () => {
    // Here you would save the data to your backend/Supabase
    // For now, just go back to the previous page
    router.back()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#18272e]/80 backdrop-blur-sm">
      <div className="relative bg-[#18272e] rounded-xl p-6 w-full max-w-sm mx-4 shadow-xl">
        {/* Close button */}
        <button onClick={() => router.back()} className="absolute top-4 right-4 text-[#cdbcae]">
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-xl font-bold mb-6">{getFieldLabel()}</h2>

        <div className="relative mb-6">
          <input
            type="text"
            value={value}
            onChange={handleInputChange}
            placeholder={getPlaceholder()}
            className="w-full bg-[#253f4b] border border-[#cdbcae]/30 rounded-md p-3 text-white"
          />

          {/* Location suggestions */}
          {showSuggestions && (
            <div className="absolute z-10 w-full mt-1 bg-[#253f4b] border border-[#18272e] rounded-md shadow-lg max-h-60 overflow-auto">
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="p-2 hover:bg-[#18272e] cursor-pointer"
                  onClick={() => selectSuggestion(suggestion)}
                >
                  {suggestion}
                </div>
              ))}
            </div>
          )}
        </div>

        <ButtonCustom
          onClick={handleSave}
          className="mb-3 flex items-center"
        >
          Enregistrer
          <Wand2 className="ml-2 w-4 h-4" />
        </ButtonCustom>
      </div>
    </div>
  )
}

