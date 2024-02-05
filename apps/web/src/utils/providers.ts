import { StaticJsonRpcProvider } from '@ethersproject/providers'

export const BSC_PROD_NODE = process.env.NEXT_PUBLIC_NODE_PRODUCTION || 'https://bsc.nodereal.io'

export const AREON_TESTNET_PROD_NODE = process.env.NEXT_PUBLIC_NODE_PRODUCTION || 'https://testnet-rpc.areon.network'

export const bscRpcProvider = new StaticJsonRpcProvider(BSC_PROD_NODE)

export const areonTestnetRpcProvider = new StaticJsonRpcProvider(AREON_TESTNET_PROD_NODE)


export default null
