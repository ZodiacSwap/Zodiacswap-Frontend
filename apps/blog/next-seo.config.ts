import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | PancakeSwap',
  defaultTitle: 'Blog | PancakeSwap',
  description:
    'Introducing ZodiacSwap: Unleashing Celestial Power in the DeFi Universe!',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@ZodiacSwap',
    site: '@ZodiacSwap',
  },
  openGraph: {
    title: '✨ ZodiacSwap - A next evolution DeFi exchange on Areon Chain ',
    description:
      'Embark on a cosmic journey with ZodiacSwap, the premier Automated Market Maker (AMM) on Areon Chain. Dive into the enchantment of decentralized finance with our innovative Liquidity Pool Farming, and discover the celestial wonders of our Launchpad—where groundbreaking projects take flight among the stars. 🚀✨',
    images: [{ url: 'https://zodiacswap.netlify.app/images/hero.png' }],
  },
}
