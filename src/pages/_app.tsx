import Head from 'next/head';
import Script from 'next/script';
import type { AppProps } from 'next/app'
import { Noto_Sans_TC } from 'next/font/google'
const noto = Noto_Sans_TC({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

import Nav from '@/components/nav';
import '@/design-tokens/global.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />

        {/* font */}
        <style jsx global>{`
          html {
            font-family: ${noto.style.fontFamily};
          }
        `}</style>

        {/* Google tag (gtag.js) */}
        {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=G-4FQPG607TH"></Script>
        <Script>
          { window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-4FQPG607TH'); }
        </Script> */}
      </Head>

      <Nav />
      <Component {...pageProps} />
    </>
  )
}
