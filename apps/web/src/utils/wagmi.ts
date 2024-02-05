import { BinanceWalletConnector } from '@pancakeswap/wagmi/connectors/binanceWallet'
import { BloctoConnector } from '@pancakeswap/wagmi/connectors/blocto'
import { bsc, goerli, mainnet } from 'wagmi/chains'
import { Chain } from '@wagmi/core';
import { configureChains, createClient } from 'wagmi'
import memoize from 'lodash/memoize'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { LedgerConnector } from 'wagmi/connectors/ledger'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import { SafeConnector } from './safeConnector'


const areon: Chain = {
  id: 463, 
  name: 'Areon Mainnet',
  network: 'areon-mainnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Areon Mainnet',
    symbol: 'AREA',
  },
  rpcUrls: {
    public: { http: ['https://mainnet-rpc.areon.network'] },
    default: { http: ['https://mainnet-rpc.areon.network'] },
  },
  blockExplorers: {
    etherscan: { name: 'Areon Mainnet Explorer', url: 'https://areonscan.com/' },
    default: { name: 'Areon Mainnet Explorer', url: 'https://areonscan.com/' },
  },
  contracts: {
    multicall3: {
      address: '0x32dE1Eac390d8D16A67EFf13ddAdEE443dcFb438',
      blockCreated: 11_907_934,
    },
  },
};

const areonTestnet: Chain = {
  id: 462, 
  name: 'Areon Testnet',
  network: 'areon-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Areon Testnet',
    symbol: 'AREA',
  },
  rpcUrls: {
    public: { http: ['https://testnet-rpc.areon.network'] },
    default: { http: ['https://testnet-rpc.areon.network'] },
  },
  blockExplorers: {
    etherscan: { name: 'Areon Testnet Explorer', url: 'https://areonscan.com' },
    default: { name: 'Areon Testnet Explorer', url: 'https://areonscan.com' },
  },
  contracts: {
    multicall3: {
      address: '0xFBbb45aa806B0b0ec511dc50F334D9376b14cB3b',
      blockCreated: 11_907_934,
    },
  },
};

const CHAINS = [
  // bsc, 
  // mainnet, 
  // bscTestnet, 
  // baseGoerli,
  // goerli,
  areon,
  areonTestnet
]

const getNodeRealUrl = (networkName: string) => {
  let host = null

  switch (networkName) {
    case 'homestead':
      if (process.env.NEXT_PUBLIC_NODE_REAL_API_ETH) {
        host = `eth-mainnet.nodereal.io/v1/${process.env.NEXT_PUBLIC_NODE_REAL_API_ETH}`
      }
      break
    case 'goerli':
      if (process.env.NEXT_PUBLIC_NODE_REAL_API_GOERLI) {
        host = `eth-goerli.nodereal.io/v1/${process.env.NEXT_PUBLIC_NODE_REAL_API_GOERLI}`
      }
      break
    default:
      host = null
  }

  if (!host) {
    return null
  }

  const url = `https://${host}`
  return {
    http: url,
    webSocket: url.replace(/^http/i, 'wss').replace('.nodereal.io/v1', '.nodereal.io/ws/v1'),
  }
}

export const { provider, chains } = configureChains(CHAINS, [
  jsonRpcProvider({
    rpc: (chain) => {
      if (!!process.env.NEXT_PUBLIC_NODE_PRODUCTION && chain.id === bsc.id) {
        return { http: process.env.NEXT_PUBLIC_NODE_PRODUCTION }
      }
      if (process.env.NODE_ENV === 'test' && chain.id === mainnet.id) {
        return { http: 'https://cloudflare-eth.com' }
      }

      return getNodeRealUrl(chain.network) || { http: chain.rpcUrls.default.http[0] }
    },
  }),
])

export const injectedConnector = new InjectedConnector({
  chains,
  options: {
    shimDisconnect: false,
    shimChainChangedDisconnect: true,
  },
})

export const coinbaseConnector = new CoinbaseWalletConnector({
  chains,
  options: {
    appName: 'ZodiacSwap',
    appLogoUrl: 'https://zodiacswap.netlify.app/logo.png',
  },
})

export const walletConnectConnector = new WalletConnectConnector({
  chains,
  options: {
    qrcode: true,
  },
})

export const walletConnectNoQrCodeConnector = new WalletConnectConnector({
  chains,
  options: {
    qrcode: false,
  },
})

export const metaMaskConnector = new MetaMaskConnector({
  chains,
  options: {
    shimDisconnect: false,
    shimChainChangedDisconnect: true,
  },
})

const bloctoConnector = new BloctoConnector({
  chains,
  options: {
    defaultChainId: 56,
    appId: 'e2f2f0cd-3ceb-4dec-b293-bb555f2ed5af',
  },
})

const ledgerConnector = new LedgerConnector({
  chains,
})

export const bscConnector = new BinanceWalletConnector({ chains })

export const client = createClient({
  autoConnect: false,
  provider,
  connectors: [
    new SafeConnector({ chains }),
    metaMaskConnector,
    injectedConnector,
    coinbaseConnector,
    walletConnectConnector,
    bscConnector,
    bloctoConnector,
    ledgerConnector,
  ],
})

export const CHAIN_IDS = chains.map((c) => c.id)

export const isChainSupported = memoize((chainId: number) => CHAIN_IDS.includes(chainId))
export const isChainTestnet = memoize((chainId: number) => chains.find((c) => c.id === chainId)?.testnet)
