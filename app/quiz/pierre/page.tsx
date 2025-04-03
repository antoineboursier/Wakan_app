"use client"

import QuizTemplate from "@/components/quiz-template"

export default function PierreQuizPage() {
  // Exemple de données pour le quiz des pierres
  const quizData = {
    id: "pierre-quiz",
    title: "De quelle pierre as tu besoin en ce moment ?",
    description: "Un quiz sans mauvaise réponse, pour t'aider à savoir quelle pierre répond à ton besoin du moment !",
    image: "/placeholder.svg?height=200&width=400",
    questionCount: 9,
    questions: [
      {
        id: 1,
        question:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit ? Ipsum dolor sit amet, consectetur adipiscing elit ?",
        options: [
          { id: "A", text: "De l'eau" },
          { id: "B", text: "Du vin" },
          { id: "C", text: "Du sprite" },
          { id: "D", text: "Une pina colada !" },
        ],
      },
      {
        id: 2,
        question: "Dolor sit amet, consectetur adipiscing elit ?",
        options: [
          { id: "A", text: "De l'eau" },
          { id: "B", text: "Du vin" },
          { id: "C", text: "Du sprite" },
          { id: "D", text: "Une pina colada !" },
        ],
      },
      {
        id: 3,
        question: "Consectetur adipiscing elit, sed do eiusmod tempor ?",
        options: [
          { id: "A", text: "La montagne" },
          { id: "B", text: "La mer" },
          { id: "C", text: "La forêt" },
          { id: "D", text: "Le désert" },
        ],
      },
    ],
    results: [
      {
        title: "Améthyste",
        image: "/placeholder.svg?height=200&width=200",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a tortor est. Suspendisse bibendum dapibus tortor id pulvinar. Nulla laoreet lorem et lacus gravida, quis tempus ex porta. Duis rutrum tincidunt erat. Nulla non tempor magna. Phasellus eget tristique leo. Vestibulum tempus quam at diam tempus pulvinar.",
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

