"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { ArrowLeft, Share2, Plus } from "lucide-react"
import BottomNavigation from "@/components/bottom-navigation"

export default function ProfilZodiacPage() {
  const router = useRouter()

  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-b from-[#18272e] to-[#1c3039] text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=400')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#18272e]/70 to-[#18272e]/90"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col w-full max-w-md mx-auto px-4 pt-6 pb-20">
        {/* Header */}
        <div className="w-full flex justify-between items-center mb-8">
          <button onClick={() => router.back()} className="text-[#cdbcae] flex items-center">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour
          </button>
          <div className="flex space-x-4">
            <button className="text-[#cdbcae]">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Profile content */}
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold text-[#f6ae31] text-center mb-6">PROFIL ZODIACAL</h2>

          {/* Signe */}
          <div className="mb-8">
            <h3 className="text-[#f6ae31] mb-4">Signe</h3>
            <div className="flex flex-col items-center mb-4">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Bélier"
                width={150}
                height={150}
                className="rounded-lg mb-4"
              />
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 mr-2 text-[#f6ae31] text-3xl">♈</div>
                <h3 className="text-3xl font-bold text-[#f6ae31]">Bélier</h3>
              </div>
              <p className="text-[#f6ae31] mb-4">2ème décan</p>
            </div>
            <p className="text-center text-sm mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a tortor est. Suspendisse bibendum
              dapibus tortor id pulvinar. Nulla laoreet lorem et lacus gravida, quis tempus ex porta. Duis rutrum
              tincidunt erat. Nulla non tempor magna. Phasellus eget tristique leo. Vestibulum tempus quam at diam
              tempus pulvinar.
            </p>
            <p className="text-center text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a tortor est. Suspendisse bibendum
              dapibus tortor id pulvinar.
            </p>
          </div>

          {/* Ascendant */}
          <div className="mb-8">
            <h3 className="text-[#f6ae31] mb-4">Ascendant</h3>
            <div className="flex items-center justify-center mb-2">
              <div className="w-8 h-8 mr-2 text-[#f6ae31] text-3xl">♍</div>
              <h3 className="text-3xl font-bold text-[#f6ae31]">Vierge</h3>
            </div>
            <p className="text-center text-sm mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a tortor est. Suspendisse bibendum
              dapibus tortor id pulvinar. Nulla laoreet lorem et lacus gravida, quis tempus ex porta. Duis rutrum
              tincidunt erat. Nulla non tempor magna. Phasellus eget tristique leo. Vestibulum tempus quam at diam
              tempus pulvinar.
            </p>

            {/* Missing information button */}
            <div className="flex justify-center">
              <ButtonCustom
                variant="secondary"
                onClick={() => router.push("/astres/info-supplementaire?field=lieu-naissance")}
                className="mb-3 flex items-center"
              >
                Ajoute ton lieu de naissance
                <Plus className="ml-2 w-4 h-4" />
              </ButtonCustom>
            </div>
          </div>

          {/* Élément majoritaire */}
          <div className="mb-8">
            <h3 className="text-[#f6ae31] mb-4">Élément majoritaire</h3>
            <div className="flex items-center justify-center mb-2">
              <div className="w-8 h-8 mr-2 text-[#f6ae31] text-3xl">🌬️</div>
              <h3 className="text-3xl font-bold text-[#f6ae31]">Vent</h3>
            </div>
            <p className="text-center text-sm mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a tortor est. Suspendisse bibendum
              dapibus tortor id pulvinar.
            </p>
          </div>

          {/* Locked information */}
          <div className="flex items-center justify-between p-4 border border-[#253f4b] rounded-lg mb-8">
            <p className="text-[#cdbcae]">
              <span className="inline-block w-5 h-5 mr-2 bg-[#253f4b] rounded-full flex items-center justify-center">
                <span className="text-xs">🔒</span>
              </span>
              Maison astrologique
            </p>
            <button
              className="bg-[#253f4b] p-1 rounded"
              onClick={() => router.push("/astres/info-supplementaire?field=maison-astrologique")}
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom navigation */}
      <BottomNavigation activeTab="astres" />
    </div>
  )
}

