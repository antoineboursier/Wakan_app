"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Lock, Search, Filter, X } from "lucide-react"
import { ButtonCustom } from "@/components/ui/button-custom"


// Types pour les articles
interface Article {
  id: string
  title: string
  image: string
  categories: string[]
  readTime: string
  excerpt: string
  isPremium: boolean
  isNew?: boolean
}

export default function JournalPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilterPopup, setShowFilterPopup] = useState(false)
  const [filteredArticles, setFilteredArticles] = useState<Article[]>(mockArticles)

  // Fonction de recherche
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)

    if (query.trim() === "") {
      setFilteredArticles(mockArticles)
    } else {
      const filtered = mockArticles.filter(
        (article) =>
          article.title.toLowerCase().includes(query.toLowerCase()) ||
          article.categories.some((cat) => cat.toLowerCase().includes(query.toLowerCase())) ||
          article.excerpt.toLowerCase().includes(query.toLowerCase()),
      )
      setFilteredArticles(filtered)
    }
  }

  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Background elements */}
      <div
        className="absolute inset-0 z-0 overflow-hidden"
        style={{
          background: "linear-gradient(180deg, var(--background-900) 0%, var(--background-800) 100%)",
        }}
      >
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=400')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(24,39,46,0.7)] to-[rgba(28,48,57,0.9)]"></div>
        {/* Étoiles et éléments mystiques */}
        <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-white opacity-70"></div>
        <div className="absolute top-40 right-20 w-1 h-1 rounded-full bg-white opacity-50"></div>
        <div className="absolute top-60 left-30 w-1.5 h-1.5 rounded-full bg-white opacity-60"></div>
        <div className="absolute bottom-40 right-10 w-2 h-2 rounded-full bg-white opacity-70"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col w-full max-w-md mx-auto px-4 pt-6 pb-20">
        {/* Search and filter bar */}
        <div
          className="flex items-center mb-6 rounded-full p-2 border border-[rgba(205,188,174,0.3)]"
          style={{
            background: "var(--background-800)",
          }}
        >
          <Search className="w-5 h-5 ml-2 mr-1" style={{ color: "var(--text-secondary)" }} />
          <input
            type="text"
            placeholder="Rechercher un article..."
            value={searchQuery}
            onChange={handleSearch}
            className="flex-1 bg-transparent border-none focus:outline-none px-2 text-para-lit"
            style={{ color: "var(--text-primary)" }}
          />
          <button
            className="p-2 rounded-full"
            onClick={() => setShowFilterPopup(true)}
            style={{ background: "var(--background-700)" }}
          >
            <Filter className="w-5 h-5" style={{ color: "var(--text-secondary)" }} />
          </button>
        </div>

        {/* Articles list */}
        {filteredArticles.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12">
            <p className="text-lg mb-2 text-para-big" style={{ color: "var(--text-secondary)" }}>
              Aucun article trouvé
            </p>
            <p className="text-center text-para" style={{ color: "var(--text-primary)" }}>
              Essayez d'autres termes de recherche ou filtres
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                className="w-full mb-6 cursor-pointer overflow-hidden rounded-xl border border-[rgba(205,188,174,0.15)]"
                onClick={() => router.push(`/journal/article/${article.id}`)}
                style={{ background: "rgba(28,48,57,0.6)" }}
              >
                <div className="relative">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={400}
                    height={180}
                    className="w-full h-[180px] object-cover"
                  />
                  {article.isNew && (
                    <div className="absolute top-2 right-2">
                      <span
                        className="text-xs font-bold px-2 py-1 rounded-full flex items-center"
                        style={{
                          background: "var(--accent-900)",
                          color: "var(--accent_text-on-900)",
                        }}
                      >
                        Nouveau{" "}
                        <span
                          className="ml-1 w-2 h-2 rounded-full"
                          style={{ background: "var(--background-900)" }}
                        ></span>
                      </span>
                    </div>
                  )}
                  {article.isPremium && (
                    <div className="absolute top-2 right-2">
                      <div className="p-2 rounded-lg backdrop-blur-sm" style={{ background: "rgba(24,39,46,0.6)" }}>
                        <Lock className="w-5 h-5" style={{ color: "var(--text-secondary)" }} />
                      </div>
                    </div>
                  )}
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(180deg, transparent 50%, rgba(28,48,57,0.95) 100%)" }}
                  ></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h2 className="text-title-med" style={{ color: "var(--accent-900)" }}>
                      {article.title}
                    </h2>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {article.categories.map((category, index) => (
                      <span
                        key={index}
                        className="text-xs px-3 py-1 rounded"
                        style={{
                          background: "rgba(37,63,75,0.8)",
                          color: "var(--text-secondary)",
                          border: "1px solid rgba(205,188,174,0.2)",
                        }}
                      >
                        {category.toUpperCase()}
                      </span>
                    ))}
                  </div>
                  <p className="text-legend mb-3" style={{ color: "var(--text-secondary)" }}>
                    {article.readTime}
                  </p>
                  <p className="text-para-lit" style={{ color: "var(--text-primary)" }}>
                    {article.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Filter popup */}
      {showFilterPopup && <FilterPopup onClose={() => setShowFilterPopup(false)} />}

    </div>
  )
}

// Composant pour la popup de filtre
function FilterPopup({ onClose }: { onClose: () => void }) {
  const [sortOption, setSortOption] = useState<"recent" | "old" | "unread">("recent")
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["ZODIAC"])

  const categories = ["ZODIAC", "ASTROLOGIE", "NUMEROLOGIE", "AMERINDIEN", "ELEMENTS", "TAROT", "RUNES", "CRISTAUX"]

  const handleCategoryToggle = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    } else {
      setSelectedCategories([...selectedCategories, category])
    }
  }

  const applyFilters = () => {
    // Ici, vous pourriez appliquer les filtres aux articles
    // Pour l'instant, on ferme simplement la popup
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(24,39,46,0.8)", backdropFilter: "blur(4px)" }}
    >
      <div className="relative bg-white rounded-3xl p-8 w-full max-w-sm mx-4 shadow-xl">
        {/* Close button */}
        <div className="flex justify-between items-center mb-8">
          <div></div> {/* Empty div for spacing */}
          <h2 className="text-title-med" style={{ color: "var(--background-900)" }}>
            Filtres
          </h2>
          <button onClick={onClose} style={{ color: "var(--background-900)" }}>
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Sort options */}
        <div className="mb-8">
          <h3 className="text-title-lit mb-4" style={{ color: "var(--background-900)" }}>
            TRIER PAR
          </h3>

          <div className="space-y-4">
            <label className="flex items-center" style={{ color: "var(--background-900)" }}>
              <input
                type="radio"
                checked={sortOption === "recent"}
                onChange={() => setSortOption("recent")}
                className="mr-3 h-5 w-5"
              />
              <span className="text-para-big">Les plus récents au début</span>
            </label>

            <label className="flex items-center" style={{ color: "var(--background-900)" }}>
              <input
                type="radio"
                checked={sortOption === "old"}
                onChange={() => setSortOption("old")}
                className="mr-3 h-5 w-5"
              />
              <span className="text-para-big">Les plus anciens au début</span>
            </label>

            <label className="flex items-center" style={{ color: "var(--background-900)" }}>
              <input
                type="radio"
                checked={sortOption === "unread"}
                onChange={() => setSortOption("unread")}
                className="mr-3 h-5 w-5"
              />
              <span className="text-para-big">Non lus au début</span>
            </label>
          </div>
        </div>

        {/* Filter options */}
        <div className="mb-8">
          <h3 className="text-title-lit mb-4" style={{ color: "var(--background-900)" }}>
            FILTRER
          </h3>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryToggle(category)}
                className={`border rounded px-3 py-1 text-para-lit ${
                  selectedCategories.includes(category) ? "text-white" : ""
                }`}
                style={{
                  borderColor: "var(--background-900)",
                  background: selectedCategories.includes(category) ? "var(--background-900)" : "white",
                  color: selectedCategories.includes(category) ? "white" : "var(--background-900)",
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <ButtonCustom variant="primary" onClick={applyFilters} className="w-full">
          Appliquer les filtres
        </ButtonCustom>
      </div>
    </div>
  )
}

// Données fictives pour les articles
const mockArticles: Article[] = [
  {
    id: "1",
    title: "L'origine des signes du zodiac",
    image: "/placeholder.svg?height=180&width=400",
    categories: ["zodiac", "astrologie", "numerologie"],
    readTime: "8 min de lecture",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non interdum diam. Aenean egestas felis et tristique porta. Nam elit arcu, consectetur ac magna rutrum, gravida finibus erat. Cras sed nibh sed dolo...",
    isPremium: false,
    isNew: true,
  },
  {
    id: "2",
    title: "Les heures miroirs",
    image: "/placeholder.svg?height=180&width=400",
    categories: ["numerologie"],
    readTime: "3 min de lecture",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non interdum diam. Aenean egestas felis et tristique porta. Nam elit arcu, consectetur ac magna rutrum, gravida finibus erat. Cras sed nibh sed dolo...",
    isPremium: false,
  },
  {
    id: "3",
    title: "Comment se connecter à ton animal totem ?",
    image: "/placeholder.svg?height=180&width=400",
    categories: ["amerindien"],
    readTime: "17 min de lecture",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non interdum diam. Aenean egestas felis et tristique porta. Nam elit arcu, consectetur ac magna rutrum, gravida finibus erat. Cras sed nibh sed dolo...",
    isPremium: true,
  },
  {
    id: "4",
    title: "Les cristaux et leurs pouvoirs",
    image: "/placeholder.svg?height=180&width=400",
    categories: ["cristaux", "elements"],
    readTime: "12 min de lecture",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non interdum diam. Aenean egestas felis et tristique porta. Nam elit arcu, consectetur ac magna rutrum, gravida finibus erat. Cras sed nibh sed dolo...",
    isPremium: false,
  },
  {
    id: "5",
    title: "Comprendre les phases lunaires",
    image: "/placeholder.svg?height=180&width=400",
    categories: ["astrologie", "elements"],
    readTime: "10 min de lecture",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non interdum diam. Aenean egestas felis et tristique porta. Nam elit arcu, consectetur ac magna rutrum, gravida finibus erat. Cras sed nibh sed dolo...",
    isPremium: false,
    isNew: true,
  },
]

