import { GetStaticPaths, GetStaticProps } from 'next';

import { getAllRecordsIds, getRecordData } from '@/lib/records-data';
import SEO from '@/lib/seo';

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = getAllRecordsIds();
	return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const recordData = await getRecordData(params?.id as string);
	return { props: { recordData } }
}

export default function Post(
	{ recordData }:
	{ recordData: { id: string, title: string, date: string, contentHtml: string } }) {
	return (
		<>
			<SEO title={recordData.title}
				description="陳子涵的自我介紹"
				url={`/records${recordData.id}`}
				image="/images/personal-website-preview.png" />

			<article>
				<h1>
					{recordData.title}
				</h1>
				<div dangerouslySetInnerHTML={{ __html: recordData.contentHtml }} />		
			</article>
		</>
	);
}