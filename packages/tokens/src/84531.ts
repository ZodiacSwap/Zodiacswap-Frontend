import { ChainId, ERC20Token, WETH9 } from '@pancakeswap/sdk'
import { USDT_BASE_GOERLI } from './common'

export const baseGoerliTestnetTokens = {
  weth: WETH9[ChainId.BASE_GOERLI],
  zodiac: new ERC20Token(ChainId.BASE_GOERLI, '0x91E5C926c8BBfe4a8BaDf4EF0E43ccF8C9e267C6', 18, 'Zodiac', 'Zodiac Token', ''),
  leet: new ERC20Token(ChainId.BASE_GOERLI, '0xBd509651E6374c327d24b9d7E3Ea46704f6F31E8', 18, 'LEET', 'Leet Token', ''),
  usdc: USDT_BASE_GOERLI,
}
