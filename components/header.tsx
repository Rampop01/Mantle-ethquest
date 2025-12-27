'use client';

import Link from 'next/link';
import { WalletConnectButton } from './WalletConnectButton';
import { cn } from '@/lib/utils';

const navigation = [
  { 
    name: 'Ethereum Quests', 
    href: '/',
    icon: '🌐'
  },
  { 
    name: 'Mantle Quests', 
    href: '/mantle-quests',
    icon: '⛓️',
    isNew: true
  },
  { 
    name: 'Marketplace', 
    href: '/marketplace',
    icon: '🏪'
  },
  { 
    name: 'Leaderboard', 
    href: '/leaderboard',
    icon: '🏆'
  },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-cinzel text-xl font-bold">Ethereum Quest</span>
          </Link>
          
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
{navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-2 transition-colors hover:text-foreground/80 px-3 py-2 rounded-md',
                    typeof window !== 'undefined' && window.location.pathname === item.href
                      ? 'bg-accent text-accent-foreground'
                      : 'text-foreground/60 hover:bg-accent/50'
                  )}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                  {item.isNew && (
                    <span className="ml-2 px-2 py-0.5 text-xs font-medium rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                      New
                    </span>
                  )}
                </Link>
              </div>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <WalletConnectButton />
        </div>
      </div>
    </header>
  );
}
