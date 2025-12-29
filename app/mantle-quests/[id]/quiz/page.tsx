import { QuizRoom } from "@/components/quiz-room"
import { mantleQuizData } from "@/lib/quiz-data"
import { notFound } from "next/navigation"

interface MantleQuizPageProps {
  params: Promise<{ id: string }>
}

export default async function MantleQuizPage({ params }: MantleQuizPageProps) {
  const { id } = await params
  const quiz = mantleQuizData[id]

  if (!quiz) {
    notFound()
  }

  const questions = quiz.questions.map((q) => {
    const correctAnswerIndex = q.answers.findIndex((a) => a.isCorrect)

    return {
      question: q.question,
      options: q.answers.map((a) => a.text),
      correctAnswer: correctAnswerIndex >= 0 ? correctAnswerIndex : 0,
    }
  })

  return <QuizRoom questions={questions} questId={id} questType="mantle" />
}

export async function generateStaticParams() {
  return Object.keys(mantleQuizData).map((id) => ({ id }))
}
