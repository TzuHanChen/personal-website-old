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

function Project() {
	return (
		<GridSection id="project">
			<Text type="h2">專案</Text>
			<Grid marginTop>
				<Card image="/images/personal-website.png"
					alt="個人網站" title="個人網站"
					info="展示專案、文章與經歷的網站"
					tag="Next.js, TypeScript, SCSS, SWR, GA4"
					button="效能報告"
					href="https://pagespeed.web.dev/analysis?url=https%3A%2F%2Ftzuhanchen.vercel.app%2F"
					newtab />
				<Card image="/images/distraction-loves-me.png"
					alt="數位分心" title="數位分心"
					info="數位分心教材與研究團隊的網站"
					tag="React, Bootstrap, Fetch, GA4"
					button="瀏覽網站"
					href="https://distractionlovesme.lab.nycu.edu.tw/"
					newtab />
				<Card image="/images/teamie.png"
					alt="Teamie" title="Teamie"
					info="開發中的專案團隊媒合平台"
					tag="Next.js, TypeScript, SCSS"
					button="敬請期待"
					// href="https://teamie.tw"
					newtab />
				
				<Card image="/images/personal-website-old.png"
					alt="個人網站 (舊)" title="個人網站 (舊)"
					info="展示專案、文章與經歷的網站"
					tag="JavaScript, SCSS, HTML, GA4"
					button="前往舊站"
					href="https://tzuhanchen.github.io"
					newtab />
				<Card image="/images/max-value.png"
					alt="珍食力" title="珍食力"
					info="協助使用者充分運用食材的手機應用程式原型"
					tag="Miro, Figma"
					button="作品說明"
					href="https://tzuhanchen.github.io/max-value.html"
					newtab />
				<Card image="/images/medical-forum.png"
					alt="醫療論壇" title="醫療論壇"
					info="供使用者發文討論醫療相關議題的網站"
					tag="Miro, PHP, MySQL"
					button="作品說明"
					href="https://tzuhanchen.github.io/medical-forum.html"
					newtab />
			</Grid>
		</GridSection>
	)
}

function Practice() {
	return (
		<GridSection id="practice">
			<Text type="h2">練習</Text>
			<Grid marginTop>
				<Card image="/images/nextjs-blog.png"
					alt="部落格" title="部落格"
					info="練習各種網頁渲染方式的網站"
					tag="Next.js, TypeScript, CSS, useEffect, SWR, Markdown"
					button="作品展示"
					href="https://nextjs-blog-tzuhanchen.vercel.app"
					newtab />
				<Card image="/images/tic-tac-toe.png"
					alt="井字遊戲" title="井字遊戲"
					info="可以穿梭時空的井字遊戲"
					tag="React, useState"
					button="作品展示"
					href="https://tzuhanchen.github.io/tic-tac-toe"
					newtab />
				<Card image="/images/api-connection.png"
					alt="API 串接" title="API 串接"
					info="利用三種方法隨機讀取三種資料"
					tag="XHR, Fetch, Axios"
					button="作品展示"
					href="https://tzuhanchen.github.io/api-connection"
					newtab />
			</Grid>
		</GridSection>
	)
}

function Article() {
	return (
		<GridSection id="article">
			<Text type="h2">文章</Text>
			<Grid marginTop>
				<Card image="/images/arete-internship.png"
					alt="亞瑞特實習" title="亞瑞特實習"
					info="實習日誌與任務成果"
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
		<TextSection id="about">
			<Text type="h2">關於我</Text>
			<Text>參與過產品開發流程的各項工作後，我選擇以前端工程為本人職業，並期許自己能夠利用過往經驗，與來自各領域的同事順利合作。</Text>
			<Text align="right">
				<Button href="/about">詳細自我介紹</Button>
			</Text>
		</TextSection>
	)
}

export default function Index() {
	return (
		<>
			<SEO title="陳子涵 TzuHan_Chen"
				description="陳子涵的個人網站"
				url="/"
				image="/images/personal-website-preview.png" />

			<main>
				<Hero />
				<Project />
				<Practice />
				<Article />
				<About />
			</main>
		</>
	)
}