import { InferGetStaticPropsType, GetStaticProps } from 'next';

import SEO from '@/components/seo'
import Text from '@/components/text'
import Button from '@/components/button'
import Card, { CardImage, CardText, CardButton } from '@/components/card'
import HeroSection from '@/layouts/hero-section'
import GridSection, { Grid } from '@/layouts/grid-section'
import TextSection from '@/layouts/text-section'
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

type AllRecordsBasic = {
	id: number, image: string, name: string,
	shortIntro: string, highlight: string, type: string,
	buttonText: string, buttonLink: string
}[];

export const getStaticProps: GetStaticProps<{
	allRecordsBasic: AllRecordsBasic
}> = async () => {
	const endpoint = 'https://tzuhanchen-website.hasura.app/v1/graphql';
	const headers = {
		'Content-Type': 'application/json; charset=UTF-8',
		"x-hasura-admin-secret": "g9hbGctVU0h9PAsNkwduoWTbaMn4ztJVvb8zPhqxkN5CILiw9yuUuDRoaJuNJZQa"
	};
	const body = {
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
	};

	const res = await fetch(endpoint, {
		method: 'POST',
		headers: headers,
		body: JSON.stringify(body)
	});
	const data = await res.json();
	const allRecordsBasic = data.data.records_basic;

	return { props: { allRecordsBasic } };
}

function Records({
	allRecordsBasic
}: { allRecordsBasic: AllRecordsBasic }) {
	const result = allRecordsBasic.map(
	({ id, image, name, shortIntro, highlight, 
	type, buttonText, buttonLink }) => (
		<Card key={id}>
			<CardImage image={image} alt={name} />
			<CardText>
				<div className={styles.jcsb}>
					<Text type="h3">{name}</Text>
					<Text><Text type="verdigris"># {type}</Text></Text>
				</div>
				<Text type="p">{shortIntro}</Text>
				<Text><Text type="teal">{highlight}</Text></Text>
			</CardText>
			<CardButton>
				{/* <Button href={buttonLink} type="secondary">{buttonText}</Button> */}
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
				<About />
			</main>
		</>
	)
}