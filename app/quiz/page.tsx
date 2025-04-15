"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { BookOpen } from "lucide-react"
import { ButtonCustom } from "@/components/ui/button-custom"



export default function QuizPage() {
  const router = useRouter()

  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-b from-[#18272e] to-[#1c3039] text-white overflow-hidden">
      
      <PageBackground imagePath="/backgrounds/quiz.png" />

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-md mx-auto px-4 pt-6 pb-20">
        {/* Element quiz card */}
        <div className="w-full bg-[#18272e] rounded-xl overflow-hidden mb-4">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=180&width=400"
              alt="Elements background"
              width={400}
              height={180}
              className="w-full h-[180px] object-cover"
            />
            <div className="absolute top-2 right-2">
              <span className="bg-[#f6ae31] text-[#18272e] text-xs font-bold px-2 py-1 rounded-full flex items-center">
                Nouveau <span className="ml-1 w-2 h-2 rounded-full bg-[#18272e]"></span>
              </span>
            </div>
            <div className="absolute bottom-0 left-0 p-4">
              <h2 className="text-3xl font-bold">
                Quel est ton
                <br />
                élément ?
              </h2>
              <p className="text-[#f6ae31]">
                Feu, terre, eau... Quel élément
                <br />
                naturel fait de toi ce que tu es ?
              </p>
            </div>
          </div>
          <div className="p-4">
            <ButtonCustom
            onClick={() => router.push("/quiz/element")}
            className="mb-3 flex items-center"
          >
            Tester mon élément
            <BookOpen className="ml-2 w-4 h-4" />
          </ButtonCustom>
          </div>
        </div>

        {/* Stone quiz card */}
        <div className="w-full bg-[#18272e] rounded-xl overflow-hidden mb-4">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=180&width=400"
              alt="Crystals background"
              width={400}
              height={180}
              className="w-full h-[180px] object-cover"
            />
            <div className="absolute bottom-0 left-0 p-4">
              <h2 className="text-3xl font-bold">
                De quelle pierre
                <br />
                as tu besoin en ce
                <br />
                moment ?
              </h2>
              <p className="text-[#f6ae31]">
                Un quiz sans mauvaise réponse, pour
                <br />
                t'aider à savoir quelle pierre répond
                <br />à ton besoin du moment !
              </p>
            </div>
          </div>
          <div className="p-4">
            <ButtonCustom
            onClick={() => router.push("/quiz/pierre")}
            className="mb-3 flex items-center"
          >
            Recommencer le quiz
            <BookOpen className="ml-2 w-4 h-4" />
          </ButtonCustom>
          </div>
        </div>

        {/* Animal totem card */}
        <div className="w-full bg-[#18272e] rounded-xl overflow-hidden mb-4">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=180&width=400"
              alt="Totem animal background"
              width={400}
              height={180}
              className="w-full h-[180px] object-cover"
            />
            <div className="absolute bottom-0 left-0 p-4">
              <h2 className="text-3xl font-bold">Ton animal totem</h2>
              <p className="text-[#f6ae31]">
                Le chamanisme indien à ta porte :<br />
                trouve quel animal sommeille en toi !
              </p>
            </div>
          </div>
          <div className="p-4">
            <ButtonCustom
            onClick={() => router.push("/quiz/totem")}
            className="mb-3 flex items-center"
          >
            Trouver mon totem
            <BookOpen className="ml-2 w-4 h-4" />
          </ButtonCustom>
          </div>
        </div>
      </div>
    </div>
  )
}

