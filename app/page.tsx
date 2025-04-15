"use client";

import Image from "next/image";
import { Sun, Moon } from "lucide-react";
import BottomNavigation from "@/components/bottom-navigation";
import { ButtonCustom } from "@/components/ui/button-custom";
import { supabase } from "@/lib/supabaseClient";
import React, { useState, useEffect } from "react";
import PageBackground from "@/components/PageBackground"


export default function WakanApp() {

  //
  // Récup des données pour supabase 
  //

  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date().toISOString().split("T")[0]
    return today
  })
  const [lunarData, setLunarData] = useState(null)
  
  useEffect(() => {
    const fetchLunarData = async () => {
      const { data, error } = await supabase
        .from("lunar_data")
        .select("*")
        .eq("date", selectedDate)
        .maybeSingle()
  
      if (error) {
        console.error("Erreur Supabase :", error)
        setLunarData(null)
      } else {
        setLunarData(data)
      }
    }
  
    fetchLunarData()
  }, [selectedDate])

  //
  // Content de la page
  //

  return (
    <div className="relative flex flex-col items-center min-h-screen bg-gradient-to-b from-[#18272e] to-[#1c3039] text-white overflow-hidden">
      <PageBackground imagePath="/backgrounds/home.png" />
      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-md px-4 pt-10 pb-20">
        {/* Logo */}
        <div className="relative w-[114px] h-[104px]">
          <Image
            src="/logo_app.svg"
            alt="Logo"
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* Affichage des données Luna_app */}

        {lunarData && (
          <p className="text-white">
            Phase : {lunarData.phase_name} – Lune en {lunarData.moon_sign}
          </p>
        )}
        
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        className="text-black rounded px-3 py-2 mt-6 mb-4"
      />

      <p className="text-sm text-white mt-2">Date choisie : {selectedDate}</p>

        {/* Grid layout for cards */}
        <div className="grid grid-cols-2 gap-4 w-full mb-6">

          {/* Day of lunar cycle */}
          <div className="bg-[#18272e] rounded-xl p-4 flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold mb-1">
              {lunarData?.day_of_cycle ? `J${lunarData.day_of_cycle}` : "—"}
            </h2>
            <p className="text-center text-sm text-[#cdbcae]">
              du cycle
              <br />
              lunaire
            </p>
            <div className="mt-2 w-16 h-16">
              <div className="w-full h-full rounded-full border-4 border-[#f6ae31] border-r-transparent"></div>
            </div>
          </div>

           {/* Day of lunar cycle 2 */}
           <div className="bg-[--background-900] rounded-xl p-4 flex flex-col items-center justify-center">
            <div className="relative w-20 h-20">
              {/* Cercle de fond */}
              <div className="absolute inset-0 rounded-full" style={{
                background: "conic-gradient(from 180deg at 50% 50%, var(--background-800) 360deg, transparent 0deg)"
              }} />

              {/* Cercle jaune */}
              <div className="absolute inset-0 rounded-full" style={{
                background: `conic-gradient(from 180deg at 50% 50%, var(--accent-900) ${(lunarData?.day_of_cycle ?? 0) / 29 * 360}deg, transparent 0deg)`
              }} />

              {/* Contenu centré */}
              <div className="absolute inset-[6px] rounded-full bg-[--background-900] flex flex-col items-center justify-center text-center">
                <h2 className="text-title-med text-[--text-primary] leading-none">
                  {lunarData?.day_of_cycle ? `J${lunarData.day_of_cycle}` : "—"}
                </h2>
                <p className="text-para-lit text-[--text-secondary] leading-tight">
                  du cycle<br />lunaire
                </p>
              </div>
            </div>
          </div>




          {/* Lunar phase */}
          <div className="bg-[#18272e] rounded-xl p-4 flex flex-col items-center">
            <p className="text-[#cdbcae] text-sm mb-2">Phase lunaire</p>
            <div className="flex justify-between w-full my-2">
              <Moon className="w-5 h-5 text-[#f6df31]/30" />
              <Moon className="w-5 h-5 text-[#f6df31]/50" />
              <div className="relative">
                <Moon className="w-5 h-5 text-[#f6df31]" />
                <div className="absolute inset-0 border border-dashed border-[#f6ae31] rounded-full"></div>
              </div>
              <Moon className="w-5 h-5 text-[#f6df31]/50" />
              <Moon className="w-5 h-5 text-[#f6df31]/30" />
            </div>
            <h2 className="text-2xl font-bold mt-2">
              {lunarData?.phase_name?.split(" ")[0] ?? "—"}
            </h2>
            <h3 className="text-2xl font-bold">
              {lunarData?.phase_name?.split(" ").slice(1).join(" ") ?? ""}
            </h3>
          </div>

          {/* Perigee/Apogee */}
          <div className="bg-[#18272e] rounded-xl p-4 flex flex-row items-center justify-between">
            <div className="text-left">
              <p className="text-[#cdbcae]">Périgée</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#f6ae31] flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-[#18272e]"></div>
            </div>
            <div className="text-right">
              <p className="text-[#cdbcae]">Apogée</p>
            </div>
          </div>

          {/* Moon in Scorpio */}
          <div className="bg-[#18272e] rounded-xl p-4 flex flex-col items-center">
            <p className="text-[#cdbcae] text-sm">Lune en</p>
            <div className="my-2">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Scorpio symbol"
                width={40}
                height={40}
                className="object-contain text-[#f6ae31]"
              />
            </div>
            <h2 className="text-2xl font-bold">
              {lunarData?.moon_sign ?? "—"}
            </h2>
          </div>

          {/* Element */}
          <div className="bg-[#18272e] rounded-xl p-4 flex flex-row items-center justify-between">
            <div className="text-left">
              <p className="text-[#cdbcae]">Élément</p>
              <h2 className="text-xl font-bold">
                {lunarData?.element ?? "—"}
              </h2>
            </div>
            <div className="text-[#f6ae31]">
              <Image
                src="/placeholder.svg?height=30&width=30"
                alt="Fire element"
                width={30}
                height={30}
                className="object-contain"
              />
            </div>
          </div>

          {/* Node */}
          <div className="bg-[#18272e] rounded-xl p-4 flex flex-row items-center justify-between">
            <div className="text-left">
              <p className="text-[#cdbcae]">Noeud</p>
              <h2 className="text-xl font-bold">Capricorne</h2>
            </div>
            <div className="text-[#f6ae31]">
              <Image
                src="/placeholder.svg?height=30&width=30"
                alt="Capricorn symbol"
                width={30}
                height={30}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Astro du jour button */}
        <ButtonCustom variant="primary" className="text-button">
          Astro du jour
          <Sun className="ml-2 w-6 h-6" />
        </ButtonCustom>

        {/* Free draws counter */}
        <p className="text-[#cdbcae] mb-8">
          10 tirages gratuits/mois - 8 restants
        </p>

        {/* Decorative element */}
        <div className="relative w-12 h-12 mb-8">
          <div className="absolute inset-0 rounded-full border-2 border-[#f6ae31]/50 border-dashed"></div>
          <div className="absolute inset-2 rounded-full border-2 border-[#f6ae31]"></div>
          <div className="absolute inset-4 rounded-full bg-[#f6ae31]"></div>
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#f6ae31]/50"></div>
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#f6ae31]/50"></div>
        </div>

        {/* Premium access card */}
        <div className="w-full border-2 border-dashed border-[#f6ae31] rounded-xl p-4 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-[#cdbcae] mb-1">Accès premium</p>
              <h3 className="text-2xl font-bold text-[#f6ae31]">2€/mois</h3>
              <p className="text-[#f6ae31] font-bold mb-1">
                Débloque tout, sans mauvaise surprise.
              </p>
              <p className="text-[#cdbcae] text-sm">
                Et bien sûr, c'est sans engagement.
              </p>
            </div>
            <div className="bg-white rounded-full p-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="#18272e"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
