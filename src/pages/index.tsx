import SEO from '@/lib/seo'
import Text from '@/components/text'
import Button from '@/components/button'
import Card from '@/components/card'
import HeroSection from '@/layouts/hero-section'
import GridSection, { Grid } from '@/layouts/grid-section'
import TextSection from '@/layouts/text-section'

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
				<Card image="/images/distraction-loves-me.png"
					alt="數位分心" title="數位分心"
					info="數位分心教材與研究團隊的網站" button="瀏覽網站"
					href="https://distractionlovesme.lab.nycu.edu.tw/"
					newtab />
				<Card image="/images/teamie.png"
					alt="Teamie" title="Teamie"
					info="開發中的專案團隊媒合平台" button="瀏覽網站"
					href="https://teamie.tw/"
					newtab />
			</Grid>
		</GridSection>
	)
}

function Practices() {
	return (
		<GridSection>
			<Text type="h2">練習</Text>
			<Grid marginTop>
				<Card image="/images/tic-tac-toe.png"
					alt="井字遊戲" title="井字遊戲"
					info="可以穿梭時空的井字遊戲" button="作品展示"
					href="https://tzuhanchen.github.io/tic-tac-toe"
					newtab />
				<Card image="/images/api-connection.png"
					alt="API 串接" title="API 串接"
					info="利用三種方法隨機讀取三種資料" button="作品展示"
					href="https://tzuhanchen.github.io/api-connection"
					newtab />
			</Grid>
		</GridSection>
	)
}

function Articles() {
	return (
		<GridSection>
			<Text type="h2">文章</Text>
			<Grid marginTop>
				<Card image="/images/arete-internship.png"
					alt="亞瑞特實習" title="亞瑞特實習"
					info="在亞瑞特實習的期間撰寫的實習日誌與任務成果"
					button="閱讀紀錄"
					href="https://tzuhanchen.github.io/arete-internship"
					newtab/>
				<Card image="/images/tech-notes.png"
					alt="技術筆記" title="技術筆記"
					info="依照學習地圖分類列出的筆記" button="閱讀筆記"
					href="https://tzuhanchen.github.io/tech-notes"
					newtab/>
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
				<Practices />
				<Articles />
				<About />
			</main>
		</>
	)
}