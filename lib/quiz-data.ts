export const mantleQuizData: Record<string, {
  questions: Array<{
    id: string;
    question: string;
    answers: Array<{
      id: string;
      text: string;
      isCorrect: boolean;
    }>;
  }>;
  correctAnswers: Record<string, string>;
  title: string;
  description: string;
  nextUrl: string;
}> = {
  "1": {
    title: "Mantle Network Fundamentals",
    description: "Test your knowledge about Mantle Network's core concepts and features",
    nextUrl: "/mantle-quests/2",
    questions: [
      {
        id: "q1",
        question: "What is the primary purpose of Mantle Network?",
        answers: [
          { id: "a1", text: "A decentralized social network", isCorrect: false },
          { id: "a2", text: "A Layer 2 scaling solution for Ethereum", isCorrect: true },
          { id: "a3", text: "A cryptocurrency exchange", isCorrect: false },
          { id: "a4", text: "A smart contract wallet", isCorrect: false }
        ]
      },
      {
        id: "q2",
        question: "Which consensus mechanism does Mantle Network use?",
        answers: [
          { id: "a1", text: "Proof of Work (PoW)", isCorrect: false },
          { id: "a2", text: "Delegated Proof of Stake (DPoS)", isCorrect: false },
          { id: "a3", text: "Proof of Stake (PoS)", isCorrect: true },
          { id: "a4", text: "Proof of Authority (PoA)", isCorrect: false }
        ]
      },
      {
        id: "q3",
        question: "What is the native token of Mantle Network?",
        answers: [
          { id: "a1", text: "MNT", isCorrect: true },
          { id: "a2", text: "MANT", isCorrect: false },
          { id: "a3", text: "MTL", isCorrect: false },
          { id: "a4", text: "MNET", isCorrect: false }
        ]
      }
    ],
    correctAnswers: {
      q1: "a2",
      q2: "a3",
      q3: "a1"
    }
  },
  "2": {
    title: "Advanced Mantle Concepts",
    description: "Test your knowledge of advanced Mantle Network features",
    nextUrl: "/mantle-quests/3",
    questions: [
      {
        id: "q1",
        question: "What technology does Mantle use for data availability?",
        answers: [
          { id: "a1", text: "Ethereum Mainnet", isCorrect: false },
          { id: "a2", text: "Mantle DA", isCorrect: true },
          { id: "a3", text: "IPFS", isCorrect: false },
          { id: "a4", text: "Arweave", isCorrect: false }
        ]
      },
      {
        id: "q2",
        question: "Which of the following is NOT a benefit of using Mantle Network?",
        answers: [
          { id: "a1", text: "Lower transaction fees", isCorrect: false },
          { id: "a2", text: "Faster transaction finality", isCorrect: false },
          { id: "a3", text: "Higher security than Ethereum L1", isCorrect: true },
          { id: "a4", text: "EVM compatibility", isCorrect: false }
        ]
      }
    ],
    correctAnswers: {
      q1: "a2",
      q2: "a3"
    }
  }
};
