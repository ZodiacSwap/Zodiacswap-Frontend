import { baseGoerliTestnetTokens } from '@pancakeswap/tokens'
import { SerializedFarmConfig } from '@pancakeswap/farms'

const farms: SerializedFarmConfig[] = [
  {
    pid: 34,
    vaultPid: 3,
    lpSymbol: 'ZODIAC-WETH LP',
    lpAddress: '0x8813D6BB24798468A9eDA5De4DabD68B625229b5',
    quoteToken: baseGoerliTestnetTokens.weth,
    token: baseGoerliTestnetTokens.zodiac,
  },
  {
    pid: 23,
    vaultPid: 3,
    lpSymbol: 'LEET-WETH LP',
    lpAddress: '0x846f5e6DDb29dC5D07f8dE0a980E30cb5aa07109',
    quoteToken: baseGoerliTestnetTokens.weth,
    token: baseGoerliTestnetTokens.leet,
  },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
