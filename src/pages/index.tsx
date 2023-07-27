import SEO from '@/lib/seo'

// import Nav from '@/components/nav'
import Text, { TextShowcase } from '@/components/text'
import Button, { ButtonShowcase } from '@/components/button'
// import { CardShowcase } from '@/components/card'

import HeroSection from '@/layouts/hero-section'
import TextSection from '@/layouts/text-section'

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

				<TextSection>
					<Text type="h2">關於我</Text>
					<Text>參與過產品開發流程的各項工作後，我選擇以前端工程為本人職業，並期許自己能夠利用過往經驗，與來自各領域的同事順利合作。</Text>
					<Text align="right">
						<Button href="/about">詳細自我介紹</Button>
					</Text>
				</TextSection>
			</main>
		</>
	)
}