import { GetStaticProps } from 'next';
import Image from 'next/image';

import { getMarkdownContent } from '@/lib/convert'
import SEO from '@/components/seo'
import Text from '@/components/text'
import Block from '@/components/block'
import TextSection from '@/layouts/text-section'
import BlockSection, { BlockArea } from '@/layouts/block-section'
import textStyles from '@/components/text.module.scss'
import utilities from '@/design-tokens/utilities.module.scss'

export const getStaticProps: GetStaticProps = async () => {
	const testContent = await getMarkdownContent('src/pages/lab', 'digital-education-test');
	const eventContent = await getMarkdownContent('src/pages/lab', 'digital-education-event');
	return { props: { testContent, eventContent } }
}

type Markdown = string;

function Title() {
	return (
		<TextSection>
			<Text type='h1'>數位人才</Text>
			<Text>我參加 Google 數位人才探索計畫的期間留下的紀錄</Text>
		</TextSection>
	)
}

function Flow() {
	return (
		<BlockSection>
			<BlockArea>
				<Block addPadding>
					<Text type='h2'>報名計畫</Text>
					<Text><Text type='link' href='https://growonairtw.withgoogle.com/events/digitaleducation'>Home - Google 數位人才探索計畫</Text></Text>
				</Block>
				<Block flexCenter>
					<Image src='/images/digital-education-flow.png' alt='Google 數位人才探索計畫 流程圖' width={480} height={480} className={utilities.bdrd30}/>
				</Block>
			</BlockArea>
		</BlockSection>
	)
}

function Basic() {
	return (
		<BlockSection>
			<BlockArea>
				<Block addPadding>
					<Text type='h2'>基礎認證</Text>
					<Text>完成 GA4 學程</Text>
					<Text><Text type='link' href='https://skillshop.exceedlms.com/student/catalog/list?category_ids=6452-google-analytics-4'>Google Analytics (分析) 4 - Google 好學堂</Text></Text>
					<Text>選修講師指導課程</Text>
					<Text>完成基礎認證（總分 45/50）</Text>
					<Text><Text type='link' href='https://www.credential.net/e8426561-bf2b-4951-816e-4bdfeeb6a6c7' newTab>Google Analytics (分析) 認證</Text></Text>
				</Block>
				<Block flexCenter>
					<Image src='/images/digital-education-certificate.png' alt='Google Analytics (分析) 認證 證書' width={480} height={480} className={utilities.bdrd30}/>
				</Block>
			</BlockArea>
		</BlockSection>
	)
}

function Capstone() {
	return (
		<BlockSection>
			<BlockArea>
				<Block addPadding>
					<Text type='h2'>總整課程</Text>
					<Text>報名總整課程</Text>
					<Text>完成總整課程</Text>
					<Text>填寫回饋問卷</Text>
				</Block>
				<Block addPadding>
					<Text type='h2'>課後測驗</Text>
					<Text>完成課後測驗（總分 38/40）</Text>
				</Block>
			</BlockArea>
		</BlockSection>
	)
}

function Test({ testContent }: { testContent: Markdown }) {
	return (
		<TextSection>
			<article dangerouslySetInnerHTML={{ __html: testContent }} className={textStyles.markdown} />
		</TextSection>
	)
}

function Completion() {
	return (
		<BlockSection>
			<BlockArea>
				<Block addPadding>
					<Text type='h2'>結業證書</Text>
					<Text>
						<Text type='link' href='https://oss.uppmkt.com/202305/kep/cer3/ga4/YHhGjM.png' newTab>Google 數位人才結業證書</Text>
					</Text>
				</Block>
				<Block flexCenter>
					<Image src='/images/digital-education-completion.png' alt='Google 數位人才結業證書' width={480} height={480} className={utilities.bdrd30}/>
				</Block>
			</BlockArea>
		</BlockSection>
	)
}

function Career() {
	return (
		<BlockSection>			
			<BlockArea>
				<Block addPadding>
					<Text type='h2'>職涯增能方案</Text>
					<Text>參加職涯增能課程</Text>
					<Text>履歷課程：數位人才中英文履歷優化工作坊</Text>
					<Text>面試課程：如何準備數位職位面試</Text>
				</Block>
				<Block addPadding>
					<Text type='h2'>報名活動</Text>
					<Text>上傳個人履歷</Text>
					<Text>報名數位人才媒合日</Text>
					<Text>公布一對一面試媒合結果</Text>
					<Text>閱讀行前通知文件</Text>
					<Text>閱讀活動說明簡報</Text>
				</Block>
			</BlockArea>
		</BlockSection>
	)
}

function Event({ eventContent }: { eventContent: Markdown }) {
	return (
		<TextSection>
			<article dangerouslySetInnerHTML={{ __html: eventContent }} className={textStyles.markdown} />
		</TextSection>
	)
}

export default function DigitalEducation(
	{ testContent, eventContent }:
		{ testContent: Markdown, eventContent: Markdown }) {
	return (
		<>
			<SEO title="數位人才"
				description="我參加 Google 數位人才探索計畫的期間留下的紀錄"
				url="/lab/digital-education"
				image="/images/digital-education.png" />

			<main>
				<Title />
				<Flow />
				<Basic />
				<Capstone />
				<Test testContent={testContent} />
				<Completion />
				<Career />
				<Event eventContent={eventContent} />
			</main>
		</>
	)
}