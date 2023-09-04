import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';

import { getRecordsIds, getRecordBasic, getRecordDetail, getRecordContent } from '@/lib/records';
import SEO from '@/components/seo';
import TwoSection, { OneSide } from '@/layouts/two-section';
import GridSection, { Grid } from '@/layouts/grid-section'
import TextSection from '@/layouts/text-section';
import Text from '@/components/text';
import styles from '@/components/text.module.scss'

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
		<TwoSection>
			<OneSide addPadding>
				<Text type='h1'>{recordBasic.name}</Text>
				<Text>
					<Text type='teal'># {recordBasic.type}</Text>
				</Text>
				<Text>{recordBasic.intro}</Text>
			</OneSide>
			<OneSide>
				<Image src={`/images/${recordBasic.image}`} alt={recordBasic.name} width={720} height={512}></Image>
			</OneSide>
		</TwoSection>
	)
}

type RecordDetail = {
	start: string, end: string, position: string,
	member: string, output: string, skill: string
};

function Detail({ recordDetail }: { recordDetail: RecordDetail }) {
	const skillArray = recordDetail.skill.split('\\n');

	return (
		<GridSection>
			<Grid>
				<div>
					<Text>執行期間：{recordDetail.start} ~ {recordDetail.end}</Text>
				</div>
				<div>
					<Text>身分：{recordDetail.position}</Text>
					<Text>成員：{recordDetail.member}</Text>
				</div>
				<div>
					<Text>產出：{recordDetail.output}</Text>
					<Text>技能：</Text>
					<Text type="ul">
						{skillArray.map((item) => {
							return <li key={item}>{item}</li>
						})}
					</Text>
				</div>
			</Grid>
		</GridSection>
	)
}

type RecordContent = string;

function Content({ recordContent }: { recordContent: RecordContent }) {
	return (
		<TextSection>
			<div dangerouslySetInnerHTML={{ __html: recordContent }} className={styles.markdown} />
		</TextSection>
	)
}

export default function Record({ recordBasic, recordDetail, recordContent }:
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