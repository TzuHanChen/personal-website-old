import type { GetServerSideProps } from 'next'

import SEO from '@/components/seo'
import Text from '@/components/text'
import Button from '@/components/button'
import Card, { CardImage, CardText, CardButton } from '@/components/card'
import HeroSection from '@/layouts/hero-section'
import BlockSection, { BlockArea } from '@/layouts/block-section'
import TextSection from '@/layouts/text-section'
import { getRecordsCards } from '@/lib/records'
import styles from '@/design-tokens/utilities.module.scss'

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

type RecordsCards = {
	id: number, image: string, name: string,
	type: string, intro: string, highlight: string,
	records_links: {
		outsideText: string, outsideLink: string, newTab: boolean
	}[]
}[];

export const getServerSideProps: GetServerSideProps<
	{ recordsCards: RecordsCards }> = async () => {
	const recordsCards = await getRecordsCards();
	return { props: { recordsCards } };
}

function Records(
	{ recordsCards }: { recordsCards: RecordsCards }) {
	const result = recordsCards.map((
		{ id, image, name, type, intro, highlight, records_links }
	) => (
		<Card key={id}>
			<CardImage image={image} alt={name} />
			<CardText>
				<div className={styles.jcsb}>
					<Text type="h3">{name}</Text>
					<Text><Text type="verdigris"># {type}</Text></Text>
				</div>
				<Text type="p">{intro}</Text>
				<Text><Text type="teal">{highlight}</Text></Text>
			</CardText>
			<CardButton>
				<Text></Text>
				{ (records_links[0].newTab) ? 
				<Button href={records_links[0].outsideLink} newTab>
				{records_links[0].outsideText}</Button> :
				<Button href={records_links[0].outsideLink}>
				{records_links[0].outsideText}</Button> }
			</CardButton>
		</Card>
	))

	return (
		<BlockSection>
			<Text type="h2">職涯紀錄</Text>
			<BlockArea marginTop column={3}>{result}</BlockArea>
		</BlockSection>
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

export default function Index(
	{ recordsCards }: { recordsCards: RecordsCards }) {
	return (
		<>
			<SEO title="陳子涵 TzuHan_Chen"
				description="陳子涵的個人網站"
				url="/"
				image="/images/personal-website-preview.png" />

			<main>
				<Hero />
				<Records recordsCards={recordsCards} />
				<About />
			</main>
		</>
	)
}