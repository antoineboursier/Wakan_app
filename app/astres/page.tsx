"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Bell, ChevronRight, Lock, X, Plus, Camera, Upload } from "lucide-react"
import { ButtonCustom } from "@/components/ui/button-custom"


export default function AstresPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<"infos" | "points">("infos")
  const [showProfileUpload, setShowProfileUpload] = useState(false)

  const handleTabChange = (tab: "infos" | "points") => {
    setActiveTab(tab)
    if (tab === "infos") {
      router.push("/astres/infos")
    }
  }

  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-b from-[#18272e] to-[#1c3039] text-white overflow-hidden">
    
    <PageBackground imagePath="/backgrounds/astres.png" />

      {/* Content container */}
      <div className="relative z-10 flex flex-col w-full max-w-md mx-auto px-4 pt-6 pb-20">
        {/* User profile */}
        <div className="flex flex-col mb-4">
          <div className="flex items-center justify-center mb-4">
            <div className="relative cursor-pointer" onClick={() => setShowProfileUpload(true)}>
              <div className="w-20 h-20 rounded-full bg-[#cdbcae] flex items-center justify-center overflow-hidden">
                {showProfileUpload ? (
                  <div className="absolute inset-0 bg-[#18272e]/70 flex flex-col items-center justify-center">
                    <Camera className="w-6 h-6 mb-1" />
                    <span className="text-xs">Changer</span>
                  </div>
                ) : (
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt="Profile"
                    width={80}
                    height={80}
                    className="rounded-full object-cover"
                  />
                )}
              </div>
              <div className="absolute bottom-0 right-0 bg-[#f6ae31] rounded-full p-1">
                <Upload className="w-4 h-4 text-[#18272e]" />
              </div>
            </div>
          </div>

          <div className="text-center mb-3">
            <h3 className="text-[#f6ae31] font-bold">Maya</h3>
            <p className="text-xs text-[#cdbcae]">Angelou De La Dia De L...</p>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-[#253f4b] mb-4">
            <button
              className={`flex-1 pb-2 text-center ${activeTab === "infos" ? "text-white border-b-2 border-white" : "text-[#cdbcae]"}`}
              onClick={() => handleTabChange("infos")}
            >
              Mes infos
            </button>
            <button
              className={`flex-1 pb-2 text-center ${activeTab === "points" ? "text-white border-b-2 border-white" : "text-[#cdbcae]"}`}
              onClick={() => handleTabChange("points")}
            >
              Mes points <Bell className="inline-block w-4 h-4 ml-1" />
            </button>
          </div>
        </div>

        {/* Premium access card */}
        <div className="w-full border-2 border-dashed border-[#f6ae31] rounded-xl p-4 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-[#cdbcae] mb-1">Accès premium</p>
              <h3 className="text-2xl font-bold text-[#f6ae31]">2€/mois</h3>
              <p className="text-[#f6ae31] font-bold mb-1">Débloque tout, sans mauvaise surprise.</p>
              <p className="text-[#cdbcae] text-sm">Et bien sûr, c'est sans engagement.</p>
            </div>
            <div className="bg-white rounded-full p-2">
              <ChevronRight className="w-5 h-5 text-[#18272e]" />
            </div>
          </div>
        </div>

        {/* Decorative element */}
        <div className="relative w-12 h-12 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full border-2 border-[#f6ae31]/50 border-dashed"></div>
          <div className="absolute inset-2 rounded-full border-2 border-[#f6ae31]"></div>
          <div className="absolute inset-4 rounded-full bg-[#f6ae31]"></div>
        </div>

        {/* Zodiac profile card */}
        <div
          className="w-full bg-[#18272e] rounded-xl overflow-hidden mb-6 cursor-pointer"
          onClick={() => router.push("/astres/profil-zodiac")}
        >
          <div className="relative">
            <Image
              src="/placeholder.svg?height=120&width=400"
              alt="Aries background"
              width={400}
              height={120}
              className="w-full h-[120px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#18272e]/90"></div>
            <div className="absolute bottom-0 left-0 p-4">
              <h2 className="text-xl font-bold">Profil Zodiac</h2>
            </div>
          </div>
          <div className="p-4">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <div className="w-6 h-6 mr-2 text-[#f6ae31]">♈</div>
                <h3 className="text-xl font-bold text-[#f6ae31]">Bélier</h3>
              </div>
              <p className="text-sm text-[#cdbcae] ml-8">2ème décan</p>

              <div className="flex items-center">
                <div className="w-6 h-6 mr-2 text-[#f6ae31]">♍</div>
                <h3 className="text-[#f6ae31]">Vierge</h3>
              </div>
              <p className="text-sm text-[#cdbcae] ml-8">Ascendant</p>

              <div className="flex items-center">
                <div className="w-6 h-6 mr-2 text-[#f6ae31]">🌬️</div>
                <h3 className="text-[#f6ae31]">Vent</h3>
              </div>
              <p className="text-sm text-[#cdbcae] ml-8">Élément majoritaire</p>
            </div>
          </div>
        </div>

        {/* Zodiac profile form */}
        <div className="w-full bg-[#18272e] rounded-xl p-4 mb-6">
          <h2 className="text-xl font-bold mb-4">Profil Zodiac</h2>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <p className="text-[#cdbcae]">Signe du zodiac</p>
              <button
                className="bg-[#253f4b] p-1 rounded"
                onClick={() => router.push("/astres/info-supplementaire?field=signe")}
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-[#cdbcae]">Ascendant</p>
              <button
                className="bg-[#253f4b] p-1 rounded"
                onClick={() => router.push("/astres/info-supplementaire?field=ascendant")}
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-[#cdbcae]">Élément majoritaire</p>
              <button
                className="bg-[#253f4b] p-1 rounded"
                onClick={() => router.push("/astres/info-supplementaire?field=element")}
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          <ButtonCustom
            onClick={() => router.push("/astres/profil-zodiac")}
            className="mb-3 flex items-center"
          >
            Compléter
            <Plus className="ml-2 w-4 h-4" />
          </ButtonCustom>
        </div>

        {/* Lunar profile form */}
        <div className="w-full bg-[#18272e] rounded-xl p-4 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Profil Lunaire</h2>
            <span className="bg-[#f6ae31] text-[#18272e] text-xs font-bold px-2 py-1 rounded-full flex items-center">
              Nouveau <span className="ml-1 w-2 h-2 rounded-full bg-[#18272e]"></span>
            </span>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <p className="text-[#cdbcae]">Signe Lunaire</p>
              <button
                className="bg-[#253f4b] p-1 rounded"
                onClick={() => router.push("/astres/info-supplementaire?field=signe-lunaire")}
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-[#cdbcae]">Phase lunaire de naissance</p>
              <button
                className="bg-[#253f4b] p-1 rounded"
                onClick={() => router.push("/astres/info-supplementaire?field=phase-lunaire")}
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-[#cdbcae]">Noeud lunaire</p>
              <button
                className="bg-[#253f4b] p-1 rounded"
                onClick={() => router.push("/astres/info-supplementaire?field=noeud-lunaire")}
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-[#cdbcae]">
                <Lock className="inline-block w-4 h-4 mr-1" />
                Maison astrologique
              </p>
              <button
                className="bg-[#253f4b] p-1 rounded"
                onClick={() => router.push("/astres/info-supplementaire?field=maison-astrologique")}
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-[#cdbcae]">
                <Lock className="inline-block w-4 h-4 mr-1" />
                Lune noir de Lilith
              </p>
              <button
                className="bg-[#253f4b] p-1 rounded"
                onClick={() => router.push("/astres/info-supplementaire?field=lune-noire")}
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-[#cdbcae]">
                <Lock className="inline-block w-4 h-4 mr-1" />
                Étoile fixes en conjonction
              </p>
              <button
                className="bg-[#253f4b] p-1 rounded"
                onClick={() => router.push("/astres/info-supplementaire?field=etoile-fixe")}
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          <ButtonCustom
            onClick={() => router.push("/astres/profil-lunaire")}
            className="mb-3 flex items-center"
          >
            Compléter
            <Plus className="ml-2 w-4 h-4" />
          </ButtonCustom>
        </div>

        {/* Aztec profile form */}
        <div className="w-full bg-[#18272e] rounded-xl p-4 mb-8">
          <h2 className="text-xl font-bold mb-4">Profil Astèque</h2>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <p className="text-[#cdbcae]">
                <Lock className="inline-block w-4 h-4 mr-1" />
                Maison astrologique
              </p>
              <button className="bg-[#253f4b] p-1 rounded">
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-[#cdbcae]">
                <Lock className="inline-block w-4 h-4 mr-1" />
                Lune noir de Lilith
              </p>
              <button className="bg-[#253f4b] p-1 rounded">
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-[#cdbcae]">
                <Lock className="inline-block w-4 h-4 mr-1" />
                Étoile fixes en conjonction
              </p>
              <button className="bg-[#253f4b] p-1 rounded">
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          <ButtonCustom
            onClick={() => router.push("/astres/profil-lunaire")}
            className="mb-3 flex items-center"
          >
            Compléter
            <Lock className="ml-2 w-4 h-4" />
          </ButtonCustom>
        </div>

        {/* Decorative element */}
        <div className="relative w-12 h-12 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full border-2 border-[#f6ae31]/50 border-dashed"></div>
          <div className="absolute inset-2 rounded-full border-2 border-[#f6ae31]"></div>
          <div className="absolute inset-4 rounded-full bg-[#f6ae31]"></div>
        </div>

        {/* Footer links */}
        <div className="flex flex-col items-center space-y-3 mb-8">
          <button className="bg-[#18272e] text-white px-6 py-2 rounded-full flex items-center">
            Se déconnecter
            <X className="ml-2 w-4 h-4" />
          </button>

          <button className="text-[#cdbcae] text-sm">Supprimer mon compte</button>

          <button className="text-[#cdbcae] text-sm">À propos de l'application</button>
        </div>
      </div>

    </div>
  )
}

