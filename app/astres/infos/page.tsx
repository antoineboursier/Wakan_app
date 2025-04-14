"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Bell } from "lucide-react"
import { ButtonCustom } from "@/components/ui/button-custom"

export default function InfosPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<"infos" | "points">("infos")
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)

  // Form data
  const [formData, setFormData] = useState({
    nom: "Angelou",
    prenom: "Maya",
    email: "m.angelou@gmail.com",
    idWakan: "ID584-2025-478-F",
    dateNaissance: "13/09/1985",
    heureNaissance: "",
    lieuNaissance: "Lille, France",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Show location suggestions for lieu de naissance
    if (name === "lieuNaissance" && value.length > 2) {
      // Simulate API call for city suggestions
      const mockSuggestions = [
        "Lille, France",
        "Limoges, France",
        "Lisieux, France",
        "Liverpool, Royaume-Uni",
        "Lisbonne, Portugal",
      ].filter((city) => city.toLowerCase().startsWith(value.toLowerCase()))

      setSuggestions(mockSuggestions)
      setShowSuggestions(mockSuggestions.length > 0)
    } else {
      setShowSuggestions(false)
    }
  }

  const selectSuggestion = (suggestion: string) => {
    setFormData({
      ...formData,
      lieuNaissance: suggestion,
    })
    setShowSuggestions(false)
  }

  const handleTabChange = (tab: "infos" | "points") => {
    setActiveTab(tab)
    if (tab === "points") {
      // Navigate to points page when implemented
      // router.push('/astres/points')
    }
  }

  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-b from-[#18272e] to-[#1c3039] text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=400')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#18272e]/70 to-[#18272e]/90"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col w-full max-w-md mx-auto px-4 pt-6 pb-20">
        {/* Header with bell icon */}
        <div className="flex items-center justify-center mb-6">
          <div className="text-[#f6ae31] text-3xl font-bold flex items-center">
            <Bell className="w-8 h-8 mr-2" />
            Mes informations personnelles
          </div>
        </div>

        {/* Personal information section */}
        <div className="space-y-4 mb-8">
          <div>
            <label htmlFor="nom" className="block text-[#cdbcae] mb-1">
              Nom
            </label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleInputChange}
              className="w-full bg-[#18272e] border border-[#253f4b] rounded-md p-3 text-white"
            />
          </div>

          <div>
            <label htmlFor="prenom" className="block text-[#cdbcae] mb-1">
              Prénom
            </label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              value={formData.prenom}
              onChange={handleInputChange}
              className="w-full bg-[#18272e] border border-[#253f4b] rounded-md p-3 text-white"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-[#cdbcae] mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full bg-[#18272e] border border-[#253f4b] rounded-md p-3 text-white"
            />
          </div>

          <div>
            <label htmlFor="idWakan" className="block text-[#cdbcae] mb-1">
              ID Wakan
            </label>
            <input
              type="text"
              id="idWakan"
              name="idWakan"
              value={formData.idWakan}
              readOnly
              className="w-full bg-[#18272e] border border-[#253f4b] rounded-md p-3 text-[#cdbcae]"
            />
          </div>
        </div>

        {/* Decorative element */}
        <div className="relative w-12 h-12 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full border-2 border-[#f6ae31]/50 border-dashed"></div>
          <div className="absolute inset-2 rounded-full border-2 border-[#f6ae31]"></div>
          <div className="absolute inset-4 rounded-full bg-[#f6ae31]"></div>
        </div>

        {/* Astral information section */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="text-[#f6ae31] text-3xl font-bold flex items-center">
              <Sun className="w-8 h-8 mr-2" />
              Mes informations astrales
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor="dateNaissance" className="block text-[#cdbcae] mb-1">
                Date de naissance
              </label>
              <input
                type="text"
                id="dateNaissance"
                name="dateNaissance"
                value={formData.dateNaissance}
                onChange={handleInputChange}
                className="w-full bg-[#18272e] border border-[#253f4b] rounded-md p-3 text-white"
              />
            </div>

            <div>
              <label htmlFor="heureNaissance" className="block text-[#cdbcae] mb-1">
                Heure de naissance
              </label>
              <input
                type="text"
                id="heureNaissance"
                name="heureNaissance"
                value={formData.heureNaissance}
                onChange={handleInputChange}
                placeholder="Ex : 13h58"
                className="w-full bg-[#18272e] border border-[#253f4b] rounded-md p-3 text-white"
              />
            </div>

            <div className="relative">
              <label htmlFor="lieuNaissance" className="block text-[#cdbcae] mb-1">
                Lieu de naissance
              </label>
              <input
                type="text"
                id="lieuNaissance"
                name="lieuNaissance"
                value={formData.lieuNaissance}
                onChange={handleInputChange}
                className="w-full bg-[#18272e] border border-[#253f4b] rounded-md p-3 text-white"
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
          </div>
        </div>
      </div>

      {/* Bottom navigation */}
      <BottomNavigation activeTab="astres" />
    </div>
  )
}

// Sun icon component
function Sun({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  )
}

