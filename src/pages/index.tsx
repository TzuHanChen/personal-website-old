import SEO from '@/lib/seo'
import Text from '@/components/text'
import Button from '@/components/button'
import { CardShowcase } from '@/components/card'
import HeroSection from '@/layouts/hero-section'
import GridSection, { Grid } from '@/layouts/grid-section'
import TextSection from '@/layouts/text-section'
import ImageSection from '@/layouts/image-section'

function Hero() {
	return (
		<HeroSection>
			<Text type="h1" align="center">你好，我是
				<Text type="teal">陳子涵</Text>
			</Text>
			<Text type="h2" align="center">之前是前端網頁實習生，現在的目標是成為前端工程師</Text>
		</HeroSection>
	)
}

function Projects() {
	return (
		<GridSection>
			<Text type="h2">專案</Text>
			<Grid marginTop>
				<CardShowcase />
			</Grid>
		</GridSection>
	)
}

function About() {
	return (
		<TextSection>
			<Text type="h2">關於我</Text>
			<Text>參與過產品開發流程的各項工作後，我選擇以前端工程為本人職業，並期許自己能夠利用過往經驗，與來自各領域的同事順利合作。</Text>
			<Text align="right">
				<Button href="/about">詳細自我介紹</Button>
			</Text>
		</TextSection>
	)
}

export default function Home() {
	return (
		<>
			<SEO title="陳子涵 TzuHan_Chen"
				description="陳子涵的個人網站"
				url="/"
				image="/images/personal-website-preview.png" />

			<main>
				<Hero />
				<Projects />
				<About />
				<ImageSection src="/images/personal-website.png"
					alt="個人網站主視覺" />
			</main>
		</>
	)
}