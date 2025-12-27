import { AncientScroll } from "@/components/ancient-scroll"
import { mantleScrollContent } from "@/lib/mantle-quest-data"
import { notFound } from "next/navigation"

interface ScrollPageProps {
  params: Promise<{ id: string }>
}

export default async function MantleScrollPage({ params }: ScrollPageProps) {
  const { id } = await params
  const scrollData = mantleScrollContent[id]

  if (!scrollData) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-stone-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/ancient-library-dark-mystical.jpg')] bg-cover bg-center" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/50 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.6 + Math.random() * 0.4,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <AncientScroll
          title={scrollData.title}
          content={scrollData.content}
          analogy={scrollData.analogy}
          nextUrl={`/mantle-quests/${id}/room`}
          className="bg-gradient-to-br from-blue-900/30 to-purple-900/20"
        />
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return Object.keys(mantleScrollContent).map((id) => ({
    id,
  }))
}
