import localFont from 'next/font/local'

export const neuePlak = localFont({
  src: [
    {
      path: '../../public/assets/font/NeuePlak-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/assets/font/NeuePlak-UltraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/assets/font/NeuePlak-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/assets/font/NeuePlak-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/assets/font/NeuePlak-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/assets/font/NeuePlak-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/assets/font/NeuePlak-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/assets/font/NeuePlak-ExtraBlack.ttf',
      weight: '950',
      style: 'normal',
    },
  ],
  variable: '--font-neue-plak',
  display: 'swap',
})

export const neuePlakText = localFont({
  src: [
    {
      path: '../../public/assets/font/NeuePlakText-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-neue-plak-text',
  display: 'swap',
}) 