import { Percent } from '@pancakeswap/swap-sdk-core'
import { ERC20Token } from './entities/token'

export enum ChainId {
  ETHEREUM = 1,
  GOERLI = 5,
  BSC = 56,
  BSC_TESTNET = 97,
  BASE_GOERLI = 84531,
  AREON = 463,
  AREON_TESTNET = 462,
}

export const ZERO_PERCENT = new Percent('0')
export const ONE_HUNDRED_PERCENT = new Percent('1')

export const FACTORY_ADDRESS = '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73'

const FACTORY_ADDRESS_ETH = '0x1097053Fd2ea711dad45caCcc45EfF7548fCB362'


export const FACTORY_ADDRESS_MAP: Record<number, string> = {
  [ChainId.ETHEREUM]: FACTORY_ADDRESS_ETH,
  [ChainId.GOERLI]: FACTORY_ADDRESS_ETH,
  [ChainId.BSC]: FACTORY_ADDRESS,
  [ChainId.BSC_TESTNET]: '0x6725f303b657a9451d8ba641348b6761a6cc7a17',
  [ChainId.BASE_GOERLI]: '0x0Fe7C8BF49Aa7d1605a92Ee526850A3d850577be',
  [ChainId.AREON]: '0x654772EA4142DaEE02Cb01bA84eebec06E9cD23c',
  [ChainId.AREON_TESTNET]: '0x654772EA4142DaEE02Cb01bA84eebec06E9cD23c',

}
export const INIT_CODE_HASH = '0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5'

const INIT_CODE_HASH_ETH = '0x57224589c67f3f30a6b0d7a1b54cf3153ab84563bc609ef41dfb34f8b2974d2d'

const INIT_CODE_HASH_BASE = '0x8bdf57c967140cae7632492210672d87ee4f60b2d90dc9ec6139d9a63337bd36'

export const INIT_CODE_HASH_MAP: Record<number, string> = {
  [ChainId.ETHEREUM]: INIT_CODE_HASH_ETH,
  [ChainId.GOERLI]: INIT_CODE_HASH_ETH,
  [ChainId.BSC]: INIT_CODE_HASH,
  [ChainId.BSC_TESTNET]: '0xd0d4c4cd0848c93cb4fd1f498d7013ee6bfb25783ea21593d5834f5d250ece66',
  [ChainId.AREON]: INIT_CODE_HASH,
  [ChainId.AREON_TESTNET]: '0x6db9c126834c7b250ccf2ea1c2768da2ebd301301c05a2cc5e3f0a229b8e0a82',
  [ChainId.BASE_GOERLI]: INIT_CODE_HASH_BASE,

}

export const WETH9 = {
  [ChainId.ETHEREUM]: new ERC20Token(
    ChainId.ETHEREUM,
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    18,
    'WETH',
    'Wrapped Ether',
    'https://weth.io'
  ),
  [ChainId.GOERLI]: new ERC20Token(
    ChainId.GOERLI,
    '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
    18,
    'WETH',
    'Wrapped Ether',
    'https://weth.io'
  ),
  [ChainId.BASE_GOERLI]: new ERC20Token(
    ChainId.BASE_GOERLI,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether',
    'https://weth.io'
  ),
}

export const WBNB = {
  [ChainId.ETHEREUM]: new ERC20Token(
    ChainId.ETHEREUM,
    '0x418D75f65a02b3D53B2418FB8E1fe493759c7605',
    18,
    'WBNB',
    'Wrapped BNB',
    'https://www.binance.org'
  ),
  [ChainId.BSC]: new ERC20Token(
    ChainId.BSC,
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    18,
    'WBNB',
    'Wrapped BNB',
    'https://www.binance.org'
  ),
  [ChainId.BSC_TESTNET]: new ERC20Token(
    ChainId.BSC_TESTNET,
    '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
    18,
    'WBNB',
    'Wrapped BNB',
    'https://www.binance.org'
  ),
}

export const WAREA = {
[ChainId.AREON]: new ERC20Token(
  ChainId.AREON,
  '0xad1594De7aEE64B298391b60FDd90e0f5937d60D',
  18,
  'WAREA',
  'Wrapped AREA',
  'https://www.areon.network/'
),
[ChainId.AREON_TESTNET]: new ERC20Token(
  ChainId.AREON_TESTNET,
  '0xad1594De7aEE64B298391b60FDd90e0f5937d60D',
  18,
  'WAREA',
  'Wrapped AREA',
  'https://www.areon.network/'
),
}

export const WNATIVE: Record<number, ERC20Token> = {
  [ChainId.ETHEREUM]: WETH9[ChainId.ETHEREUM],
  [ChainId.GOERLI]: WETH9[ChainId.GOERLI],
  [ChainId.BASE_GOERLI]: WETH9[ChainId.BASE_GOERLI],
  [ChainId.BSC]: WBNB[ChainId.BSC],
  [ChainId.BSC_TESTNET]: WBNB[ChainId.BSC_TESTNET],
  [ChainId.AREON]: WAREA[ChainId.AREON],
  [ChainId.AREON_TESTNET]: WAREA[ChainId.AREON_TESTNET],
}

export const NATIVE: Record<
  number,
  {
    name: string
    symbol: string
    decimals: number
  }
> = {
  [ChainId.ETHEREUM]: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  [ChainId.GOERLI]: { name: 'Goerli Ether', symbol: 'GOR', decimals: 18 },
  [ChainId.BASE_GOERLI]: { name: 'Base Goerli Ether', symbol: 'ETH', decimals: 18 },
  [ChainId.BSC]: {
    name: 'Binance Chain Native Token',
    symbol: 'BNB',
    decimals: 18,
  },
  [ChainId.BSC_TESTNET]: {
    name: 'Binance Chain Native Token',
    symbol: 'tBNB',
    decimals: 18,
  },
  [ChainId.AREON]: {
    name: 'Areon Network Native Token',
    symbol: 'AREA',
    decimals: 18,
  },
  [ChainId.AREON_TESTNET]: {
    name: 'Areon Network Native Token',
    symbol: 'tAREA',
    decimals: 18,
  },
}
