export interface FAQItem {
  question: string
  answer: string
}

export interface PlayStep {
  number: string
  title: string
  desc: string
}

export const faqItems: FAQItem[] = [
  {
    question: "What is Digidrops?",
    answer:
      "Digidrops builds the human layer on Web3 by issuing Soulbound Passports to verified users, enabling them to complete on‑chain and off‑chain quests for brands, earn Stardust as an activity score, and contribute to a decentralized AI data platform. It's a community‑driven ecosystem where real people earn reputation and rewards, not bots.",
  },
  {
    question: "Which blockchain is Digidrops on?",
    answer:
      "We run on BNB Chain (BEP20). Transactions are fast and gas fees are usually under $0.10.",
  },
  {
    question: "What is a Passport and why do I need one?",
    answer:
      "Your Passport is your identity on Digidrops. It is a Soulbound Token (SBT) — it is permanently linked to your wallet and cannot be sold, traded, or transferred. It proves you are a real human, not a bot.",
  },
  {
    question: "What is the difference between Black, White, and Gold Passports?",
    answer:
      "Black earns 1x Stardust per quest. White earns 2x. Gold earns 4x. So if a quest rewards 100 Stardust, a Gold holder gets 400. Higher tier = faster ranking.",
  },
  {
    question: "Can I sell or transfer my Passport?",
    answer:
      "No. Your Passport is a Soulbound Token (SBT) — it is permanently linked to your wallet. It cannot be sold, traded, or transferred. It is your identity, not an asset.",
  },
  {
    question: "What is Stardust?",
    answer:
      "Stardust is your activity score. You earn it by completing quests, logging in daily, and referring friends. It ranks you on the leaderboard. Top users receive community recognition based on their contributions. Stardust has no monetary value.",
  },
  {
    question: "What happens after Season 1?",
    answer:
      "Digidrops is building toward a decentralized AI data platform. Verified users will be able to take on more advanced tasks for Web3 AI builders. Season 1 establishes your on-chain reputation — it is the foundation for everything that follows.",
  },
]

export const PLAY_STEPS: PlayStep[] = [
  {
    number: "1",
    title: "Signal (Awaken Your Comms)",
    desc: "Connect your wallet (Metamask, Trust Wallet) and switch your network to BNB Chain (BEP20).",
  },
  {
    number: "2",
    title: "Supply (Select Your Engine)",
    desc: "Choose your speed. Mint a Black (1x), White (2x), or Gold (4x) Passport. Higher tiers gather Stardust faster and are permanently tied to your wallet.",
  },
  {
    number: "3",
    title: "Action (Embark on Quests)",
    desc: "Dive into captivating challenges (social tasks, community engagement, on-chain quests) that spark creativity and community spirit.",
  },
  {
    number: "4",
    title: "Ascension (Rise in Rank)",
    desc: "Complete quests and watch your Stardust score rise on the public leaderboard to earn community recognition.",
  },
  {
    number: "5",
    title: "Expansion (Summon Allies)",
    desc: "Share your referral link with friends. Every friend you bring in earns you 100 Stardust instantly.",
  },
]

export const BG_ASSETS = {
  dashboard: "/assets/bg/dashboard bg.webp",
  leaderboard: "/assets/bg/leaderboard bg.webp",
  login: "/assets/bg/login bg.webp",
  mintPass: "/assets/bg/mint pass bg.webp",
  pattern: "/assets/bg/pattern bg.webp",
  referral: "/assets/bg/referal bg.webp",
  terms: "/assets/bg/terms bg.webp",
} as const

