import { ChainId, ERC20Token } from '@pancakeswap/sdk'

export const CAKE_MAINNET = new ERC20Token(
  ChainId.BSC,
  '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
  18,
  'CAKE',
  'PancakeSwap Token',
  'https://zodiacswap.netlify.app/',
)

export const CAKE_TESTNET = new ERC20Token(
  ChainId.BSC_TESTNET,
  '0xFa60D973F7642B748046464e165A65B7323b0DEE',
  18,
  'CAKE',
  'PancakeSwap Token',
  'https://zodiacswap.netlify.app/',
)

export const ZODIAC_MAINNET = new ERC20Token(
  ChainId.AREON,
  '0xC86442e74e5A6E26da57425f1FB3a4A37560e935',
  18,
  'ZODIAC',
  'ZodiacSwap Token',
  'https://zodiacswap.netlify.app/',
)

export const ZODIAC_TESTNET = new ERC20Token(
  ChainId.AREON_TESTNET,
  '0xC86442e74e5A6E26da57425f1FB3a4A37560e935',
  18,
  'ZODIAC',
  'ZodiacSwap Token',
  'https://zodiacswap.netlify.app/',
)

export const USDC_BSC = new ERC20Token(
  ChainId.BSC,
  '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
  18,
  'USDC',
  'Binance-Peg USD Coin',
  'https://www.centre.io/usdc',
)

export const USDC_TESTNET = new ERC20Token(
  ChainId.BSC_TESTNET,
  '0x64544969ed7EBf5f083679233325356EbE738930',
  18,
  'USDC',
  'Binance-Peg USD Coin',
  'https://www.centre.io/usdc',
)

export const USDC_ETH = new ERC20Token(
  ChainId.ETHEREUM,
  '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
  6,
  'USDC',
  'USD Coin',
)

export const USDT_AREON = new ERC20Token(
  ChainId.AREON,
  '0x02F9Bebf5E54968D8Cc2562356C91ECDE135801B',
  18,
  'USDT',
  'Tether USD Coin',
)

export const USDT_AREON_TESTNET = new ERC20Token(
  ChainId.AREON_TESTNET,
  '0xD81B510A63f3CBc1b895E20a012d6D5B6B4C7707',
  18,
  'USDT',
  'Tether USD Coin',
)

export const USDC_GOERLI = new ERC20Token(
  ChainId.GOERLI,
  '0x07865c6E87B9F70255377e024ace6630C1Eaa37F',
  6,
  'tUSDC',
  'test USD Coin',
)

export const USDT_BASE_GOERLI = new ERC20Token(
  ChainId.BASE_GOERLI,
  '0xeeeD97aC275c2e9894B890d2E56F4412C8566fb5',
  18,
  'zUSDT',
  'Zodiac Tether USD',
)

export const USDT_BSC = new ERC20Token(
  ChainId.BSC,
  '0x55d398326f99059fF775485246999027B3197955',
  18,
  'USDT',
  'Tether USD',
  'https://tether.to/',
)

export const USDT_ETH = new ERC20Token(
  ChainId.ETHEREUM,
  '0xdAC17F958D2ee523a2206206994597C13D831ec7',
  6,
  'USDT',
  'Tether USD',
  'https://tether.to/',
)

export const BUSD_BSC = new ERC20Token(
  ChainId.BSC,
  '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD_M = new ERC20Token(
  ChainId.AREON,
  '0x381B31409e4D220919B2cFF012ED94d70135A59e',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD_TESTNET = new ERC20Token(
  ChainId.BSC_TESTNET,
  '0xaB1a4d4f1D656d2450692D237fdD6C7f9146e814',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD_ETH = new ERC20Token(
  ChainId.ETHEREUM,
  '0x4Fabb145d64652a948d72533023f6E7A623C7C53',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD_GOERLI = new ERC20Token(
  ChainId.GOERLI,
  '0xb809b9B2dc5e93CB863176Ea2D565425B03c0540',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)


export const BUSD_AREON_TESTNET = new ERC20Token(
  ChainId.AREON_TESTNET,
  '0xD81B510A63f3CBc1b895E20a012d6D5B6B4C7707',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD: Record<ChainId, ERC20Token> = {
  [ChainId.ETHEREUM]: BUSD_ETH,
  [ChainId.GOERLI]: BUSD_GOERLI,
  [ChainId.BSC]: BUSD_BSC,
  [ChainId.BSC_TESTNET]: BUSD_TESTNET,
  [ChainId.BASE_GOERLI]: BUSD_GOERLI,
  [ChainId.AREON]: BUSD_M,
  [ChainId.AREON_TESTNET]: BUSD_AREON_TESTNET,

}

export const CAKE = {
  [ChainId.BSC]: CAKE_MAINNET,
  [ChainId.BSC_TESTNET]: CAKE_TESTNET,
}

export const ZODIAC = {
  [ChainId.AREON]: ZODIAC_MAINNET,
  [ChainId.AREON_TESTNET]: ZODIAC_TESTNET,
}

export const USDC = {
  [ChainId.BSC]: USDC_BSC,
  [ChainId.BSC_TESTNET]: USDC_TESTNET,
  [ChainId.ETHEREUM]: USDC_ETH,
  [ChainId.GOERLI]: USDC_GOERLI,
  [ChainId.BASE_GOERLI]: USDT_BASE_GOERLI,
}

export const USDT = {
  [ChainId.BSC]: USDT_BSC,
  [ChainId.ETHEREUM]: USDT_ETH,
  [ChainId.AREON]: USDT_AREON,
  [ChainId.AREON_TESTNET]: USDT_AREON_TESTNET,
}

export const WBTC_ETH = new ERC20Token(
  ChainId.ETHEREUM,
  '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
  8,
  'WBTC',
  'Wrapped BTC',
)
