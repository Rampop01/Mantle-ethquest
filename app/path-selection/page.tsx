import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function PathSelectionPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-[url('/dark-mystical-map-with-ancient-paths.jpg')] bg-cover bg-center"
          style={{
            filter: 'brightness(0.3) contrast(1.1) saturate(0.9)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 via-stone-900/90 to-stone-950/95" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-amber-100 font-serif">Choose Your Path</h1>
            <p className="text-lg text-amber-100/80 max-w-2xl mx-auto">
              Select your journey into the world of blockchain. Your adventure begins here.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Ethereum Path - Recommended for New Users */}
            <div className="relative group bg-stone-900/70 border border-amber-500/30 rounded-xl p-8 backdrop-blur-sm hover:bg-stone-900/90 transition-all duration-300 hover:shadow-glow-amber">
              <div className="absolute -top-3 -right-3 bg-amber-500 text-stone-900 text-xs font-bold px-3 py-1 rounded-full">
                RECOMMENDED
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-amber-300 mb-2">Ethereum Explorer</h3>
                <p className="text-amber-100/80 mb-6">
                  New to blockchain? Start with Ethereum, the foundation of decentralized applications. 
                  Learn the fundamentals in a structured, beginner-friendly way.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center text-amber-100/90">
                    <ArrowRight className="w-4 h-4 mr-2 text-amber-400" />
                    Perfect for beginners
                  </li>
                  <li className="flex items-center text-amber-100/90">
                    <ArrowRight className="w-4 h-4 mr-2 text-amber-400" />
                    Learn core blockchain concepts
                  </li>
                  <li className="flex items-center text-amber-100/90">
                    <ArrowRight className="w-4 h-4 mr-2 text-amber-400" />
                    Step-by-step guidance
                  </li>
                </ul>
              </div>
              <Link 
                href="/"
                className="inline-flex items-center justify-center w-full py-3 px-6 text-center font-medium bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-900 rounded-lg transition-all duration-200 group-hover:shadow-glow-amber"
              >
                Begin Ethereum Journey
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mantle Path - For Advanced Users */}
            <div className="relative group bg-stone-900/70 border border-blue-500/30 rounded-xl p-8 backdrop-blur-sm hover:bg-stone-900/90 transition-all duration-300 hover:shadow-glow-blue">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-blue-300 mb-2">Mantle Adventurer</h3>
                <p className="text-amber-100/80 mb-6">
                  Already familiar with blockchain? Dive into Mantle's advanced features 
                  and scaling solutions for experienced users.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center text-amber-100/90">
                    <ArrowRight className="w-4 h-4 mr-2 text-blue-400" />
                    For experienced users
                  </li>
                  <li className="flex items-center text-amber-100/90">
                    <ArrowRight className="w-4 h-4 mr-2 text-blue-400" />
                    Explore Layer 2 solutions
                  </li>
                  <li className="flex items-center text-amber-100/90">
                    <ArrowRight className="w-4 h-4 mr-2 text-blue-400" />
                    Advanced concepts and tools
                  </li>
                </ul>
              </div>
              <Link 
                href="/mantle-quests"
                className="inline-flex items-center justify-center w-full py-3 px-6 text-center font-medium bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-stone-900 rounded-lg transition-all duration-200 group-hover:shadow-glow-blue"
              >
                Start Mantle Adventure
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-amber-100/60 text-sm">
              Not sure which to choose? Start with Ethereum to learn the basics, 
              or switch paths anytime from the main menu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
