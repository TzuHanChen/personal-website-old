import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';

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

	let order = await getRecordOrder(params?.id as string);
	let count = await getRecordCount();
	let prev, next;
	prev = (order == 1) ? {
		"id": "0",
		"name": "0"
	} : await getPrevRecord(order);
	next = (order == count) ? {
		"id": "0",
		"name": "0"
	} : await getNextRecord(order);

	return {
		props: { recordBasic, recordDetail, recordContent, recordLink, prev, next }
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

type OtherRecord = { id: string, name: string };

function PrevNext({ prev, next }:
	{ prev: OtherRecord, next: OtherRecord }) {
	let nextRecord, prevRecord;
	if (next.id == '0') {
		nextRecord = <Link href="/#records">
			<Block addPadding>
				<Text>下一個紀錄</Text>
				<Text type='h3'>返回所有紀錄</Text>
			</Block>
		</Link>
	} else {
		nextRecord = <Link href={next.id}>
			<Block addPadding>
				<Text>下一個紀錄</Text>
				<Text type='h3'>{next.name}</Text>
			</Block>
		</Link>
	}
	if (prev.id == '0') {
		prevRecord = <Link href="/#records">
			<Block addPadding textAlignRight>
				<Text>上一個紀錄</Text>
				<Text type='h3'>返回所有紀錄</Text>
			</Block>
		</Link>
	} else {
		prevRecord = <Link href={prev.id}>
			<Block addPadding textAlignRight>
				<Text>上一個紀錄</Text>
				<Text type='h3'>{prev.name}</Text>
			</Block>
		</Link>
	}

	return (
		<BlockSection>
			<BlockArea>
				{nextRecord}{prevRecord}
			</BlockArea>
		</BlockSection>
	)
}

export default function Record({ recordBasic, recordDetail, recordContent, recordLink, prev, next }:
	{ recordBasic: RecordBasic, recordDetail: RecordDetail, recordContent: RecordContent, recordLink: RecordLink,
	prev: OtherRecord, next: OtherRecord }) {
	return (
		<>
			<SEO title={`陳子涵 | ${recordBasic.name}`}
				description={recordBasic.intro}
				url={`/records/${recordBasic.id}`}
				image={`/images/${recordBasic.image}`} />

			<main>
				<Basic recordBasic={recordBasic} />
				<Detail recordDetail={recordDetail} />
				<Content recordContent={recordContent} />
				<OutsideLink recordLink={recordLink} />
				<PrevNext prev={prev} next={next} />
			</main>
		</>
	);
}