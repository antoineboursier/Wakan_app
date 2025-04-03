"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { ArrowLeft, Share2, UserPlus, X, HelpCircle, ArrowRight } from "lucide-react"
import BottomNavigation from "@/components/bottom-navigation"

interface QuizQuestion {
  id: number
  question: string
  options: {
    id: string
    text: string
  }[]
}

interface QuizResult {
  title: string
  image: string
  description: string
}

interface QuizTemplateProps {
  id: string
  title: string
  description: string
  image: string
  questionCount: number
  questions: QuizQuestion[]
  results: QuizResult[]
  onBack?: () => void
}

export default function QuizTemplate({
  id,
  title,
  description,
  image,
  questionCount,
  questions,
  results,
  onBack = () => window.history.back(),
}: QuizTemplateProps) {
  const router = useRouter()
  const [started, setStarted] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<{ [key: number]: string }>({})
  const [showResult, setShowResult] = useState(false)
  const [result, setResult] = useState<QuizResult | null>(null)

  const currentQuestion = questions[currentQuestionIndex]
  const isFirstQuestion = currentQuestionIndex === 0
  const isLastQuestion = currentQuestionIndex === questions.length - 1

  // Determine result based on answers
  const determineResult = () => {
    // In a real app, this would have logic to calculate the result based on answers
    // For now, we'll just return the first result
    return results[0]
  }

  const handleStartQuiz = () => {
    setStarted(true)
  }

  const handleSelectAnswer = (questionId: number, optionId: string) => {
    setAnswers({
      ...answers,
      [questionId]: optionId,
    })

    // Move to next question after a short delay
    setTimeout(() => {
      if (isLastQuestion) {
        showQuizResult()
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
      }
    }, 500)
  }

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  const showQuizResult = () => {
    const calculatedResult = determineResult()
    setResult(calculatedResult)
    setShowResult(true)
  }

  const handleQuitQuiz = () => {
    onBack()
  }

  const handleReturnToQuizzes = () => {
    router.push("/quiz")
  }

  // Render start screen
  if (!started && !showResult) {
    return (
      <div className="relative flex flex-col min-h-screen bg-gradient-to-b from-[#18272e] to-[#1c3039] text-white overflow-hidden">
        {/* Background with blurred image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=400')] bg-cover bg-center opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#18272e]/70 to-[#18272e]/90"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center w-full h-full px-4 pt-6 pb-20">
          {/* Header */}
          <div className="w-full flex justify-between items-center mb-8">
            <button onClick={onBack} className="text-[#cdbcae] flex items-center">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Retour
            </button>
          </div>

          {/* Quiz intro content */}
          <div className="w-full max-w-md flex flex-col items-center text-center">
            <div className="mb-6 w-full">
              <Image
                src={image || "/placeholder.svg?height=200&width=400"}
                alt={title}
                width={400}
                height={200}
                className="w-full h-[200px] object-cover rounded-lg"
              />
            </div>

            <h2 className="text-4xl font-bold text-[#f6ae31] mb-6">{title}</h2>

            <p className="text-center text-[#f4efeb] mb-8">{description}</p>

            <p className="text-[#f6ae31] text-2xl font-bold mb-8">{questionCount} questions</p>

            <button
              onClick={handleStartQuiz}
              className="bg-gradient-to-r from-[#f1ba5b] to-[#f5ce8a] text-[#18272e] font-bold px-8 py-3 rounded-full flex items-center"
            >
              Prêt à démarrer le quiz ?
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Bottom navigation */}
        <BottomNavigation activeTab="quiz" />
      </div>
    )
  }

  // Render result screen
  if (showResult && result) {
    return (
      <div className="relative flex flex-col min-h-screen bg-gradient-to-b from-[#18272e] to-[#1c3039] text-white overflow-hidden">
        {/* Background with blurred image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=400')] bg-cover bg-center opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#18272e]/70 to-[#18272e]/90"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center w-full h-full px-4 pt-6 pb-20">
          {/* Header */}
          <div className="w-full flex justify-between items-center mb-8">
            <button onClick={onBack} className="text-[#cdbcae] flex items-center">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Retour
            </button>
            <div className="flex space-x-4">
              <button className="text-[#cdbcae]">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="text-[#cdbcae]">
                <UserPlus className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Result content */}
          <div className="w-full max-w-md flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold text-[#f6ae31] mb-6">Ta pierre du moment :</h2>

            <div className="mb-6">
              <Image
                src={result.image || "/placeholder.svg?height=200&width=200"}
                alt={result.title}
                width={200}
                height={200}
                className="rounded-lg"
              />
            </div>

            <h3 className="text-4xl font-bold text-[#f6ae31] mb-6">{result.title}</h3>

            <p className="text-center text-[#f4efeb] mb-12">{result.description}</p>

            <button
              onClick={handleReturnToQuizzes}
              className="bg-gradient-to-r from-[#f1ba5b] to-[#f5ce8a] text-[#18272e] font-bold px-8 py-3 rounded-full flex items-center"
            >
              Retour au quizs
              <HelpCircle className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Bottom navigation */}
        <BottomNavigation activeTab="quiz" />
      </div>
    )
  }

  // Render question screen
  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-b from-[#18272e] to-[#1c3039] text-white overflow-hidden">
      {/* Background with blurred image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=400')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#18272e]/70 to-[#18272e]/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full h-full px-4 pt-6 pb-20">
        {/* Header */}
        <div className="w-full flex justify-between items-center mb-4">
          <div></div> {/* Empty div for spacing */}
          <button onClick={handleQuitQuiz} className="text-[#cdbcae] flex items-center">
            Quitter le quiz <X className="ml-2 w-5 h-5" />
          </button>
        </div>

        {/* Question header */}
        <div className="w-full max-w-md mb-6">
          <div className="flex items-center mb-2">
            <div className="w-16 h-16 mr-4">
              <Image
                src={image || "/placeholder.svg?height=64&width=64"}
                alt="Quiz icon"
                width={64}
                height={64}
                className="rounded-lg"
              />
            </div>
            <div>
              <p className="text-[#cdbcae]">Ta pierre du moment</p>
              <h3 className="text-xl font-bold">
                QUESTION {currentQuestionIndex + 1} SUR {questions.length}
              </h3>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full h-2 bg-[#253f4b] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#f6ae31]"
              style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question content */}
        <div className="w-full max-w-md flex flex-col items-center">
          <h2 className="text-2xl font-bold text-[#f6ae31] text-center mb-12">{currentQuestion.question}</h2>

          {/* Options */}
          <div className="w-full space-y-4 mb-8">
            {currentQuestion.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleSelectAnswer(currentQuestion.id, option.id)}
                className={`w-full text-left border border-[#f6ae31] rounded-full p-4 transition-colors
                  ${
                    answers[currentQuestion.id] === option.id
                      ? "bg-gradient-to-r from-[#f1ba5b] to-[#f5ce8a] text-[#18272e]"
                      : "bg-[#18272e] text-white hover:bg-[#253f4b]"
                  }`}
              >
                <span className="font-bold">{option.id}.</span> {option.text}
              </button>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="w-full flex justify-between">
            {!isFirstQuestion && (
              <button onClick={handlePreviousQuestion} className="text-[#cdbcae] flex items-center">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Question précédente
              </button>
            )}

            {isLastQuestion && answers[currentQuestion.id] && (
              <button onClick={showQuizResult} className="ml-auto text-[#f6ae31] flex items-center">
                Obtenir mon résultat
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Bottom navigation */}
      <BottomNavigation activeTab="quiz" />
    </div>
  )
}

