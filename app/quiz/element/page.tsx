"use client"

import QuizTemplate from "@/components/quiz-template"

export default function ElementQuizPage() {
  // Exemple de données pour le quiz des éléments
  const quizData = {
    id: "element-quiz",
    title: "Quel est ton élément ?",
    description: "Feu, terre, eau... Quel élément naturel fait de toi ce que tu es ?",
    image: "/placeholder.svg?height=200&width=400",
    questionCount: 7,
    questions: [
      {
        id: 1,
        question: "Quelle saison préfères-tu ?",
        options: [
          { id: "A", text: "L'été" },
          { id: "B", text: "L'automne" },
          { id: "C", text: "L'hiver" },
          { id: "D", text: "Le printemps" },
        ],
      },
      {
        id: 2,
        question: "Quel animal te correspond le plus ?",
        options: [
          { id: "A", text: "Le lion" },
          { id: "B", text: "Le loup" },
          { id: "C", text: "Le dauphin" },
          { id: "D", text: "L'aigle" },
        ],
      },
      {
        id: 3,
        question: "Quelle couleur te représente le mieux ?",
        options: [
          { id: "A", text: "Rouge" },
          { id: "B", text: "Vert" },
          { id: "C", text: "Bleu" },
          { id: "D", text: "Blanc" },
        ],
      },
    ],
    results: [
      {
        title: "Feu",
        image: "/placeholder.svg?height=200&width=200",
        description:
          "Tu es passionné, énergique et déterminé. Le feu représente ton esprit ardent et ta capacité à inspirer les autres. Tu es naturellement un leader qui n'a pas peur de prendre des risques et de suivre ses passions.",
      },
    ],
  }

  return (
    <QuizTemplate
      id={quizData.id}
      title={quizData.title}
      description={quizData.description}
      image={quizData.image}
      questionCount={quizData.questionCount}
      questions={quizData.questions}
      results={quizData.results}
    />
  )
}

