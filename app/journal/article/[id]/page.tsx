"use client"

import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import Image from "next/image"
import { ArrowLeft, Share2, Lock } from "lucide-react"
import BottomNavigation from "@/components/bottom-navigation"

// Types pour les articles
interface Article {
  id: string
  title: string
  image: string
  categories: string[]
  readTime: string
  content: {
    type: "paragraph" | "title" | "image"
    content: string
    level?: number
  }[]
  relatedArticles: {
    id: string
    title: string
    image: string
    isPremium: boolean
  }[]
  isPremium: boolean
}

export default function ArticlePage() {
  const router = useRouter()
  const params = useParams()
  const id = params.id as string
  const [article, setArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simuler le chargement de l'article depuis une API
    const fetchArticle = async () => {
      setLoading(true)
      // Dans une application réelle, vous feriez un appel API ici
      // Pour l'instant, on utilise des données fictives
      const mockArticle = mockArticles.find((a) => a.id === id)

      if (mockArticle) {
        setArticle(mockArticle)
      } else {
        // Article non trouvé, rediriger vers la page du journal
        router.push("/journal")
      }

      setLoading(false)
    }

    fetchArticle()
  }, [id, router])

  if (loading || !article) {
    return (
      <div className="relative flex flex-col min-h-screen">
        <div
          className="absolute inset-0 z-0 overflow-hidden"
          style={{
            background: "linear-gradient(180deg, var(--background-900) 0%, var(--background-800) 100%)",
          }}
        >
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=400')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(24,39,46,0.7)] to-[rgba(28,48,57,0.9)]"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-screen">
          <div
            className="w-12 h-12 border-4 border-t-transparent rounded-full animate-spin"
            style={{ borderColor: "var(--accent-900)", borderTopColor: "transparent" }}
          ></div>
        </div>
      </div>
    )
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
        {/* Header */}
        <div className="w-full flex justify-between items-center mb-6">
          <button
            onClick={() => router.back()}
            className="flex items-center"
            style={{ color: "var(--text-secondary)" }}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="text-para-lit">Retour</span>
          </button>
          <div className="flex space-x-4">
            <button style={{ color: "var(--text-secondary)" }}>
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Article header */}
        <div className="mb-6">
          <Image
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            width={400}
            height={300}
            className="w-full h-[300px] object-cover rounded-lg mb-4"
          />

          <h1 className="text-title-big mb-4" style={{ color: "var(--accent-900)" }}>
            {article.title}
          </h1>

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
        </div>

        {/* Article content */}
        <div className="mb-8">
          {article.content.map((block, index) => {
            switch (block.type) {
              case "paragraph":
                return (
                  <p key={index} className="text-para mb-4" style={{ color: "var(--text-primary)" }}>
                    {block.content}
                  </p>
                )
              case "title":
                return block.level === 2 ? (
                  <h2 key={index} className="text-title-med mb-4 mt-6" style={{ color: "var(--accent-900)" }}>
                    {block.content}
                  </h2>
                ) : (
                  <h3 key={index} className="text-title-lit mb-3 mt-5" style={{ color: "var(--accent-900)" }}>
                    {block.content}
                  </h3>
                )
              case "image":
                return (
                  <div key={index} className="my-6">
                    <Image
                      src={block.content || "/placeholder.svg"}
                      alt="Article illustration"
                      width={400}
                      height={200}
                      className="w-full rounded-lg"
                    />
                  </div>
                )
              default:
                return null
            }
          })}
        </div>

        {/* Decorative element */}
        <div className="relative w-12 h-12 mx-auto mb-6">
          <div
            className="absolute inset-0 rounded-full border-2 border-dashed"
            style={{ borderColor: "var(--accent-900)/50" }}
          ></div>
          <div className="absolute inset-2 rounded-full border-2" style={{ borderColor: "var(--accent-900)" }}></div>
          <div className="absolute inset-4 rounded-full" style={{ background: "var(--accent-900)" }}></div>
        </div>

        {/* Related articles */}
        {article.relatedArticles.length > 0 && (
          <div className="mb-8">
            <h3 className="text-title-lit mb-4" style={{ color: "var(--accent-900)" }}>
              À découvrir également :
            </h3>

            <div className="space-y-4">
              {article.relatedArticles.map((relatedArticle) => (
                <div
                  key={relatedArticle.id}
                  className="flex items-center rounded-lg p-3 cursor-pointer border border-[rgba(205,188,174,0.15)]"
                  onClick={() => router.push(`/journal/article/${relatedArticle.id}`)}
                  style={{ background: "rgba(28,48,57,0.6)" }}
                >
                  <div className="relative w-16 h-16 mr-3 flex-shrink-0">
                    <Image
                      src={relatedArticle.image || "/placeholder.svg"}
                      alt={relatedArticle.title}
                      width={64}
                      height={64}
                      className="rounded-md object-cover w-full h-full"
                    />
                    {relatedArticle.isPremium && (
                      <div
                        className="absolute top-0 right-0 p-1 rounded-bl-md backdrop-blur-sm"
                        style={{ background: "rgba(24,39,46,0.6)" }}
                      >
                        <Lock className="w-3 h-3" style={{ color: "var(--text-secondary)" }} />
                      </div>
                    )}
                  </div>
                  <h4 className="font-bold text-para" style={{ color: "var(--text-primary)" }}>
                    {relatedArticle.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom navigation */}
      <BottomNavigation activeTab="journal" />
    </div>
  )
}

// Données fictives pour les articles
const mockArticles: Article[] = [
  {
    id: "1",
    title: "L'origine des signes du zodiac",
    image: "/placeholder.svg?height=300&width=400",
    categories: ["zodiac", "astrologie", "numerologie"],
    readTime: "8 min de lecture",
    content: [
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non interdum diam. Aenean egestas felis et tristique porta. Nam elit arcu, consectetur ac magna rutrum, gravida finibus erat. Cras sed nibh sed dolor vehicula pulvinar. Nulla laoreet lorem et lacus gravida, quis tempus ex porta. Duis rutrum tincidunt erat. Nulla non tempor magna. Phasellus eget tristique leo. Vestibulum tempus quam at diam tempus pulvinar.",
      },
      {
        type: "title",
        content: "Titre 2",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non interdum diam. Aenean egestas felis et tristique porta. Nam elit arcu, consectetur ac magna rutrum, gravida finibus erat.",
      },
      {
        type: "paragraph",
        content:
          "Cras sed nibh sed dolor vehicula pulvinar. Nulla laoreet lorem et lacus gravida, quis tempus ex porta. Duis rutrum tincidunt erat. Nulla non tempor magna. Phasellus eget tristique leo. Vestibulum tempus quam at diam tempus pulvinar.",
      },
      {
        type: "image",
        content: "/placeholder.svg?height=200&width=400",
      },
      {
        type: "title",
        content: "Titre 3",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non interdum diam. Aenean egestas felis et tristique porta. Nam elit arcu, consectetur ac magna rutrum, gravida finibus erat.",
      },
    ],
    relatedArticles: [
      {
        id: "2",
        title: "Les heures miroirs",
        image: "/placeholder.svg?height=64&width=64",
        isPremium: false,
      },
      {
        id: "3",
        title: "Comment se connecter à ton animal totem ?",
        image: "/placeholder.svg?height=64&width=64",
        isPremium: true,
      },
    ],
    isPremium: false,
  },
  {
    id: "2",
    title: "Les heures miroirs",
    image: "/placeholder.svg?height=300&width=400",
    categories: ["numerologie"],
    readTime: "3 min de lecture",
    content: [
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non interdum diam. Aenean egestas felis et tristique porta. Nam elit arcu, consectetur ac magna rutrum, gravida finibus erat. Cras sed nibh sed dolor vehicula pulvinar. Nulla laoreet lorem et lacus gravida, quis tempus ex porta. Duis rutrum tincidunt erat. Nulla non tempor magna. Phasellus eget tristique leo. Vestibulum tempus quam at diam tempus pulvinar.",
      },
      {
        type: "title",
        content: "Signification des heures miroirs",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non interdum diam. Aenean egestas felis et tristique porta. Nam elit arcu, consectetur ac magna rutrum, gravida finibus erat.",
      },
    ],
    relatedArticles: [
      {
        id: "1",
        title: "L'origine des signes du zodiac",
        image: "/placeholder.svg?height=64&width=64",
        isPremium: false,
      },
      {
        id: "5",
        title: "Comprendre les phases lunaires",
        image: "/placeholder.svg?height=64&width=64",
        isPremium: false,
      },
    ],
    isPremium: false,
  },
  {
    id: "3",
    title: "Comment se connecter à ton animal totem ?",
    image: "/placeholder.svg?height=300&width=400",
    categories: ["amerindien"],
    readTime: "17 min de lecture",
    content: [
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non interdum diam. Aenean egestas felis et tristique porta. Nam elit arcu, consectetur ac magna rutrum, gravida finibus erat. Cras sed nibh sed dolor vehicula pulvinar. Nulla laoreet lorem et lacus gravida, quis tempus ex porta. Duis rutrum tincidunt erat. Nulla non tempor magna. Phasellus eget tristique leo. Vestibulum tempus quam at diam tempus pulvinar.",
      },
    ],
    relatedArticles: [
      {
        id: "1",
        title: "L'origine des signes du zodiac",
        image: "/placeholder.svg?height=64&width=64",
        isPremium: false,
      },
    ],
    isPremium: true,
  },
  {
    id: "4",
    title: "Les cristaux et leurs pouvoirs",
    image: "/placeholder.svg?height=300&width=400",
    categories: ["cristaux", "elements"],
    readTime: "12 min de lecture",
    content: [
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non interdum diam. Aenean egestas felis et tristique porta. Nam elit arcu, consectetur ac magna rutrum, gravida finibus erat. Cras sed nibh sed dolor vehicula pulvinar. Nulla laoreet lorem et lacus gravida, quis tempus ex porta. Duis rutrum tincidunt erat. Nulla non tempor magna. Phasellus eget tristique leo. Vestibulum tempus quam at diam tempus pulvinar.",
      },
    ],
    relatedArticles: [
      {
        id: "5",
        title: "Comprendre les phases lunaires",
        image: "/placeholder.svg?height=64&width=64",
        isPremium: false,
      },
    ],
    isPremium: false,
  },
  {
    id: "5",
    title: "Comprendre les phases lunaires",
    image: "/placeholder.svg?height=300&width=400",
    categories: ["astrologie", "elements"],
    readTime: "10 min de lecture",
    content: [
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non interdum diam. Aenean egestas felis et tristique porta. Nam elit arcu, consectetur ac magna rutrum, gravida finibus erat. Cras sed nibh sed dolor vehicula pulvinar. Nulla laoreet lorem et lacus gravida, quis tempus ex porta. Duis rutrum tincidunt erat. Nulla non tempor magna. Phasellus eget tristique leo. Vestibulum tempus quam at diam tempus pulvinar.",
      },
    ],
    relatedArticles: [
      {
        id: "1",
        title: "L'origine des signes du zodiac",
        image: "/placeholder.svg?height=64&width=64",
        isPremium: false,
      },
      {
        id: "2",
        title: "Les heures miroirs",
        image: "/placeholder.svg?height=64&width=64",
        isPremium: false,
      },
      {
        id: "4",
        title: "Les cristaux et leurs pouvoirs",
        image: "/placeholder.svg?height=64&width=64",
        isPremium: false,
      },
    ],
    isPremium: false,
  },
]

