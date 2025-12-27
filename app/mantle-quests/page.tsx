"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { 
  Lock, 
  CheckCircle2, 
  Sparkles, 
  ChevronRight, 
  Globe, 
  Zap, 
  Coins, 
  Code, 
  Globe2, 
  HardDrive, 
  Shield, 
  GitBranch,
  Map,
  Link2
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface QuestProgress {
  [key: string]: "locked" | "unlocked" | "completed"
}

export default function MantleQuestsPage() {
  const router = useRouter()
  const [progress, setProgress] = useState<QuestProgress>({})
  const [hoveredQuest, setHoveredQuest] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const savedProgress = localStorage.getItem("mantleQuestProgress")
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress))
    } else {
      const initialProgress: QuestProgress = {}
      for (let i = 1; i <= 10; i++) {
        initialProgress[i] = i === 1 ? "unlocked" : "locked"
      }
      localStorage.setItem("mantleQuestProgress", JSON.stringify(initialProgress))
      setProgress(initialProgress)
    }
    setIsLoading(false)
  }, [])

  const handleQuestClick = (questId: string) => {
    const status = progress[questId]
    if (status === "locked") {
      return
    }
    router.push(`/mantle-quests/${questId}`)
  }

  const quests = [
    { 
      id: "1", 
      title: "Mantle Network Fundamentals", 
      description: "Discover the core concepts of Mantle Network",
      icon: Globe
    },
    { 
      id: "2", 
      title: "Mantle's Optimistic Rollup", 
      description: "Learn about Mantle's scaling solution",
      icon: Zap
    },
    { 
      id: "3", 
      title: "$MNT Token & Governance", 
      description: "Understand Mantle's native token and DAO",
      icon: Coins
    },
    { 
      id: "4", 
      title: "Building dApps on Mantle", 
      description: "Start developing on Mantle Network",
      icon: Code
    },
    { 
      id: "5", 
      title: "Mantle's Ecosystem", 
      description: "Explore projects in the Mantle ecosystem",
      icon: Globe2
    },
    { 
      id: "6", 
      title: "Data Availability Solution", 
      description: "How Mantle handles data efficiently",
      icon: HardDrive
    },
    { 
      id: "7", 
      title: "Security & Decentralization", 
      description: "How Mantle maintains security",
      icon: Shield
    },
    { 
      id: "8", 
      title: "Bridging Assets to Mantle", 
      description: "Moving assets between chains",
      icon: GitBranch
    },
    { 
      id: "9", 
      title: "Mantle's Roadmap", 
      description: "Future developments and upgrades",
      icon: Map
    },
    { 
      id: "10", 
      title: "Mantle & Ethereum", 
      description: "Mantle's role in the broader ecosystem",
      icon: Link2
    },
  ]

  const getQuestStatus = (questId: string) => {
    return progress[questId] || "locked"
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center">
        <div className="animate-pulse text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-blue-400">Loading your Mantle journey...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-stone-dark relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,182,255,0.1),transparent_50%)] animate-glow-pulse" />
      <div className="absolute inset-0 bg-[url('/dark-mystical-map-with-ancient-paths.jpg')] bg-cover bg-center opacity-20" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-[family-name:var(--font-cinzel-decorative)] text-4xl md:text-6xl font-bold text-blue-400 mb-4 text-glow-md">
            Mantle Quest Map
          </h1>
          <p className="font-[family-name:var(--font-cinzel)] text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Journey through the ancient knowledge of Mantle Network
          </p>
        </div>

        {/* Quest path */}
        <div className="max-w-4xl mx-auto space-y-6 pb-12">
          {quests.map((quest, index) => {
            const status = progress[quest.id] || "locked"
            const isLocked = status === "locked"
            const isCompleted = status === "completed"

            return (
              <div key={quest.id}>
                {/* Connecting path */}
                {index > 0 && (
                  <div className="flex justify-center my-3">
                    <div
                      className={`w-1 h-12 ${
                        progress[quests[index - 1].id] === "completed"
                          ? "bg-gradient-to-b from-blue-400 to-purple-500"
                          : "bg-border"
                      }`}
                    />
                  </div>
                )}

                {/* Quest card */}
                <div
                  className={`relative group ${isLocked ? "cursor-not-allowed" : "cursor-pointer"}`}
                  onMouseEnter={() => setHoveredQuest(quest.id)}
                  onMouseLeave={() => setHoveredQuest(null)}
                  onClick={() => handleQuestClick(quest.id)}
                >
                  <div
                    className={`relative bg-card/80 backdrop-blur-sm border-2 rounded-xl p-4 md:p-6 transition-all duration-300 ${
                      isLocked
                        ? "border-border opacity-60"
                        : isCompleted
                          ? "border-blue-400 shadow-lg shadow-blue-400/20"
                          : "border-purple-500 shadow-lg shadow-purple-500/20 hover:scale-105"
                    }`}
                  >
                    {/* Glow effect on hover */}
                    {!isLocked && hoveredQuest === quest.id && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-500/20 to-blue-400/20 rounded-xl animate-glow-pulse" />
                    )}

                    <div className="relative flex items-center gap-4 md:gap-6">
                      {/* Status icon */}
                      <div className="flex-shrink-0">
                        {isLocked ? (
                          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-secondary/50 border-2 border-border flex items-center justify-center">
                            <Lock className="w-6 h-6 md:w-8 md:h-8 text-muted-foreground" />
                          </div>
                        ) : isCompleted ? (
                          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-400/20 border-2 border-blue-400 flex items-center justify-center animate-glow-pulse">
                            <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
                          </div>
                        ) : (
                          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-purple-500/20 border-2 border-purple-500 flex items-center justify-center animate-glow-pulse">
                            <quest.icon className="w-6 h-6 md:w-8 md:h-8 text-purple-400" />
                          </div>
                        )}
                      </div>

                      {/* Quest info */}
                      <div className="flex-1 min-w-0">
                        <h2 className="font-[family-name:var(--font-cinzel-decorative)] text-lg md:text-2xl font-bold mb-1 truncate">
                          {isCompleted ? (
                            <span className="text-blue-400">
                              Chapter {quest.id}: {quest.title}
                            </span>
                          ) : isLocked ? (
                            <span className="text-muted-foreground">Chapter {quest.id}: ???</span>
                          ) : (
                            <span className="text-purple-300">
                              Chapter {quest.id}: {quest.title}
                            </span>
                          )}
                        </h2>
                        <p className="font-[family-name:var(--font-cinzel)] text-sm md:text-base text-muted-foreground">
                          {isLocked ? "Complete the previous chapter to unlock" : quest.description}
                        </p>
                      </div>

                      {/* Arrow indicator */}
                      {!isLocked && (
                        <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                          <svg
                            className="w-6 h-6 md:w-8 md:h-8 text-foreground"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Completion status badge */}
                    {isCompleted && (
                      <div className="absolute -top-2 -right-2 bg-blue-400 text-stone-dark font-[family-name:var(--font-cinzel)] text-xs font-bold px-2 py-1 rounded-full border-2 border-background shadow-lg shadow-blue-400/30">
                        COMPLETED
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Back to home button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            onClick={() => router.push('/')}
            className="font-[family-name:var(--font-cinzel)] border-blue-400 text-blue-400 hover:bg-blue-400/10 hover:border-blue-300 hover:text-blue-300 transition-colors"
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  )
}
