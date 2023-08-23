import { InferGetStaticPropsType, GetStaticProps } from 'next';

import SEO from '@/lib/seo'
import Text from '@/components/text'
import Button from '@/components/button'
import Card, { CardImage, CardText, CardButton } from '@/components/card'
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

type AllRecordsBasic = {
	id: number, image: string, name: string,
	shortIntro: string, highlight: string, type: string,
	buttonText: string, buttonLink: string
}[];

export const getStaticProps: GetStaticProps<{
	allRecordsBasic: AllRecordsBasic
}> = async () => {
	const endpoint = 'https://tzuhanchen-website.hasura.app/v1/graphql';
	const res = await fetch(endpoint, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json; charset=UTF-8',
			"x-hasura-admin-secret": "g9hbGctVU0h9PAsNkwduoWTbaMn4ztJVvb8zPhqxkN5CILiw9yuUuDRoaJuNJZQa"
		},
		body: JSON.stringify({
			"query": `query getAllRecordsBasic {
				records_basic(order_by: {id: desc}, where: {public: {_eq: true}}) {
					id
					image
					name
					shortIntro
					highlight
					type
					buttonText
					buttonLink
				}
			}`
		})
	});

	const data = await res.json();

	const allRecordsBasic = data.data.records_basic;
	return { props: { allRecordsBasic } };
}

function Records({
	allRecordsBasic
}: { allRecordsBasic: AllRecordsBasic }) {
	const result = allRecordsBasic.map(({ id, image, name,
		shortIntro, highlight, type, buttonText, buttonLink }) => (
		<Card key={id}>
			<CardImage image={image} alt={name} />
			<CardText>
				<Text type="h3">{name}</Text>
				<Text type="p">{shortIntro}</Text>
				<Text><Text type="teal">{highlight}</Text></Text>
			</CardText>
			<CardButton>
				<Text><Text type="verdigris"># {type}</Text></Text>
				<Button href={buttonLink} newtab>{buttonText}</Button>
			</CardButton>
		</Card>
	))
	return (
		<GridSection>
			<Text type="h2">職涯紀錄</Text>
			<Grid marginTop>{result}</Grid>
		</GridSection>
	)
}

function Project() {
	return (
		<GridSection id="project">
			<Text type="h2">職涯紀錄</Text>
			<Grid marginTop>
				<Card>
					<CardImage image="personal-website.png"
						alt="個人網站" />
					<CardText>
						<Text type="h3">個人網站</Text>
						<Text type="p">展示專案、文章與經歷的網站</Text>
						<Text><Text type="teal">Next.js, TypeScript, SCSS, SWR, GA4, SEO</Text></Text>
					</CardText>
					<CardButton>
						<Text><Text type="verdigris"># 專案</Text></Text>
						<Button href="https://pagespeed.web.dev/analysis?url=https%3A%2F%2Ftzuhanchen.vercel.app%2F" newtab>效能報告</Button>
					</CardButton>
				</Card>

				<Card>
					<CardImage image="distraction-loves-me.png"
						alt="數位分心" />
					<CardText>
						<Text type="h3">數位分心</Text>
						<Text type="p">數位分心教材與研究團隊的網站</Text>
						<Text><Text type="teal">React, Bootstrap, Fetch, GA4</Text></Text>
					</CardText>
					<CardButton>
						<Text><Text type="verdigris"># 專案</Text></Text>
						<Button href="https://distractionlovesme.lab.nycu.edu.tw/" newtab>瀏覽網站</Button>
					</CardButton>
				</Card>

				<Card>
					<CardImage image="in-progress.png"
						alt="Teamie" />
					<CardText>
						<Text type="h3">Teamie</Text>
						<Text type="p">開發中的專案團隊媒合平台</Text>
						<Text><Text type="teal">Next.js, TypeScript, SCSS</Text></Text>
					</CardText>
					<CardButton>
						<Text><Text type="verdigris"># 專案</Text></Text>
						<Button>敬請期待</Button>
					</CardButton>
				</Card>

				<Card>
					<CardImage image="personal-website-old.png"
						alt="個人網站 (舊)" />
					<CardText>
						<Text type="h3">個人網站 (舊)</Text>
						<Text type="p">展示專案、文章與經歷的網站</Text>
						<Text><Text type="teal">JavaScript, SCSS, HTML, GA4</Text></Text>
					</CardText>
					<CardButton>
						<Text><Text type="verdigris"># 專案</Text></Text>
						<Button href="https://tzuhanchen.github.io" newtab>前往舊站</Button>
					</CardButton>
				</Card>

				<Card>
					<CardImage image="max-value.png"
						alt="珍食力" />
					<CardText>
						<Text type="h3">珍食力</Text>
						<Text type="p">協助使用者充分運用食材的手機應用程式原型</Text>
						<Text><Text type="teal">Miro, Figma</Text></Text>
					</CardText>
					<CardButton>
						<Text><Text type="verdigris"># 專案</Text></Text>
						<Button href="https://tzuhanchen.github.io/projects/max-value.html" newtab>作品說明</Button>
					</CardButton>
				</Card>

				<Card>
					<CardImage image="medical-forum.png"
						alt="醫療論壇" />
					<CardText>
						<Text type="h3">醫療論壇</Text>
						<Text type="p">供使用者發文討論醫療相關議題的網站</Text>
						<Text><Text type="teal">PHP, MySQL, Miro</Text></Text>
					</CardText>
					<CardButton>
						<Text><Text type="verdigris"># 專案</Text></Text>
						<Button href="https://tzuhanchen.github.io/projects/medical-forum.html" newtab>作品說明</Button>
					</CardButton>
				</Card>
			</Grid>
		</GridSection>
	)
}

function Practice() {
	return (
		<GridSection id="practice">
			<Text type="h2">練習</Text>
			<Grid marginTop>
				<Card image="/images/simple-note.png"
					alt="簡單筆記" title="簡單筆記"
					info="新增、讀取、更新、刪除，你可在此編輯任何筆記"
					tag="RESTful API, SWR"
					button="作品展示"
					href="/simple-note" />
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
					href="https://tzuhanchen.github.io/projects/api-connection"
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
					tag="EDM, JavaScript, SCSS, HTML, PHP"
					button="閱讀紀錄"
					href="https://tzuhanchen.github.io/arete-internship"
					newtab />
				<Card image="/images/tech-notes.png"
					alt="技術筆記" title="技術筆記"
					info="依照學習地圖分類列出的筆記"
					tag="HTML, CSS, JavaScript, Git, SCSS, Node.js"
					button="閱讀筆記"
					href="https://tzuhanchen.github.io/tech-notes"
					newtab />
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

export default function Index({
	allRecordsBasic
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<SEO title="陳子涵 TzuHan_Chen"
				description="陳子涵的個人網站"
				url="/"
				image="/images/personal-website-preview.png" />

			<main>
				<Hero />
				<Records allRecordsBasic={allRecordsBasic} />
				{/* <Project /> */}
				{/* <Practice /> */}
				{/* <Article /> */}
				<About />
			</main>
		</>
	)
}