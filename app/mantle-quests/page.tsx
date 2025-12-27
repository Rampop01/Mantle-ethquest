"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Lock, CheckCircle2, Sparkles, ChevronRight } from "lucide-react"
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
      icon: "🌐"
    },
    { 
      id: "2", 
      title: "Mantle's Optimistic Rollup", 
      description: "Learn about Mantle's scaling solution",
      icon: "⚡"
    },
    { 
      id: "3", 
      title: "$MNT Token & Governance", 
      description: "Understand Mantle's native token and DAO",
      icon: "🪙"
    },
    { 
      id: "4", 
      title: "Building dApps on Mantle", 
      description: "Start developing on Mantle Network",
      icon: "👨‍💻"
    },
    { 
      id: "5", 
      title: "Mantle's Ecosystem", 
      description: "Explore projects in the Mantle ecosystem",
      icon: "🌍"
    },
    { 
      id: "6", 
      title: "Data Availability Solution", 
      description: "How Mantle handles data efficiently",
      icon: "💾"
    },
    { 
      id: "7", 
      title: "Security & Decentralization", 
      description: "How Mantle maintains security",
      icon: "🔒"
    },
    { 
      id: "8", 
      title: "Bridging Assets to Mantle", 
      description: "Moving assets between chains",
      icon: "🌉"
    },
    { 
      id: "9", 
      title: "Mantle's Roadmap", 
      description: "Future developments and upgrades",
      icon: "🗺️"
    },
    { 
      id: "10", 
      title: "Mantle & Ethereum", 
      description: "Mantle's role in the broader ecosystem",
      icon: "🔗"
    },
  ]

  const getQuestStatus = (questId: string) => {
    return progress[questId] || "locked"
  }

  const getQuestClasses = (questId: string) => {
    const status = getQuestStatus(questId)
    let classes = "relative p-6 rounded-xl border-2 transition-all duration-300 transform hover:scale-[1.02] h-full flex flex-col "
    
    if (hoveredQuest === questId) {
      classes += "border-blue-400 shadow-lg shadow-blue-400/20 z-10 "
    } else {
      classes += "border-gray-700 hover:border-blue-500/50 "
    }

    if (status === "completed") {
      classes += "bg-gradient-to-br from-blue-900/30 to-purple-800/20 "
    } else if (status === "unlocked") {
      classes += "bg-gradient-to-br from-blue-900/30 to-blue-800/20 "
    } else {
      classes += "bg-gradient-to-br from-gray-800/30 to-gray-900/20 backdrop-blur-sm "
    }

    return classes
  }

  const getStatusIcon = (questId: string) => {
    const status = getQuestStatus(questId)
    
    if (status === "completed") {
      return <CheckCircle2 className="w-6 h-6 text-green-400 absolute -top-3 -right-3 bg-gray-900 rounded-full p-1 border-2 border-gray-800" />
    } else if (status === "locked") {
      return <Lock className="w-5 h-5 text-gray-500 absolute -top-2 -right-2 bg-gray-900 rounded-full p-0.5 border-2 border-gray-800" />
    } else {
      return <Sparkles className="w-5 h-5 text-blue-400 absolute -top-2 -right-2 bg-gray-900 rounded-full p-0.5 border-2 border-gray-800" />
    }
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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Mantle Network Quest Map
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
            Embark on a journey through Mantle Network. Complete quests to unlock the next chapter and earn rewards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {quests.map((quest) => {
            const status = getQuestStatus(quest.id)
            const isDisabled = status === "locked"
            
            return (
              <div 
                key={quest.id}
                className={getQuestClasses(quest.id)}
                onMouseEnter={() => setHoveredQuest(quest.id)}
                onMouseLeave={() => setHoveredQuest(null)}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="text-3xl">{quest.icon}</div>
                  {getStatusIcon(quest.id)}
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">{quest.title}</h3>
                <p className="text-gray-300 text-xs sm:text-sm mb-4 flex-grow">{quest.description}</p>
                
                <div className="mt-auto">
                  <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent my-3"></div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-400">Chapter {quest.id}</span>
                    <Button
                      variant={status === "completed" ? "outline" : "default"}
                      size="sm"
                      className={`text-xs h-7 ${
                        isDisabled 
                          ? 'opacity-50 cursor-not-allowed' 
                          : 'hover:bg-blue-600 hover:scale-105 transition-transform'
                      }`}
                      onClick={() => handleQuestClick(quest.id)}
                      disabled={isDisabled}
                    >
                      {status === "completed" ? (
                        <span className="flex items-center">
                          <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> Completed
                        </span>
                      ) : status === "unlocked" ? (
                        <span className="flex items-center">
                          Start <ChevronRight className="w-3.5 h-3.5 ml-1" />
                        </span>
                      ) : (
                        <Lock className="w-3 h-3 mr-1" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-gray-400 text-sm mb-4">Ready to dive deeper into Mantle?</p>
          <a 
            href="https://www.mantle.xyz/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition-opacity text-sm sm:text-base"
          >
            <span>Join Mantle Community</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
