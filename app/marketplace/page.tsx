import { Suspense } from 'react';
import { NFTGrid } from '@/components/marketplace/nft-grid';
import { MarketplaceFilters } from '@/components/marketplace/marketplace-filters';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata = {
  title: 'NFT Marketplace - Mantle Quest',
  description: 'Trade exclusive NFTs and collectibles from your Mantle journey',
};

const featuredNFT = {
  id: 'featured-1',
  name: 'Mystic Mantle Dragon',
  description: 'A rare dragon egg infused with the power of Mantle Network',
  image: '/nfts/mantle-dragon.png',
  price: '0.5',
  seller: '0xmantle...quest',
  rarity: 'legendary',
  category: 'pets',
};

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/10">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-cyan-900/30 to-purple-900/20">
        <div className="container py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-[family-name:var(--font-cinzel-decorative)]">
                Discover & Collect
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mt-2">
                  Exclusive NFTs
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Trade unique digital assets, complete your collection, and earn rewards in our
                decentralized marketplace.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700">
                  <Link href="#marketplace">Explore</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-cyan-400 text-foreground hover:bg-cyan-900/30">
                  <Link href="/my-nfts">My Collection</Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="relative aspect-square w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl -rotate-6 scale-95"></div>
                <div className="relative bg-background/80 p-2 rounded-2xl shadow-2xl border border-cyan-500/30">
                  <img
                    src={featuredNFT.image}
                    alt={featuredNFT.name}
                    className="rounded-xl w-full h-auto"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{featuredNFT.name}</h3>
                    <p className="text-sm text-muted-foreground">#{featuredNFT.id} • {featuredNFT.rarity.charAt(0).toUpperCase() + featuredNFT.rarity.slice(1)}</p>
                    <div className="mt-3 flex justify-between items-center">
                      <span className="text-2xl font-bold text-cyan-400">{featuredNFT.price} ETH</span>
                      <Button className="bg-cyan-600 hover:bg-cyan-700">Buy Now</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div id="marketplace" className="container py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight font-[family-name:var(--font-cinzel-decorative)]">
              Browse Marketplace
            </h2>
            <p className="text-muted-foreground">
              Buy, sell, and trade your quest rewards
            </p>
          </div>
          <Button asChild className="bg-cyan-600 hover:bg-cyan-700">
            <Link href="/mint">List Your NFT</Link>
          </Button>
        </div>
        
        <MarketplaceFilters />
        
        <Suspense fallback={
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-80 rounded-xl bg-muted/20 animate-pulse" />
            ))}
          </div>
        }>
          <NFTGrid />
        </Suspense>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled className="border-cyan-500/30 text-foreground">
              Previous
            </Button>
            <Button variant="outline" size="sm" className="font-semibold bg-cyan-500/10 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20">
              1
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              2
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              3
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              ...
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              10
            </Button>
            <Button variant="outline" size="sm" className="border-cyan-500/30 text-foreground hover:bg-cyan-500/10">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
