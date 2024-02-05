import { ChainId, ERC20Token, WAREA } from '@pancakeswap/sdk'
import { USDT_AREON_TESTNET, ZODIAC_TESTNET } from './common'

export const areonTestnetTokens = {
  warea: WAREA[ChainId.AREON_TESTNET],
  zodiac: ZODIAC_TESTNET,
  usdt: USDT_AREON_TESTNET,
}
