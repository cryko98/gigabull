export interface BuyStep {
  number: string;
  title: string;
  description: string;
}

export interface Quote {
  id: number;
  text: string;
  author: string;
}

export const TOKEN_CONFIG = {
  name: 'The GigaBull',
  ticker: '$GIGABULL',
  ca: '37ynxJZYfpcrsPaGvdiL4JYMXCA8e9tf3H4Shzj7pump',
  telegram: 'https://t.me/gigabullonsol',
  twitter: 'https://x.com/gigabull_sol',
  pumpfun: 'https://pump.fun',
  logo: 'https://cdn.shopify.com/s/files/1/0967/8087/8151/files/gigabull.jpg?v=1782997052',
  banner: 'https://cdn.shopify.com/s/files/1/0967/8087/8151/files/gig.png?v=1782997053',
};

export const BUY_STEPS: BuyStep[] = [
  {
    number: '01',
    title: 'Create a Phantom Wallet',
    description: 'Download Phantom or your wallet of choice from the app store or as a browser extension. It is completely free and secure.',
  },
  {
    number: '02',
    title: 'Deposit Solana (SOL)',
    description: 'Buy SOL directly inside your wallet or purchase on a centralized exchange (like Coinbase or Binance) and withdraw it to your Phantom wallet address.',
  },
  {
    number: '03',
    title: 'Visit Pump.fun',
    description: 'Click the "PUMP THE GIGABULL" button or navigate to pump.fun, connect your Phantom wallet, and paste the Contract Address into the search bar.',
  },
  {
    number: '04',
    title: 'Swap SOL for $GIGABULL',
    description: 'Enter the amount of SOL you want to spend, set your slippage tolerance, and hit SWAP. Welcome to the elite tier of GigaBulls!',
  },
];

export const GIGABULL_QUOTES: Quote[] = [
  {
    id: 1,
    text: "Other coins graze on the meadow of fear. GigaBull feeds on red candles and liquidates the bears.",
    author: "GigaBull"
  },
  {
    id: 2,
    text: "A red candle is just a 15% discount on your eventual financial freedom. Real bulls don't blink.",
    author: "GigaBull"
  },
  {
    id: 3,
    text: "If you sell before the supercycle peak, you aren't a bull. You're a dairy cow waiting to be milked.",
    author: "GigaBull"
  },
  {
    id: 4,
    text: "We don't need a roadmap. When you are the heaviest bull in the market, the market follows you.",
    author: "GigaBull"
  },
  {
    id: 5,
    text: "I didn't start the bull run. The bull run was waiting for me to wake up from my slumber.",
    author: "GigaBull"
  },
  {
    id: 6,
    text: "Paper hands are just firewood for the GigaBull's rocket engine.",
    author: "GigaBull"
  }
];

export const TOKENOMICS = [
  { label: 'Liquidity Pool', value: '100% BURNED', desc: 'Slammed shut, key thrown into the Mariana Trench.' },
  { label: 'Buy/Sell Tax', value: '0% TAX', desc: 'No fees, no funny business. Pure, raw, unadulterated gains.' },
  { label: 'Contract Ownership', value: 'RENOUNCED', desc: 'Controlled by the community, powered by the supercycle.' },
  { label: 'Initial Supply', value: '1,000,000,000', desc: 'One Billion $GIGABULL tokens minted for the alphas.' },
];
