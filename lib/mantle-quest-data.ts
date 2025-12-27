// Scroll content for each Mantle quest
export const mantleScrollContent: Record<
  string,
  { title: string; content: string[]; analogy: { title: string; text: string } }
> = {
  "1": {
    title: "Mantle Network Fundamentals",
    content: [
      "Mantle Network is a high-performance Ethereum Layer 2 solution that combines the security of Ethereum with the scalability of Optimistic Rollups. It's built to be EVM-compatible, meaning it can run any smart contract that works on Ethereum.",
      "At its core, Mantle aims to solve the blockchain trilemma of achieving scalability, security, and decentralization simultaneously. It does this through its innovative modular architecture that separates execution, settlement, and data availability.",
      "Mantle's design allows for significantly lower transaction fees compared to Ethereum mainnet while maintaining strong security guarantees. This makes it an attractive platform for developers and users looking for an efficient and cost-effective blockchain experience.",
      "The network is governed by Mantle DAO, ensuring that all stakeholders have a say in the protocol's future development and direction. This decentralized governance model is a key aspect of Mantle's philosophy.",
    ],
    analogy: {
      title: "Think of it like...",
      text: "Imagine Ethereum as a busy highway where traffic is slow and expensive. Mantle is like adding an express lane that runs parallel to the main highway. It can handle more cars (transactions) at higher speeds (faster confirmations) and lower tolls (gas fees), while still being connected to the main highway for security and finality.",
    },
  },
  "2": {
    title: "Mantle's Optimistic Rollup Technology",
    content: [
      "Mantle leverages Optimistic Rollup technology to achieve its impressive scalability. This approach bundles multiple transactions together and submits them to Ethereum as a single transaction, significantly reducing costs and increasing throughput.",
      "The 'optimistic' in Optimistic Rollups comes from the assumption that all transactions are valid by default. However, there's a challenge period during which anyone can dispute a transaction's validity if they believe it's fraudulent.",
      "Mantle's implementation includes several optimizations over standard Optimistic Rollups, including a decentralized sequencer and improved data compression techniques. These enhancements help reduce latency and further decrease transaction costs.",
      "The network also implements a unique fraud proof system that allows anyone to challenge invalid state transitions, ensuring the network remains secure even as it scales.",
    ],
    analogy: {
      title: "Think of it like...",
      text: "Imagine you're a teacher collecting homework from 100 students. Instead of grading each paper individually (like Ethereum mainnet), you collect them all in a folder (rollup batch) and only submit one grade for the entire class. If a student thinks you made a mistake (fraud proof), they can challenge it within a certain time. This way, you maintain accuracy while saving enormous time and effort.",
    },
  },
  "3": {
    title: "The $MNT Token and Governance",
    content: [
      "$MNT is the native utility and governance token of the Mantle Network. It serves multiple purposes including paying for transaction fees, participating in governance, and staking to secure the network.",
      "Token holders can participate in Mantle's decentralized governance by creating and voting on proposals that shape the network's future. This includes protocol upgrades, parameter adjustments, and treasury management.",
      "The token economics of $MNT are designed to align incentives between all network participants. A portion of transaction fees is burned, creating deflationary pressure that can potentially increase the token's value over time.",
      "Staking $MNT not only helps secure the network but also allows participants to earn rewards. The staking mechanism is designed to be accessible to both large and small token holders.",
    ],
    analogy: {
      title: "Think of it like...",
      text: "$MNT is like owning shares in a cooperative business. As a token holder, you get voting rights on important decisions (governance), you can use your shares to participate in the business's operations (staking), and the value of your shares may increase as the business grows. The more active and successful the cooperative becomes, the more valuable your participation becomes.",
    },
  },
  "4": {
    title: "Building dApps on Mantle",
    content: [
      "Developing on Mantle is designed to be as seamless as possible for Ethereum developers. Since Mantle is EVM-compatible, you can deploy existing Solidity smart contracts with minimal changes.",
      "The network provides developers with a comprehensive set of tools and documentation to get started quickly. This includes development frameworks, testing environments, and deployment tooling that will feel familiar to Ethereum developers.",
      "Mantle's architecture allows for more complex and feature-rich dApps by enabling features that would be too expensive on mainnet, such as complex DeFi protocols, on-chain games, and social applications.",
      "The Mantle team and community actively support developers through grants, hackathons, and technical resources to help bring innovative projects to the ecosystem.",
    ],
    analogy: {
      title: "Think of it like...",
      text: "Building on Mantle is like moving your software development from a slow, expensive computer to a high-performance cloud server. All your existing code still works, but now you have more processing power (throughput), lower costs (gas fees), and better tools at your disposal. You can build more ambitious applications without worrying about hitting the same limitations as before.",
    },
  },
  "5": {
    title: "Mantle's Ecosystem and Use Cases",
    content: [
      "The Mantle ecosystem is rapidly growing, with projects spanning DeFi, NFTs, gaming, and infrastructure. These projects benefit from Mantle's high throughput and low fees while maintaining Ethereum-level security.",
      "In DeFi, Mantle enables more efficient trading, lending, and yield farming protocols. The lower fees make it practical to interact with these protocols for smaller transactions.",
      "For gaming and NFTs, Mantle's scalability allows for more complex game mechanics and frequent on-chain interactions that wouldn't be feasible on Ethereum mainnet.",
      "The network also supports various infrastructure projects that enhance the developer and user experience, including oracles, bridges, and analytics platforms.",
    ],
    analogy: {
      title: "Think of it like...",
      text: "Mantle's ecosystem is like a new city built with modern infrastructure. The roads (transactions) are wider and less congested, the utilities (developer tools) are more advanced, and the cost of living (gas fees) is lower. This attracts all sorts of businesses (dApps) and residents (users) who want to take advantage of these benefits while still being connected to the established city (Ethereum) next door.",
    },
  },
  "6": {
    title: "Mantle's Data Availability Solution",
    content: [
      "Mantle implements an innovative approach to data availability that significantly reduces costs while maintaining security. This is crucial for the network's scalability and efficiency.",
      "The system uses a combination of on-chain and off-chain data storage, with cryptographic proofs ensuring that data remains available when needed. This hybrid approach provides the best balance between security and cost-effectiveness.",
      "By optimizing how data is stored and retrieved, Mantle can process more transactions per second while keeping fees low. This is particularly important for applications that generate large amounts of on-chain data.",
      "The data availability solution is designed to be trust-minimized, meaning it doesn't rely on centralized parties to ensure data is available for verification.",
    ],
    analogy: {
      title: "Think of it like...",
      text: "Mantle's data availability is like having a highly efficient library system. Instead of keeping every book (transaction data) in the main reading room (on-chain storage), less frequently accessed books are stored in a high-capacity archive (off-chain storage). A precise catalog system (cryptographic proofs) ensures any book can be quickly retrieved when needed, while the main reading room remains uncluttered and efficient for daily use.",
    },
  },
  "7": {
    title: "Security and Decentralization in Mantle",
    content: [
      "While Mantle offers significant scalability improvements, it doesn't compromise on security. The network inherits Ethereum's security through its rollup architecture while adding additional safeguards.",
      "The decentralized sequencer ensures that no single entity controls transaction ordering, preventing front-running and other forms of MEV (Miner Extractable Value) exploitation.",
      "Mantle's fraud proof system is designed to be efficient and accessible, allowing anyone to participate in securing the network. This decentralized verification is crucial for maintaining the network's integrity.",
      "Regular security audits and bug bounty programs help identify and address potential vulnerabilities before they can be exploited.",
    ],
    analogy: {
      title: "Think of it like...",
      text: "Mantle's security model is like a modern bank vault with multiple layers of protection. The outer walls are made of the same strong materials as traditional vaults (Ethereum's security), but inside there are additional high-tech security measures (fraud proofs, decentralized sequencing) that make it even more secure. Multiple independent security guards (validators) constantly monitor the vault, and there's a reward for anyone who can find a weakness in the system.",
    },
  },
  "8": {
    title: "Bridging Assets to Mantle",
    content: [
      "Mantle provides secure bridges that allow users to move assets between Ethereum and the Mantle network. These bridges are designed to be trust-minimized and secure.",
      "The bridging process is straightforward: users lock their assets in a smart contract on the origin chain, and equivalent assets are minted on Mantle. The reverse process burns the assets on Mantle to unlock them on the original chain.",
      "Multiple bridge implementations are available, including official bridges and third-party solutions, giving users flexibility in how they move their assets.",
      "Security is a top priority for bridging, with multiple layers of protection against common attack vectors like front-running and replay attacks.",
    ],
    analogy: {
      title: "Think of it like...",
      text: "Bridging assets to Mantle is like exchanging currency when traveling to another country. You exchange your home currency (Ethereum assets) for the local currency (Mantle-wrapped assets) at a trusted exchange (bridge). The exchange gives you a receipt (proof) that you can use to get your original currency back when you return home. The exchange rate is always 1:1, and the process is designed to be secure and verifiable at every step.",
    },
  },
  "9": {
    title: "Mantle's Roadmap and Future Developments",
    content: [
      "Mantle has an ambitious roadmap focused on continuous improvement and expansion. The development team is working on several key upgrades to enhance the network's capabilities.",
      "Upcoming features include improved fraud proof mechanisms, enhanced cross-chain interoperability, and additional developer tooling to make building on Mantle even easier.",
      "The network is also exploring ways to further decentralize its infrastructure, including the addition of more node operators and validators from the community.",
      "Long-term, Mantle aims to be a leading Layer 2 solution that supports a wide range of decentralized applications while maintaining strong security and decentralization.",
    ],
    analogy: {
      title: "Think of it like...",
      text: "Mantle's development is like constructing a city with a master plan. The initial neighborhoods (core features) are already built and thriving, but there are carefully planned expansions (upgrades) in the works. New roads (scaling solutions), parks (developer tools), and public services (governance mechanisms) are being added based on the needs of the community. The city planners (core team) work closely with the residents (community) to ensure the development meets everyone's needs.",
    },
  },
  "10": {
    title: "Mantle's Role in the Broader Ethereum Ecosystem",
    content: [
      "Mantle is an important part of Ethereum's multi-chain future, providing a scalable execution layer that complements Ethereum's security and decentralization.",
      "The network is designed to be interoperable with other Layer 2 solutions and Ethereum itself, allowing for seamless movement of assets and data across the ecosystem.",
      "By handling transactions off-chain while maintaining strong connections to Ethereum, Mantle helps reduce congestion on the mainnet while still benefiting from its security.",
      "The success of Mantle and other Layer 2 solutions is crucial for Ethereum's ability to scale to billions of users while maintaining its core values.",
    ],
    analogy: {
      title: "Think of it like...",
      text: "Mantle's role in the Ethereum ecosystem is like a high-speed rail system connected to a major city (Ethereum). The city remains the cultural and economic hub (settlement layer), but the rail system (Mantle) allows people to live and work in the surrounding areas (off-chain) while still being closely connected. This reduces congestion in the city center while allowing the entire metropolitan area to grow and thrive together.",
    },
  },
}

// Quest room data with hidden letters
export const mantleQuestRooms: Record<
  string,
  {
    word: string
    letters: Array<{
      id: string
      letter: string
      roomId: number
      position: { x: string; y: string }
      hint: string
    }>
  }
> = {
  "1": {
    word: "MANTLE",
    letters: [
      {
        id: "m",
        letter: "M",
        roomId: 0,
        position: { x: "20%", y: "30%" },
        hint: "In the center of the main hall",
      },
      {
        id: "a",
        letter: "A",
        roomId: 0,
        position: { x: "40%", y: "50%" },
        hint: "Behind the ancient scroll",
      },
      {
        id: "n",
        letter: "N",
        roomId: 1,
        position: { x: "60%", y: "40%" },
        hint: "Under the glowing rune",
      },
      {
        id: "t",
        letter: "T",
        roomId: 1,
        position: { x: "30%", y: "70%" },
        hint: "Next to the broken pillar",
      },
      {
        id: "l",
        letter: "L",
        roomId: 2,
        position: { x: "50%", y: "60%" },
        hint: "In the shadow of the statue",
      },
      {
        id: "e",
        letter: "E",
        roomId: 2,
        position: { x: "70%", y: "30%" },
        hint: "Above the entrance arch",
      },
    ],
  },
  // Additional quest rooms would follow the same pattern
}

// Quiz questions for each Mantle quest
export const mantleQuizData: Record<
  string,
  Array<{ question: string; options: string[]; correctAnswer: number }>
> = {
  "1": [
    {
      question: "What is Mantle Network primarily designed to improve?",
      options: [
        "Ethereum's smart contract capabilities",
        "Bitcoin's transaction speed",
        "Ethereum's scalability and transaction costs",
        "NFT storage capacity",
      ],
      correctAnswer: 2,
    },
    {
      question: "What technology does Mantle use to achieve scalability?",
      options: [
        "Proof of Work",
        "Optimistic Rollups",
        "Sharding",
        "Proof of Stake",
      ],
      correctAnswer: 1,
    },
    {
      question: "What is the native token of Mantle Network?",
      options: ["MNT", "MANT", "MANTLE", "MNET"],
      correctAnswer: 0,
    },
  ],
  // Additional quiz questions for other chapters would follow
}

// Add more quiz questions for other chapters following the same pattern
