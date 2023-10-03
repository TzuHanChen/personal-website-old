import Head from 'next/head';
import Script from 'next/script';
import type { AppProps } from 'next/app'
import { Noto_Sans_TC, Fira_Code } from 'next/font/google'
const noto_sans_tc = Noto_Sans_TC({
	weight: ['300', '700'],
	style: ['normal'],
	subsets: ['latin'],
	display: 'swap',
})
const fira_code = Fira_Code({
	weight: ['400'],
	style: ['normal'],
	subsets: ['latin'],
	display: 'swap',
})

import Nav from '@/components/nav';
import '@/design-tokens/global.scss';

function Favicon() {
	return (
		<>
			<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
			<link rel="manifest" href="/favicon/site.webmanifest" />
		</>
	)
}

function Font() {
	return (
		<style jsx global>{`
			body {
				font-family: ${noto_sans_tc.style.fontFamily}, sans-serif;
			}
			code {
				font-family: ${fira_code.style.fontFamily}, monospaces;
			}
		`}</style>
	)
}

function GA4() {
	return ( <>
		<Script async src="https://www.googletagmanager.com/gtag/js?id=G-L1VLJWN6YZ" strategy="afterInteractive"></Script>
		<Script id="google-analytics" strategy="afterInteractive">
			{`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-4FQPG607TH');
			`}
		</Script>
	</>	)
}

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<Favicon />
			</Head>
			<GA4 />

			<Font />
			<Nav />
			<Component {...pageProps} />
		</>
	)
}