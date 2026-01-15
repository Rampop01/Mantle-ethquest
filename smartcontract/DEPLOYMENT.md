# Deployment Guide for Mantle Network

This guide will help you deploy the QuestEth smart contracts to the Mantle network.

## Prerequisites

1. **Foundry Installation**: Make sure Foundry is installed
   ```bash
   curl -L https://foundry.paradigm.xyz | bash
   foundryup
   ```

2. **Mantle Network Setup**:
   - **Mainnet**: Chain ID `5000`
   - **Testnet**: Chain ID `5001`
   - Get testnet ETH from: https://faucet.testnet.mantle.xyz

3. **Required Accounts**:
   - **Deployer Account**: Account with MNT (Mantle native token) to pay for gas
   - **Reward Signer Account**: Separate account that will sign progress vouchers (EIP-712)

## Step 1: Install Dependencies

```bash
cd smartcontract
forge install OpenZeppelin/openzeppelin-contracts
```

## Step 2: Configure Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and fill in the required values:
   ```bash
   # Your deployer private key (without 0x prefix)
   PRIVATE_KEY=your_private_key_here
   
   # Address that will sign progress vouchers
   REWARD_SIGNER=0xYourRewardSignerAddress
   
   # RPC URLs (use testnet for testing)
   MANTLE_RPC_URL=https://rpc.mantle.xyz
   MANTLE_TESTNET_RPC_URL=https://rpc.testnet.mantle.xyz
   
   # Optional: API key for contract verification
   MANTLE_API_KEY=your_api_key_here
   ```

## Step 3: Build Contracts

```bash
forge build
```

## Step 4: Deploy to Mantle Testnet (Recommended First)

```bash
# Deploy to Mantle Testnet
forge script script/Deploy.s.sol:Deploy \
  --rpc-url mantle_testnet \
  --broadcast \
  --verify \
  -vvvv
```

## Step 5: Deploy to Mantle Mainnet

**⚠️ WARNING: Only deploy to mainnet after thorough testing on testnet!**

```bash
# Deploy to Mantle Mainnet
forge script script/Deploy.s.sol:Deploy \
  --rpc-url mantle \
  --broadcast \
  --verify \
  -vvvv
```

## Step 6: Verify Deployment

After deployment, the script will output all contract addresses. Verify them on Mantle Explorer:
- **Mainnet**: https://explorer.mantle.xyz
- **Testnet**: https://explorer.testnet.mantle.xyz

## Deployment Order

The deployment script automatically handles the correct order:

1. **XPToken** - ERC20 token for XP rewards
2. **ChapterNFT** - ERC721 NFTs for chapter completion
3. **Leaderboard** - Tracks player scores and rankings
4. **GameCore** - Main game contract that coordinates everything

After deployment, the script automatically:
- Grants `MINTER_ROLE` to GameCore for XPToken
- Grants `MINTER_ROLE` to GameCore for ChapterNFT
- Grants `GAME_ROLE` to GameCore for Leaderboard
- Links Leaderboard to GameCore

## Post-Deployment Configuration

### Update Frontend Configuration

After deployment, update your frontend configuration with the deployed contract addresses:

```typescript
// Example: lib/web3.ts or similar config file
export const CONTRACTS = {
  XPToken: "0x...", // Deployed XPToken address
  ChapterNFT: "0x...", // Deployed ChapterNFT address
  Leaderboard: "0x...", // Deployed Leaderboard address
  GameCore: "0x...", // Deployed GameCore address
};
```

### Update NFT Base URI

If you need to change the NFT metadata URI after deployment:

```bash
cast send <ChapterNFT_ADDRESS> "setBaseURI(string)" "https://your-new-base-uri.com/nft/" \
  --rpc-url mantle \
  --private-key $PRIVATE_KEY
```

### Update Reward Signer

If you need to change the reward signer address:

```bash
cast send <GameCore_ADDRESS> "setRewardSigner(address)" <NEW_SIGNER_ADDRESS> \
  --rpc-url mantle \
  --private-key $PRIVATE_KEY
```

## Security Considerations

1. **Private Key Security**: 
   - Never commit your `.env` file to version control
   - Use a hardware wallet or secure key management for production
   - Consider using a multisig wallet for admin functions

2. **Reward Signer**:
   - Use a separate account from the deployer
   - Keep the private key secure on your backend server
   - Implement proper nonce management and expiry checks

3. **Access Control**:
   - The deployer account gets `ADMIN_ROLE` on all contracts
   - Consider transferring admin roles to a multisig wallet

## Troubleshooting

### Insufficient Gas
If deployment fails due to gas:
- Ensure your deployer account has enough MNT
- Check gas prices: https://explorer.mantle.xyz

### Contract Verification Failed
If verification fails:
- Ensure `MANTLE_API_KEY` is set correctly
- Try manual verification on Mantle Explorer

### RPC Connection Issues
If RPC connection fails:
- Check your RPC URL is correct
- Try alternative RPC endpoints:
  - Mainnet: `https://rpc.ankr.com/mantle`
  - Testnet: `https://rpc.testnet.mantle.xyz`

## Support

For issues or questions:
- Mantle Docs: https://docs.mantle.xyz
- Foundry Book: https://book.getfoundry.sh
