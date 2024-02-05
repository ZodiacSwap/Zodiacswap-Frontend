import {
  MenuItemsType,
  DropdownMenuItemType,
  TicketIcon,
  TicketFillIcon,
  SwapIcon,
  SwapFillIcon,
  EarnFillIcon,
  EarnIcon,
  // TrophyIcon,
  // TrophyFillIcon,
  // NftIcon,
  // NftFillIcon,
  MoreIcon,
  DropdownMenuItems,
  SwapVertIcon,
  RocketIcon,
} from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'
// import { nftsBaseUrl } from 'views/Nft/market/constants'
// import { getPerpetualUrl } from 'utils/getPerpetualUrl'
import { SUPPORT_ONLY_AREON } from 'config/constants/supportChains'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean; image?: string } & {
  items?: ConfigMenuDropDownItemsType[]
}

const addMenuItemSupported = (item, chainId) => {
  if (!chainId || !item.supportChainIds) {
    return item
  }
  if (item.supportChainIds?.includes(chainId)) {
    return item
  }
  return {
    ...item,
    disabled: true,
  }
}

const config: (
  t: ContextApi['t'],
  isDark: boolean,
  languageCode?: string,
  chainId?: number,
) => ConfigMenuItemsType[] = (t, isDark, languageCode, chainId) =>
  [
    {
      label: t('Exchange'),
      icon: SwapVertIcon,
      fillIcon: SwapVertIcon,
      href: '/swap',
      showItemsOnMobile: false,
      items: [
        {
          label: t('Swap'),
          href: '/swap',
        },
        // {
        //   label: t('Limit'),
        //   href: '/limit-orders',
        //   supportChainIds: SUPPORT_ONLY_BSC,
        //   image: '/images/decorations/3d-coin.png',
        // },
        {
          label: t('Liquidity'),
          href: '/liquidity',
        },
        // {
        //   label: t('Perpetual'),
        //   href: getPerpetualUrl({
        //     chainId,
        //     languageCode,
        //     isDark,
        //   }),
        //   type: DropdownMenuItemType.EXTERNAL_LINK,
        // },
        {
          label: t('Faucet'),
          href: 'https://faucet.areon.network/',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    
    {
      label: t('Earn'),
      href: '/#',
      icon: RocketIcon,
      fillIcon: RocketIcon,
      image: '/images/decorations/pe2.png',
      items: [
        {
          label: t('Farms'),
          href: '/farms',
          status: {
            text: "Coming Soon",
            color: "warning",
          }
        },
        {
          label: t('Pools'),
          status: {
            text: "Coming Soon",
            color: "warning",
          }
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    
    // {
    //   label: t('Win'),
    //   href: '/prediction',
    //   icon: TrophyIcon,
    //   fillIcon: TrophyFillIcon,
    //   supportChainIds: SUPPORT_ONLY_BSC,
    //   items: [
    //     {
    //       label: t('Trading Competition'),
    //       href: '/competition',
    //       image: '/images/decorations/tc.png',
    //       hideSubNav: true,
    //     },
    //     {
    //       label: t('Prediction (BETA)'),
    //       href: '/prediction',
    //       image: '/images/decorations/prediction.png',
    //     },
    //     {
    //       label: t('Lottery'),
    //       href: '/lottery',
    //       image: '/images/decorations/lottery.png',
    //     },
    //     {
    //       label: t('Pottery (BETA)'),
    //       href: '/pottery',
    //       image: '/images/decorations/lottery.png',
    //     },
    //   ],
    // },
    // {
    //   label: t('NFT'),
    //   href: `${nftsBaseUrl}`,
    //   icon: NftIcon,
    //   fillIcon: NftFillIcon,
    //   supportChainIds: SUPPORT_ONLY_BSC,
    //   image: '/images/decorations/nft.png',
    //   items: [
    //     {
    //       label: t('Overview'),
    //       href: `${nftsBaseUrl}`,
    //     },
    //     {
    //       label: t('Collections'),
    //       href: `${nftsBaseUrl}/collections`,
    //     },
    //     {
    //       label: t('Activity'),
    //       href: `${nftsBaseUrl}/activity`,
    //     },
    //   ],
    // },
      {
      label: t('Airdrop'),
      href: `/airdrop-program`,
      icon: TicketIcon,
      fillIcon: TicketFillIcon,
      items: [
        {
          label: t('Overview'),
          href: `/airdrop-program`,
        },
        {
          label: t('Quest'),
          href: `/airdrop-program/quest`,
        },
        {
          label: t('Membership NFT'),
          href: `/airdrop-program/membership`,
          status: {
            text: "Coming Soon",
            color: "warning",
          }
        },
        {
          label: t('Founders NFT'),
          href: `/airdrop-program/founders`,
          status: {
            text: "Coming Soon",
            color: "warning",
          }
        },
      ],
    },
    {
      label: '',
      href: '',
      icon: MoreIcon,
      hideSubNav: true,
      items: [
        {
          label: t('Info'),
          href: '/info',
          status: {
            text: "Coming Soon",
            color: "warning",
          }
        },
        {
          label: t('IFO'),
          href: '/ifo',
          // image: '/images/ifos/ifo-bunny.png',
          status: {
            text: "Coming Soon",
            color: "warning",
          }
        },
        // {
        //   label: t('Voting'),
        //   href: '/voting',
        //   supportChainIds: SUPPORT_ONLY_BSC,
        //   image: '/images/voting/voting-bunny.png',
        // },
        // {
        //   type: DropdownMenuItemType.DIVIDER,
        // },
        // {
        //   label: t('Leaderboard'),
        //   href: '/teams',
        //   supportChainIds: SUPPORT_ONLY_BSC,
        //   image: '/images/decorations/leaderboard.png',
        // },
        {
          type: DropdownMenuItemType.DIVIDER,
        },
        {
          label: t('Blog'),
          href: 'https://blog.zodiacswap.xyz/',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
        {
          label: t('Docs'),
          href: '',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
  ].map((item) => addMenuItemSupported(item, chainId))

export default config
