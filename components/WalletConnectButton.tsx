'use client';

import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { Button } from './ui/button';
import { useState } from 'react';

export function WalletConnectButton() {
  const { address, isConnected } = useAccount();
  const { connect, connectors, isPending } = useConnect();
  const { disconnect } = useDisconnect();
  const [showConnectors, setShowConnectors] = useState(false);

  if (isConnected) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">
          {`${address?.slice(0, 6)}...${address?.slice(-4)}`}
        </span>
        <Button variant="outline" onClick={() => disconnect()}>
          Disconnect
        </Button>
      </div>
    );
  }

  if (connectors.length === 1) {
    // If only one connector, connect directly
    return (
      <Button
        onClick={() => connect({ connector: connectors[0] })}
        disabled={isPending}
        className="bg-blue-600 hover:bg-blue-700 text-white"
      >
        {isPending ? 'Connecting...' : 'Connect Wallet'}
      </Button>
    );
  }

  if (!showConnectors) {
    return (
      <Button
        onClick={() => setShowConnectors(true)}
        className="bg-blue-600 hover:bg-blue-700 text-white"
      >
        Connect Wallet
      </Button>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {connectors.map((connector) => (
        <Button
          key={connector.uid}
          onClick={() => {
            connect({ connector });
            setShowConnectors(false);
          }}
          disabled={isPending}
          variant="outline"
          className="w-full"
        >
          {isPending ? 'Connecting...' : `Connect with ${connector.name}`}
        </Button>
      ))}
      <Button
        onClick={() => setShowConnectors(false)}
        variant="ghost"
        size="sm"
      >
        Cancel
      </Button>
    </div>
  );
}
