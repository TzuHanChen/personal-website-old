import type { AppProps } from 'next/app'

// import '@/design-tokens/global.css';
// import { NotoSansTC } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
