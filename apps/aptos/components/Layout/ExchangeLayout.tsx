import { useTranslation } from '@pancakeswap/localization'
import { Image, Swap } from '@pancakeswap/uikit'

export const ExchangeLayout = ({ children }: React.PropsWithChildren) => {
  const { t } = useTranslation()
  return (
    <Swap.Page
      helpUrl="https://docs.zodiacswap.xyz/get-started-aptos"
      externalText={t('Bridge assets to Aptos Chain')}
      externalLinkUrl="https://bridge.zodiacswap.xyz/aptos"
      helpImage={<Image src="/help.png" width={178} height={243} alt="Aptos help" />}
    >
      {children}
    </Swap.Page>
  )
}
