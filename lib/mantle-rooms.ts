export const mantleQuestRooms = {
  "1": {
    id: "1",
    title: "The Genesis Chamber",
    description: "Begin your journey into the Mantle Network. Discover the foundation of this Layer 2 solution and its role in scaling Ethereum.",
    letter: "M",
    nextUrl: "/mantle-quests/2",
    word: "MANTLE",
    letters: [
      {
        id: "m",
        letter: "M",
        roomId: 1,
        position: { x: "20%", y: "50%" },
        hint: "The first letter of our journey"
      },
      {
        id: "a",
        letter: "A",
        roomId: 2,
        position: { x: "40%", y: "30%" },
        hint: "The first vowel in the alphabet"
      },
      {
        id: "n",
        letter: "N",
        roomId: 3,
        position: { x: "60%", y: "50%" },
        hint: "Stands between M and O in the alphabet"
      },
      {
        id: "t",
        letter: "T",
        roomId: 4,
        position: { x: "80%", y: "40%" },
        hint: "Often silent at the end of words"
      },
      {
        id: "l",
        letter: "L",
        roomId: 5,
        position: { x: "70%", y: "70%" },
        hint: "The Roman numeral for 50"
      },
      {
        id: "e",
        letter: "E",
        roomId: 6,
        position: { x: "50%", y: "80%" },
        hint: "The most commonly used letter in English"
      }
    ]
  },
  "2": {
    id: "2",
    title: "The Optimistic Vault",
    description: "Explore how Mantle uses Optimistic Rollups to scale Ethereum while maintaining security.",
    letter: "A",
    nextUrl: "/mantle-quests/3",
    word: "ROLLUP",
    letters: [
      {
        id: "r",
        letter: "R",
        roomId: 1,
        position: { x: "15%", y: "30%" },
        hint: "The 18th letter of the alphabet"
      },
      {
        id: "o",
        letter: "O",
        roomId: 2,
        position: { x: "30%", y: "50%" },
        hint: "A perfect circle"
      },
      {
        id: "l1",
        letter: "L",
        roomId: 3,
        position: { x: "45%", y: "30%" },
        hint: "The Roman numeral for 50"
      },
      {
        id: "l2",
        letter: "L",
        roomId: 4,
        position: { x: "60%", y: "50%" },
        hint: "Appears twice in this word"
      },
      {
        id: "u",
        letter: "U",
        roomId: 5,
        position: { x: "75%", y: "30%" },
        hint: "The only vowel in this word"
      },
      {
        id: "p",
        letter: "P",
        roomId: 6,
        position: { x: "90%", y: "50%" },
        hint: "The 16th letter of the alphabet"
      }
    ]
  }
} as const;

export type MantleQuestRoom = typeof mantleQuestRooms[keyof typeof mantleQuestRooms];
