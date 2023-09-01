import { GetStaticPaths, GetStaticProps } from 'next';

import { getRecordsIds, getRecordBasic, getRecordDetail, getRecordContent } from '@/lib/records';
import SEO from '@/components/seo';
import FullSection from '@/layouts/full-section';
import TextSection from '@/layouts/text-section';

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = await getRecordsIds();
	return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const recordBasic = await getRecordBasic(params?.id as string);
	const recordDetail = await getRecordDetail(params?.id as string);
	const recordContent = await getRecordContent(params?.id as string);
	return { props: { recordBasic, recordDetail, recordContent } }
}

type RecordBasic = {
	id: string, image: string, name: string,
	type: string, intro: string, highlight: string
};

function Basic({ recordBasic }: { recordBasic: RecordBasic }) {
	return (
		<FullSection>
			<p>{recordBasic.id}</p>
			<p>{recordBasic.image}</p>
			<p>{recordBasic.name}</p>
			<p>{recordBasic.type}</p>
			<p>{recordBasic.intro}</p>
			<p>{recordBasic.highlight}</p>
		</FullSection>
	)
}

type RecordDetail = {
	start: string, end: string, position: string,
	member: string, output: string, skill: string
};

function Detail({ recordDetail }: { recordDetail: RecordDetail }) {
	return (
		<FullSection>
			<p>{recordDetail.start}</p>
			<p>{recordDetail.end}</p>
			<p>{recordDetail.position}</p>
			<p>{recordDetail.member}</p>
			<p>{recordDetail.output}</p>
			<p>{recordDetail.skill}</p>
		</FullSection>
	)
}

type RecordContent = string;

function Content({ recordContent }: { recordContent: RecordContent }) {
	return (
		<TextSection>
			<div dangerouslySetInnerHTML={{ __html: recordContent }} />
		</TextSection>
	)
}

export default function Record(
	{ recordBasic, recordDetail, recordContent }:
		{ recordBasic: RecordBasic, recordDetail: RecordDetail, recordContent: RecordContent }) {
	return (
		<>
			<SEO title={recordBasic.name}
				description="陳子涵的自我介紹"
				url={`/records${recordBasic.id}`}
				image="/images/personal-website-preview.png" />

			<main>
				<Basic recordBasic={recordBasic} />
				<Detail recordDetail={recordDetail} />
				<Content recordContent={recordContent} />
			</main>
		</>
	);
}