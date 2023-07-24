import Head from 'next/head'

// import Nav from '@/components/nav'
// import { TextShowcase } from '@/components/text'
// import { ButtonShowcase } from '@/components/button'
import { CardShowcase } from '@/components/card'

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				{/* <Nav /> */}
				{/* <TextShowcase /> */}
				{/* <ButtonShowcase /> */}
				<CardShowcase />
			</main>
		</>
	)
}