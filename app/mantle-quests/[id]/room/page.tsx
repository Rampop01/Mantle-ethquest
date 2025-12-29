import { QuestRoom } from "@/components/quest-room"
import { mantleQuestRooms } from "@/lib/mantle-rooms"
import { notFound } from "next/navigation"

interface MantleQuestRoomPageProps {
  params: Promise<{ id: string }>
}

export default async function MantleQuestRoomPage({ params }: MantleQuestRoomPageProps) {
  const { id } = await params
  const questData = mantleQuestRooms[id as keyof typeof mantleQuestRooms]

  if (!questData) {
    notFound()
  }

  return <QuestRoom questData={{ word: questData.word, letters: [...questData.letters] }} questId={id} questType="mantle" />
}

export async function generateStaticParams() {
  return Object.keys(mantleQuestRooms).map((id) => ({ id }))
}