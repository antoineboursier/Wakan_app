"use client"

import QuizTemplate from "@/components/quiz-template"

export default function TotemQuizPage() {
  // Exemple de données pour le quiz des animaux totems
  const quizData = {
    id: "totem-quiz",
    title: "Quel est ton animal totem ?",
    description: "Le chamanisme indien à ta porte : trouve quel animal sommeille en toi !",
    image: "/placeholder.svg?height=200&width=400",
    questionCount: 10,
    questions: [
      {
        id: 1,
        question: "Comment réagis-tu face à un danger ?",
        options: [
          { id: "A", text: "Je fais face et je me bats" },
          { id: "B", text: "Je m'enfuis pour me protéger" },
          { id: "C", text: "J'observe et j'analyse avant d'agir" },
          { id: "D", text: "Je cherche de l'aide auprès des autres" },
        ],
      },
      {
        id: 2,
        question: "Quel environnement te correspond le mieux ?",
        options: [
          { id: "A", text: "La forêt dense" },
          { id: "B", text: "Les montagnes" },
          { id: "C", text: "L'océan" },
          { id: "D", text: "Les plaines ouvertes" },
        ],
      },
      {
        id: 3,
        question: "Quelle qualité te définit le mieux ?",
        options: [
          { id: "A", text: "La sagesse" },
          { id: "B", text: "La force" },
          { id: "C", text: "L'adaptabilité" },
          { id: "D", text: "La loyauté" },
        ],
      },
    ],
    results: [
      {
        title: "Loup",
        image: "/placeholder.svg?height=200&width=200",
        description:
          "Le loup est ton animal totem. Il symbolise l'instinct, l'intelligence et la liberté. Tu as un fort sens de la famille et de la communauté, tout en gardant ton indépendance. Ta loyauté est sans faille pour ceux que tu considères comme ta meute.",
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

