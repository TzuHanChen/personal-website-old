import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';

import { getRecordsIds, getRecordBasic, getRecordDetail, getRecordContent, getRecordLink, getRecordOrder, getPrevRecord, getRecordCount, getNextRecord } from '@/lib/records';
import SEO from '@/components/seo';
import BlockSection, { BlockArea } from '@/layouts/block-section'
import TextSection from '@/layouts/text-section';
import Block from '@/components/block';
import Text from '@/components/text';
import Button from '@/components/button';
import styles from '@/components/text.module.scss'

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = await getRecordsIds();
	return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const recordBasic = await getRecordBasic(params?.id as string);
	const recordDetail = await getRecordDetail(params?.id as string);
	const recordContent = await getRecordContent(params?.id as string);
	const recordLink = await getRecordLink(params?.id as string);
	return {
		props:
			{ recordBasic, recordDetail, recordContent, recordLink }
	}
}

type RecordBasic = {
	id: string, image: string, name: string,
	type: string, intro: string, highlight: string
};

function Basic({ recordBasic }: { recordBasic: RecordBasic }) {
	return (
		<BlockSection>
			<BlockArea>
				<Block minHeight addPadding>
					<Text type='h1'>{recordBasic.name}</Text>
					<Text>
						<Text type='teal'># {recordBasic.type}</Text>
					</Text>
					<Text>{recordBasic.intro}</Text>
				</Block>
				<Block minHeight>
					<Image src={`/images/${recordBasic.image}`} priority={true} alt={recordBasic.name} width={720} height={512}></Image>
				</Block>
			</BlockArea>
		</BlockSection>
	)
}

type RecordDetail = {
	start: string, end: string, position: string,
	member: string, output: string, skill: string
};

function Detail({ recordDetail }: { recordDetail: RecordDetail }) {
	const skillArray = recordDetail.skill.split('\\n');

	return (
		<BlockSection>
			<BlockArea column={3}>
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
			</BlockArea>
		</BlockSection>
	)
}

type RecordContent = string;

function Content({ recordContent }: { recordContent: RecordContent }) {
	return (
		<TextSection>
			<article dangerouslySetInnerHTML={{ __html: recordContent }} className={styles.markdown} />
		</TextSection>
	)
}

type RecordLink = {
	outsideText: string, outsideLink: string, newTab: boolean
};

function OutsideLink({ recordLink }: { recordLink: RecordLink }) {
	let result;
	if (recordLink.outsideText == null) {
		result = '沒有相關連結';
	} else {
		const type = (recordLink.outsideText == '敬請期待') ? 'tertiary' : 'primary';
		result = (
			<Button href={recordLink.outsideLink}
				newTab={recordLink.newTab} type={type}>
				{recordLink.outsideText}
			</Button>
		);
	}

	return (
		<BlockSection>
			<BlockArea type='flex' column={3}>
				<Block addPadding>
					<Text type="h3">相關連結</Text>
					<Text align="right">{result}</Text>
				</Block>
			</BlockArea>
		</BlockSection>
	)
}

function PrevNext() {
	return (
		<BlockSection>
			<BlockArea>
				<Block addPadding>
					<Text>上一個紀錄 (開發中)</Text>
				</Block>
				<Block addPadding textAlignRight>
					<Text>下一個紀錄 (開發中)</Text>
				</Block>
			</BlockArea>
		</BlockSection>
	)
}

export default function Record({ recordBasic, recordDetail, recordContent, recordLink }:
	{ recordBasic: RecordBasic, recordDetail: RecordDetail, recordContent: RecordContent, recordLink: RecordLink }) {
	return (
		<>
			<SEO title={recordBasic.name}
				description={recordBasic.intro}
				url={`/records/${recordBasic.id}`}
				image={`/images/${recordBasic.image}`} />

			<main>
				<Basic recordBasic={recordBasic} />
				<Detail recordDetail={recordDetail} />
				<Content recordContent={recordContent} />
				<OutsideLink recordLink={recordLink} />
				<PrevNext />
			</main>
		</>
	);
}