import SEO from '@/lib/seo'

// import Nav from '@/components/nav'
import Text, { TextShowcase } from '@/components/text'
// import { ButtonShowcase } from '@/components/button'
// import { CardShowcase } from '@/components/card'

import HeroSection from '@/layouts/hero-section'

export default function Home() {
	return (
		<>
			<SEO title="陳子涵 TzuHan_Chen"
				description="陳子涵的個人網站"
				url="/"
				image="/images/personal-website-preview.png" />

			<main>
				{/* <Nav /> */}
				{/* <TextShowcase /> */}
				{/* <ButtonShowcase /> */}
				{/* <CardShowcase /> */}

				<HeroSection>
					<Text type="h1" align="center">你好，我是
						<Text type="teal">陳子涵</Text>
					</Text>
					<Text type="h2" align="center">之前是前端網頁實習生，現在的目標是成為前端工程師</Text>
				</HeroSection>
			</main>
		</>
	)
}