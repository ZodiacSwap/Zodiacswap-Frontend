import { areonTokens } from '@pancakeswap/tokens'
import { SerializedFarmConfig } from '@pancakeswap/farms'

const farms: SerializedFarmConfig[] = [
  {
    pid: 34,
    vaultPid: 3,
    lpSymbol: 'ZODIAC-WAREA LP',
    lpAddress: '0x8813D6BB24798468A9eDA5De4DabD68B625229b5',
    quoteToken: areonTokens.warea,
    token: areonTokens.zodiac,
  },

].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
