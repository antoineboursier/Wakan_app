"use client";

import Image from "next/image";
import { Sun, Moon } from "lucide-react";
import BottomNavigation from "@/components/bottom-navigation";
import { ButtonCustom } from "@/components/ui/button-custom";
import { supabase } from "@/lib/supabaseClient";
import React, { useState, useEffect } from "react";
import PageBackground from "@/components/PageBackground";

export default function WakanApp() {
  //
  // Récup des données pour supabase
  //

  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date().toISOString().split("T")[0];
    return today;
  });
  const [lunarData, setLunarData] = useState(null);
  const [lunarDataMap, setLunarDataMap] = useState([]);

  useEffect(() => {
    const fetchLunarData = async () => {
      const { data, error } = await supabase
        .from("lunar_data")
        .select("*")
        .eq("date", selectedDate)
        .maybeSingle();

      if (error) {
        console.error("Erreur Supabase :", error);
        setLunarData(null);
        setLunarDataMap([]); // reset aussi la map en cas d’erreur
      } else {
        setLunarData(data);

        // ⚠️ Nouvelle requête lancée uniquement si on a bien un day_of_cycle
        if (typeof data?.day_of_cycle === "number") {
          const { data: surroundingData, error: mapError } = await supabase
            .from("lunar_data")
            .select("day_of_cycle, phase_name")
            .gte("day_of_cycle", data.day_of_cycle - 2)
            .lte("day_of_cycle", data.day_of_cycle + 2);

          if (mapError) {
            console.error("Erreur récupération phases adjacentes :", mapError);
            setLunarDataMap([]);
          } else {
            setLunarDataMap(surroundingData);
          }
        }
      }
    };

    fetchLunarData();
  }, [selectedDate]);

  //
  // Content de la page
  //

  return (
    <div className="relative flex flex-col items-center min-h-screen bg-gradient-to-b from-[#18272e] to-[#1c3039] text-white overflow-hidden">
      <PageBackground imagePath="/backgrounds/home.png" />
      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-md px-4 pt-10 pb-20">
        {/* Logo */}
        <div className="relative w-[150px] h-[136px]">
          <Image
            src="/logo_app.svg"
            alt="Logo"
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* Calendrier avec flèches */}
        <div className="flex items-center gap-2 mt-6 mb-6">
          {/* Bouton précédent */}
          <button
            onClick={() => {
              const newDate = new Date(selectedDate);
              newDate.setDate(newDate.getDate() - 1);
              setSelectedDate(newDate.toISOString().split("T")[0]);
            }}
            className="text-white text-xl px-2"
          >
            &lt;
          </button>

          {/* Sélecteur de date */}
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="text-black rounded px-3 py-2"
          />

          {/* Bouton suivant */}
          <button
            onClick={() => {
              const newDate = new Date(selectedDate);
              newDate.setDate(newDate.getDate() + 1);
              setSelectedDate(newDate.toISOString().split("T")[0]);
            }}
            className="text-white text-xl px-2"
          >
            &gt;
          </button>
        </div>

        {/* Grid layout for cards */}
        <div className="flex gap-2 w-full mb-6 items-stretch">
          <div className="flex flex-col gap-1.5 w-1/2 h-full">
            {/* Day of lunar cycle */}
            <div className="card-glass p-4 flex flex-col items-center justify-center">
              <div className="relative w-24 h-24">
                {/* Cercle de fond */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "conic-gradient(from 180deg at 50% 50%, var(--background-800) 360deg, transparent 0deg)",
                  }}
                />

                {/* Cercle jaune */}
                <div className="absolute inset-0 rounded-full">
                  {typeof lunarData?.day_of_cycle === "number" && (
                    <svg width="100%" height="100%" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="var(--background-800)"
                        strokeWidth="6"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="url(#grad)"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray={`${
                          (lunarData.day_of_cycle / 29.5) * 282.6
                        } 282.6`}
                        transform="rotate(-90 50 50)"
                      />
                      <defs>
                        <linearGradient id="grad" x1="0" x2="1" y1="0" y2="1">
                          <stop offset="0%" stopColor="var(--accent-500)" />
                          <stop offset="100%" stopColor="var(--accent-900)" />
                        </linearGradient>
                      </defs>
                    </svg>
                  )}
                </div>

                {/* Contenu */}
                <div className="absolute inset-[6px] rounded-full bg-[--background-900] flex flex-col items-center justify-center text-center">
                  <h2 className="text-title-med text-[--text-primary] leading-none mb-1">
                    {lunarData?.day_of_cycle
                      ? `J ${lunarData.day_of_cycle}`
                      : "—"}
                  </h2>
                  <p className="text-para-lit text-[--text-secondary] leading-none">
                    du cycle
                    <br />
                    lunaire
                  </p>
                </div>
              </div>
            </div>

            {/* Perigee/Apogee */}
            <div className="card-glass p-4 flex flex-col justify-between h-[80px]">
              {/* Ligne du haut avec textes */}
              <div className="flex justify-between items-center w-full px-1 text-para-lit text-[--text-secondary]">
                <span>Périgée</span>
                <span>Apogée</span>
              </div>

              {/* Triangle + curseur */}
              <div className="relative w-full h-6 mt-1">
                {/* Triangle inversé */}
                <svg
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  width="100%"
                  height="100%"
                  viewBox="0 0 100 16"
                  preserveAspectRatio="none"
                >
                  <polygon
                    points="100,8 0,0 0,16"
                    fill="var(--background-900)"
                  />
                </svg>

                {/* Curseur */}
                {typeof lunarData?.distance_ratio === "number" &&
                  (() => {
                    const ratio = lunarData.distance_ratio;
                    const percent = (100 + (ratio - 75) * 2) % 100;
                    const size = 12 + ((100 - ratio) / 100) * 4;

                    return (
                      <div
                        className="absolute top-1/2 z-10 rounded-full"
                        style={{
                          left: `${percent}%`,
                          width: `${size}px`,
                          height: `${size}px`,
                          backgroundColor: "rgba(246, 174, 49, 0.4)",
                          border: "1px solid var(--rich-yellow, #F6DF31)",
                          transform: "translate(-50%, -50%)",
                        }}
                      />
                    );
                  })()}
              </div>
            </div>
            {/* Fin de bloc */}
          </div>

          <div className="w-1/2">
            {/* Lunar phase */}

            <div
              className="bg-[#18272e] rounded-xl p-4 flex flex-col items-center h-full justify-center"
              style={{ boxShadow: "0px 8px 32px rgba(246, 174, 49, 0.4)" }}
            >
              <p className="text-para-lit text-[--text-tertiary] mb-2">
                Phase lunaire
              </p>

              {/* Bar d’icônes */}
              <div className="flex justify-center items-center gap-[8px] w-full my-2">
                {[...Array(5)].map((_, index) => {
                  if (!lunarData?.day_of_cycle) return null;

                  const offsets = [-2, -1, 0, 1, 2];
                  const targetDay = lunarData.day_of_cycle + offsets[index];

                  const sizes = [16, 20, 36, 20, 16];
                  const opacities = [0.2, 0.6, 1, 0.6, 0.2];

                  const matching = lunarDataMap?.find(
                    (entry) => entry.day_of_cycle === targetDay
                  );

                  const phaseMap = {
                    "Nouvelle Lune": "nouvellelune",
                    Croissant: "1ercroissant",
                    "Premier Quartier": "premierquartier",
                    "Gibbeuse croissante": "lunegibbeuse1",
                    "Pleine Lune": "pleinelune",
                    "Gibbeuse décroissante": "lunegibbeuse2",
                    "Dernier Quartier": "dernierquartier",
                    "Dernier croissant": "derniercroissant",
                  };

                  const iconKey =
                    phaseMap[matching?.phase_name ?? "Nouvelle Lune"];

                  const isCurrent = index === 2;

                  return (
                    <div
                      key={index}
                      className="flex items-center justify-center"
                      style={
                        isCurrent
                          ? {
                              width: sizes[index],
                              height: sizes[index],
                              borderRadius: "50%",
                              border: "1px dashed var(--accent-900)",
                              padding: "4px",
                              filter:
                                "drop-shadow(0px 2px 16px rgba(246, 223, 49, 0.80))",
                            }
                          : {}
                      }
                    >
                      <img
                        src={`/moon_phases/${iconKey}.svg`}
                        alt={iconKey}
                        style={{
                          height: `${sizes[index]}px`,
                          width: `${sizes[index]}px`,
                          opacity: opacities[index],
                          filter:
                            "drop-shadow(0px 2px 16px rgba(246, 223, 49, 0.80))",
                        }}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Texte de la phase */}
              <h2 className="text-title_lit text-[--text-primary] mt-4 leading-none">
                {lunarData?.phase_name?.split(" ")[0] ?? "—"}
              </h2>
              <h3 className="text-title_lit text-[--text-primary] leading-none">
                {lunarData?.phase_name?.split(" ").slice(1).join(" ") ?? ""}
              </h3>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 w-full mb-8">
          {/* Moon in Scorpio */}
          <div
            className="bg-[#18272e] rounded-xl p-4 flex flex-col items-center"
            style={{ boxShadow: "0px 8px 32px rgba(246, 174, 49, 0.4)" }}
          >
            <div className="my-2">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Scorpio symbol"
                width={40}
                height={40}
                className="object-contain text-[#f6ae31]"
              />
            </div>
            <p className="text-para-lit text-[--text-secondary]">Lune en</p>
            <h2 className="text-title-lit text-[--text-primary]">
              {lunarData?.moon_sign ?? "—"}
            </h2>
          </div>

          {/* Element */}
          <div className="bg-[#18272e] rounded-xl p-4 flex flex-row items-center justify-between">
            <div className="text-left">
              <p className="text-para-lit text-[--text-secondary]">Élément</p>
              <h2 className="text-title-lit text-[--text-primary]">
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
        </div>

        {/* Astro du jour button */}
        <ButtonCustom variant="primary" className="text-button mb-2">
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
