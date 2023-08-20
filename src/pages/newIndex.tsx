import { InferGetStaticPropsType, GetStaticProps } from 'next';

import SEO from '@/lib/seo';
import FullSection from '@/layouts/full-section';
import Card from '@/components/card';

type AllRecordsBasic = { id: number, image: string, name: string, 
	shortIntro: string, highlight: string, type: string, 
	internalPage: { buttonText: string, link: string } }[];

export const getStaticProps: GetStaticProps<{
	allRecordsBasic: AllRecordsBasic
}> = async () => {
	const res = await fetch('https://tzuhanchen-website.hasura.app/v1/graphql', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json; charset=UTF-8',
			"x-hasura-admin-secret": "g9hbGctVU0h9PAsNkwduoWTbaMn4ztJVvb8zPhqxkN5CILiw9yuUuDRoaJuNJZQa"
		},
		body: JSON.stringify({
			"query": `query getAllRecordsBasic {
				records_basic {
					id
					image
					name
					shortIntro
					highlight
					type
					internalPage
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
	const result = allRecordsBasic.map(({id, image, name, 
		shortIntro, highlight, type, internalPage }) => (
		<Card key={id} image={`/images/${image}`}
		alt={name} title={name}
		info={shortIntro} tag={highlight}
		type={type}
		button={internalPage.buttonText}
		href={internalPage.link} />
	))
	return result;
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
				<FullSection>
					<Records allRecordsBasic={allRecordsBasic} />
				</FullSection>

				{/* <Hero /> */}
				{/* <Project /> */}
				{/* <Practice /> */}
				{/* <Article /> */}
				{/* <About /> */}
			</main>
		</>
	)
}