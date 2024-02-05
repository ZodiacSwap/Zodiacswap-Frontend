import { BLOCKS_CLIENT, BLOCKS_CLIENT_ETH, INFO_CLIENT, INFO_CLIENT_ETH, INFO_CLIENT_AREA } from 'config/constants/endpoints'
import { infoClientETH, infoClientAREA, infoClient, infoStableSwapClient } from 'utils/graphql'

import { ChainId } from '@pancakeswap/sdk'
import { ETH_TOKEN_BLACKLIST, PCS_ETH_START, PCS_V2_START, TOKEN_BLACKLIST } from 'config/constants/info'

export type MultiChainName = 'BSC' | 'ETH' | 'AREA'

export const multiChainQueryMainToken = {
  BSC: 'BNB',
  ETH: 'ETH',
  AREA: 'AREA',

}

export const multiChainBlocksClient = {
  BSC: BLOCKS_CLIENT,
  ETH: BLOCKS_CLIENT_ETH,
  AREA: '',
}

export const multiChainStartTime = {
  BSC: PCS_V2_START,
  ETH: PCS_ETH_START,
  AREA: '',
}

export const multiChainId = {
  BSC: ChainId.BSC,
  ETH: ChainId.ETHEREUM,
  AREA: ChainId.AREON_TESTNET,
}

export const multiChainPaths = {
  [ChainId.BSC]: '/bsc',
  [ChainId.ETHEREUM]: '/eth',
  [ChainId.AREON_TESTNET]: '/area',
}

export const multiChainQueryClient = {
  BSC: infoClient,
  ETH: infoClientETH,
  AREA: infoClientAREA,

  
}

export const multiChainQueryEndPoint = {
  BSC: INFO_CLIENT,
  ETH: INFO_CLIENT_ETH,
  AREA: INFO_CLIENT_AREA
}

export const multiChainScan = {
  BSC: 'BscScan',
  ETH: 'EtherScan',
  AREA: 'AreonScan',

}

export const multiChainTokenBlackList = {
  BSC: TOKEN_BLACKLIST,
  ETH: ETH_TOKEN_BLACKLIST,
  AREA: '',
}

export const getMultiChainQueryEndPointWithStableSwap = (chainName: MultiChainName) => {
  const isStableSwap = checkIsStableSwap()
  if (isStableSwap) return infoStableSwapClient
  return multiChainQueryClient[chainName]
}

export const checkIsStableSwap = () => window.location.href.includes('stableSwap')
