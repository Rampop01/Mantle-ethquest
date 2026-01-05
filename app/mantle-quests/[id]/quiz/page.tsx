import { QuizRoom } from "@/components/quiz-room"
import { mantleQuizData } from "@/lib/mantle-quest-data"
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

  return <QuizRoom questions={quiz} questId={id} />
}

export async function generateStaticParams() {
  return Object.keys(mantleQuizData).map((id) => ({ id }))
}
