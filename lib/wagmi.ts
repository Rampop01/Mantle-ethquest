import { http, createConfig } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { coinbaseWallet, walletConnect, metaMask, injected } from 'wagmi/connectors'
import { CONTRACT_ADDRESSES, MANTLE_NETWORK } from '@/constants/contracts'

// WalletConnect project ID - you should get this from WalletConnect Cloud
const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || ''

// Create connectors function to initialize only on client side
const getConnectors = () => {
  if (typeof window === 'undefined') {
    return []
  }
  
  const connectors = []
  
  // Always include injected connector first (this will detect MetaMask if available)
  connectors.push(injected())
  
  // Add explicit MetaMask connector as backup
  try {
    connectors.push(metaMask({
      dappMetadata: {
        name: 'Mantle EthQuest',
        url: 'https://mantlequest.app',
      },
    }))
  } catch (error) {
    console.log('MetaMask connector not available')
  }
  
  // Add Coinbase Wallet
  connectors.push(coinbaseWallet({
    appName: 'Mantle EthQuest',
    appLogoUrl: 'https://mantlequest.app/logo.png',
  }))
  
  // Add WalletConnect if project ID is available
  if (projectId) {
    connectors.push(walletConnect({ 
      projectId,
      metadata: {
        name: 'Mantle EthQuest',
        description: 'Web3 Quest Game on Mantle Network',
        url: 'https://mantlequest.app',
        icons: ['https://mantlequest.app/logo.png'],
      },
    }))
  }
  
  return connectors
}

export const config = createConfig({
  chains: [MANTLE_NETWORK, mainnet], // Use our custom Mantle chain definition
  connectors: getConnectors(),
  transports: {
    [MANTLE_NETWORK.id]: http(MANTLE_NETWORK.rpcUrls.default.http[0]),
    [mainnet.id]: http(), // Add mainnet transport for compatibility
  },
  ssr: true,
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}