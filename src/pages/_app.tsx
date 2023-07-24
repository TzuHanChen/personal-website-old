import type { AppProps } from 'next/app'
import { Noto_Sans_TC } from 'next/font/google'
const noto = Noto_Sans_TC({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

import '@/design-tokens/global.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${noto.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
