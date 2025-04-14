"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { Share2, Award, BookOpen } from "lucide-react"
import { ButtonCustom } from "@/components/ui/button-custom"


export default function TiragesPage() {
  const router = useRouter()

  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-b from-[#18272e] to-[#1c3039] text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#253f4b]/30 blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#18272e]/80 to-transparent"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-md mx-auto px-4 pt-6 pb-20">
        {/* Rune du jour card */}
        <div className="w-full bg-[#18272e] rounded-xl overflow-hidden mb-4">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=150&width=400"
              alt="Runes background"
              width={400}
              height={150}
              className="w-full h-[150px] object-cover"
            />
            <div className="absolute bottom-0 left-0 p-4">
              <h2 className="text-2xl font-bold">Ta rune du jour</h2>
              <p className="text-[#f6ae31]">Découvre la prédiction runique du jour</p>
            </div>
          </div>
          <div className="p-4 flex flex-col items-start">
            
            <ButtonCustom onClick={() => router.push("/tirages/rune")} className="mb-3 flex items-center">
              Tirer ma rune
              <BookOpen className="ml-2 w-4 h-4" />
          </ButtonCustom>

          <ButtonCustom 
            onClick={() => router.push("/tirages/rune/complete")} 
            className="flex items-center">
            3 runes
            <BookOpen className="ml-2 w-4 h-4" />
          </ButtonCustom>

          <ButtonCustom
            onClick={() => router.push("/tirages/rune/complete")}
            className="mb-3 flex items-center"
          >
            3 runes
            <BookOpen className="ml-2 w-4 h-4" />
          </ButtonCustom>

          <ButtonCustom
            disabled
            variant="secondary"
            onClick={() => router.push("/tirages/rune/complete")}
            className="mb-3 flex items-center"
          >
            3 runes
            <BookOpen className="ml-2 w-4 h-4" />
          </ButtonCustom>

          <ButtonCustom
            variant="secondary"
            onClick={() => router.push("/tirages/rune/complete")}
            className="mb-3 flex items-center"
          >
            3 runes
            <BookOpen className="ml-2 w-4 h-4" />
          </ButtonCustom>

            <p className="text-xs text-[#cdbcae] mt-2">1 rune gratuit/jour</p>
          </div>
        </div>

        {/* Prédiction tarot card */}
        <div className="w-full bg-[#18272e] rounded-xl overflow-hidden mb-4">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=150&width=400"
              alt="Tarot background"
              width={400}
              height={150}
              className="w-full h-[150px] object-cover"
            />
            <div className="absolute bottom-0 left-0 p-4">
              <h2 className="text-2xl font-bold">Prédiction tarot</h2>
              <p className="text-[#f6ae31]">Découvre la prédiction tarot du jour</p>
            </div>
          </div>
          <div className="p-4">
            <button
              onClick={() => router.push("/tirages/tarot")}
              className="bg-gradient-to-r from-[#f1ba5b] to-[#f5ce8a] text-[#18272e] font-bold px-4 py-2 rounded-full mb-3 flex items-center"
            >
              Dévoiler ma carte
              <BookOpen className="ml-2 w-4 h-4" />
            </button>
            <button
              onClick={() => router.push("/tirages/tarot/complete")}
              className="bg-gradient-to-r from-[#f1ba5b] to-[#f5ce8a] text-[#18272e] px-4 py-2 rounded-full flex items-center"
            >
              5 cartes
              <BookOpen className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Fehu rune result */}
        <div className="w-full bg-[#18272e] rounded-xl p-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <p className="text-sm text-[#cdbcae]">Ta rune du jour</p>
            </div>
            <div className="flex space-x-2">
              <button className="text-[#cdbcae]">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="text-[#cdbcae]">
                <Award className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="flex items-center mb-3">
            <div className="text-[#f6ae31] mr-2 text-2xl font-bold">ᚠ</div>
            <h3 className="text-[#f6ae31] text-2xl font-bold">Fehu</h3>
          </div>
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a tortor est. Suspendisse bibendum dapibus
            tortor id pulvinar. Nulla laoreet lorem et lacus gravida, quis tempus ex porta. Duis r...
          </p>
          <button
            onClick={() => router.push("/tirages/rune/complete")}
            className="bg-gradient-to-r from-[#f1ba5b] to-[#f5ce8a] text-[#18272e] px-4 py-2 rounded-full flex items-center"
          >
            Préciser à 3 runes
            <BookOpen className="ml-2 w-4 h-4" />
          </button>
        </div>

        {/* Multiple runes result */}
        <div className="w-full bg-[#18272e] rounded-xl p-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <p className="text-sm text-[#cdbcae]">Ta rune du jour</p>
            </div>
            <div className="flex space-x-2">
              <button className="text-[#cdbcae]">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="text-[#cdbcae]">
                <Award className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="space-y-2 mb-3">
            <div className="flex items-center">
              <div className="text-[#f6ae31] mr-2 text-2xl font-bold">ᛖ</div>
              <h3 className="text-[#f6ae31] text-2xl font-bold">Ehwaz</h3>
            </div>
            <div className="flex items-center">
              <div className="text-[#f6ae31] mr-2 text-2xl font-bold">ᛒ</div>
              <h3 className="text-[#f6ae31] text-xl font-bold">Berkana</h3>
            </div>
            <div className="flex items-center">
              <div className="text-[#f6ae31] mr-2 text-2xl font-bold">ᚦ</div>
              <h3 className="text-[#f6ae31] text-xl font-bold">Thurisaz</h3>
            </div>
          </div>
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a tortor est. Suspendisse bibendum dapibus
            tortor id pulvinar. Nulla laoreet lorem et lacus gravida, quis tempus ex porta. Duis r...
          </p>
        </div>

        {/* Tarot result */}
        <div className="w-full bg-[#18272e] rounded-xl p-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <p className="text-sm text-[#cdbcae]">Ton tarot du jour</p>
            </div>
            <div className="flex space-x-2">
              <button className="text-[#cdbcae]">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="text-[#cdbcae]">
                <Award className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="flex items-center mb-3">
            <div className="text-[#f6ae31] mr-2 text-2xl font-bold">🃟</div>
            <h3 className="text-[#f6ae31] text-2xl font-bold">La papesse</h3>
          </div>
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a tortor est. Suspendisse bibendum dapibus
            tortor id pulvinar. Nulla laoreet lorem et lacus gravida, quis tempus ex porta. Duis r...
          </p>
          <button
            onClick={() => router.push("/tirages/tarot/complete")}
            className="bg-gradient-to-r from-[#f1ba5b] to-[#f5ce8a] text-[#18272e] px-4 py-2 rounded-full flex items-center"
          >
            Préciser à 5 tarots
            <BookOpen className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  )
}

