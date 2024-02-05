import styled from 'styled-components'
import { Flex, Text, Button, Box, PageSection, Link } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import Image from 'next/image'
import bunnyImage from '../../../../../public/images/home/celestial/celestial-goddess1.png'

const StyledBannerSection = styled(PageSection)`
  padding-top: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 48px;
  }
`

const BgWrapper = styled.div`
  z-index: -1;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0px;
  left: 0px;
`

const InnerWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: -3px;
  transform: scaleX(-1);
`

const Decorations = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: -1;

  > img {
    position: absolute;
  }
}`

const AffiliatesBanner = () => {
  const { t } = useTranslation()

  return (
    <>
      <style jsx global>
        {`
          #home-1 .page-bg {
            background: linear-gradient(
              142.67deg,
              #9bedff 10.8%,
              rgba(214, 201, 255, 0.4) 41.55%,
              rgba(214, 201, 255, 0.4) 81.99%
            );
          }
          [data-theme='dark'] #home-1 .page-bg {
            background: radial-gradient(103.12% 50% at 50% 50%, #21193a 0%, #191326 100%);
          }

          .slide-svg-dark {
            display: none;
          }
          .slide-svg-light {
            display: block;
          }
          .slide-svg-light path {
            fill: #faf9fa;
          }
          [data-theme='dark'] .slide-svg-dark {
            display: block;
          }
          [data-theme='dark'] .slide-svg-light {
            display: none;
          }
        `}
      </style>
      <StyledBannerSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        containerProps={{
          id: 'home-1',
        }}
        index={2}
        hasCurvedDivider={false}
      >
        <Flex flexDirection={['column', 'column', 'column', 'row']}>
          <Box
            m={['auto', 'auto', 'auto', '0']}
            width={['227px', '257px', '327px', '560px']}
            height={['306px', '356px', '406px', '639px']}
          >
            <Image src={bunnyImage} alt="banner-image" />
          </Box>
          <Flex
            m={['22px 0 0 0 0', '22px 0 0 0 0', '22px 0 0 0 0', '0 0 0 48px']}
            maxWidth={['697px']}
            alignSelf="center"
            flexDirection="column"
          >
            <Text fontSize={['38px', '38px', '64px']} lineHeight="110%" bold color="secondary">
              {t('Embrace the Celestial Realm, Ignite DeFi')}
            </Text>
            <Text fontSize={['16px', '24px']} lineHeight="110%" bold m="32px 0">
              {t('Unlock the Power of the Zodiac: Participate in our Celestial Voyage to Fuel the DeFi Revolution!')}
            </Text>
            <Flex>
              <Link href="/airdrop-program/quest"
              >
                <Button width="fit-content">{t('Join our Airdrop Program')}</Button>
              </Link>
              <Link href="/airdrop-program/membership">
                <Button ml="12px" variant="secondary" width="fit-content">
                  {t('Mint Community NFT')}
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </StyledBannerSection>
    </>
  )
}

export default AffiliatesBanner
