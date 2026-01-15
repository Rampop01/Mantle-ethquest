// Smart Contract Addresses on Mantle Network
export const CONTRACT_ADDRESSES = {
  // Mantle Network (Chain ID: 5003)
  MANTLE: {
    XP_TOKEN: '0xd9fc6cC979472A5FA52750ae26805462E1638872' as `0x${string}`,
    CHAPTER_NFT: '0x274f499201b0716e6CB632FF5BEc10cAD508eAD6' as `0x${string}`,
    LEADERBOARD: '0x3A89A1611B309cD883a22C99463936fC4a0deE03' as `0x${string}`,
    GAME_CORE: '0xAa1deb4Cc3c3386D813E7f7b2fF52a7c4EFB675e' as `0x${string}`,
    REWARD_SIGNER: '0xb216270aFB9DfcD611AFAf785cEB38250863F2C9' as `0x${string}`,
  }
} as const;

// Mantle Network Configuration
export const MANTLE_NETWORK = {
  id: 5003,
  name: 'Mantle',
  network: 'mantle',
  nativeCurrency: {
    decimals: 18,
    name: 'Mantle',
    symbol: 'MNT',
  },
  rpcUrls: {
    public: { http: ['https://rpc.mantle.xyz'] },
    default: { http: ['https://rpc.mantle.xyz'] },
  },
  blockExplorers: {
    default: { name: 'Mantle Explorer', url: 'https://explorer.mantle.xyz' },
  },
} as const;

// Quest Types Enum (matches smart contract)
export enum QuestType {
  ETHEREUM = 0,
  MANTLE = 1
}

// Contract Function Names for easy reference
export const CONTRACT_FUNCTIONS = {
  GAME_CORE: {
    CLAIM_PROGRESS: 'claimProgress',
    GET_QUEST_PROGRESS: 'getQuestProgress',
    IS_COMPLETED: 'isCompleted',
    GET_USER_TOTAL_XP: 'getUserTotalXP',
    CALCULATE_REWARD: 'calculateReward',
    IS_CHAPTER_COMPLETED: 'isChapterCompleted',
    GET_USER_COMPLETED_QUESTS: 'getUserCompletedQuests',
  },
  LEADERBOARD: {
    GET_LEADERBOARD: 'getLeaderboard',
    GET_PLAYER_STATS: 'getPlayerStats',
    GET_PLAYER_TOTAL_XP: 'getPlayerTotalXP',
    GET_PLAYER_RANK: 'getPlayerRank',
    GET_TOP_PLAYERS: 'getTopPlayers',
    UPDATE_SCORE: 'updateScore',
  }
} as const;