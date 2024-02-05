let swapSound: HTMLAudioElement

const swapSoundURL = 'https://zodiacswap.netlify.app/swap.mp3'

export const getSwapSound = () => {
  if (!swapSound) {
    swapSound = new Audio(swapSoundURL)
  }
  return swapSound
}
