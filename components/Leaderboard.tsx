'use client';

import { useAccount } from 'wagmi';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Skeleton } from './ui/skeleton';
import { useLeaderboard, usePlayerStats } from '@/hooks/useContracts';

// Helper function to format address
function formatAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function Leaderboard() {
  const { address } = useAccount();
  
  // Fetch leaderboard data from contract
  const { data: leaderboardData, isLoading } = useLeaderboard();
  const { data: playerStats } = usePlayerStats(address);

  // Parse leaderboard data
  const formattedLeaderboard = (() => {
    if (!leaderboardData || !Array.isArray(leaderboardData)) return [];
    
    const [users, scores, ranks] = leaderboardData;
    
    if (!users || !scores || !ranks) return [];
    
    return users.map((user: string, index: number) => ({
      address: user,
      score: Number(scores[index] || 0),
      rank: Number(ranks[index] || index + 1),
    }));
  })();

  const userRank = playerStats ? Number(playerStats[3]) : null; // globalRank is the 4th element

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Leaderboard</CardTitle>
        <CardDescription>Top players by score</CardDescription>
        {userRank && (
          <div className="text-sm text-muted-foreground">
            Your rank: <span className="font-medium text-foreground">#{userRank}</span>
          </div>
        )}
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                <Skeleton className="h-4 w-1/3" />
                <Skeleton className="h-4 w-16" />
              </div>
            ))}
          </div>
        ) : formattedLeaderboard.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No leaderboard data available yet. Complete quests to appear on the leaderboard!
          </div>
        ) : (
          <div className="space-y-2">
            {formattedLeaderboard.map((user, index) => (
              <div 
                key={user.address}
                className={`flex items-center justify-between p-4 rounded-lg transition-colors ${
                  user.address === address 
                    ? 'bg-primary/10 border-primary/20' 
                    : 'border'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <span className="font-mono text-sm font-medium">
                    #{user.rank}
                  </span>
                  <span className="font-mono text-sm">
                    {formatAddress(user.address)}
                  </span>
                </div>
                <span className="font-medium">{user.score} XP</span>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
