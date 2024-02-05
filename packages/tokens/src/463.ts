import { ChainId, ERC20Token, WAREA } from '@pancakeswap/sdk'
import { USDT_AREON, ZODIAC_MAINNET} from './common'

export const areonTokens = {
  warea: WAREA[ChainId.AREON],
  zodiac: ZODIAC_MAINNET,
  usdt: USDT_AREON,
}
