import Image from 'next/image'
import useSWR from 'swr';

import SEO from '@/lib/seo'
import Text from '@/components/text'
import Button from '@/components/button'
import TextSection from '@/layouts/text-section'
import GridSection, { Grid } from '@/layouts/grid-section'
import styles from '@/design-tokens/utilities.module.scss'

function Intro() {
	return (
		<TextSection>
			<Image src="/images/photo.png" alt="photo"
				width={120} height={120} priority={true}
				className={`${styles.center} ${styles.circle}`} />

			<Text type="h2" align="center">你好，我是
				<Text type="teal">陳子涵</Text>
			</Text>
			<Text type="h3" align="center">之前是前端網頁實習生，現在的目標是成為前端工程師</Text>
			<Text>　　我目前使用 Next.js, React, TypeScript, SWR, SCSS 等前端工具，完成實習、接案、新創的專案與任務。能夠使用 React 製作元件、開發功能、串接資料、組成畫面。之前有接觸過介面設計、使用者體驗、後端開發，現在仍有持續利用過往經歷，與負責這些職位的夥伴討論、溝通與合作。如果你想找我聊聊新的合作機會，請聯繫我！</Text>
		</TextSection>
	)
}

function Experience() {
	return (
		<TextSection>
			<Text type="h2">經歷</Text>

			<Text type="h3">
				<Text type="teal">Teamie - 前端工程師</Text>　2022/09 ~ 現今
			</Text>
			<Text>Teamie 是一個學生新創團隊，我們的目標是打造一個專案夥伴媒合平台。</Text>
			<Text type="ul">
				<li>使用 Next.js + Bootstrap + SCSS，編輯樣式、製作元件、網頁切版。</li>
				<li>與前端夥伴合作開發：個人、專案、其它 (動態、動態、靜態頁面)。</li>
				<li>擔任技術前端組長，與行政策略組、行銷設計組、技術後端組合作。</li>
			</Text>

			<Text type="h3">
				<Text type="teal">亞瑞特數位社群行銷有限公司 - 前端網頁實習生</Text>　2022/11 ~ 2023/04
			</Text>
			<Text type="ul">
				<li>使用 JavaScript + SCSS + PHP，網頁切版、前後端分離、功能實作。</li>
				<li>獨立完成：製作公司的電子報模板、調整公司的內部報表產出網站、<br />
					製作客戶的產品介紹頁面。協助正職員工：開發客戶的心理測驗網站。</li>
			</Text>

			<Text type="h3">
				<Text type="teal">眾匯智能健康股份有限公司 - UI/UX設計團隊-實習生</Text>　2020/07 ~ 08
			</Text>
			<Text type="ul">
				<li>使用 XAMPP + MySQL + PHP，建置資料庫、實作各項功能。</li>
				<li>開發論壇網站的帳號、文章、留言、收藏、追蹤等功能。</li>
				<li>參與使用者體驗規劃，負責後端，與介面設計和前端的同學合作。</li>
			</Text>
		</TextSection>
	)
}

function TotalUsers() {
	const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSFIGLw3THQARBNhQTVJnFXcyfOATc3nLL9Z9zXlHKjlZdWSvtT8I1IcShj3x0ARK3XmcwF9OIzoVid/pub?gid=1358621105&single=true&output=tsv";

	const fetcher = (url: string) =>
		fetch(url).then((res) => res.text());
	const { data, error, isLoading } = useSWR(url, fetcher);

	if (error) {
		return ('Failed to load')
	}
	if (isLoading) {
		return ('Loading...')
	}
	if (data) {
		// 字串去除換行符號
		const dataOneline = data.replaceAll('\r\n', '\t');
		// 利用定位鍵把字串分割成陣列
		const dataArray = dataOneline.split('\t');
		const result = dataArray[(dataArray.length - 2)];
		return (result);
	}
}

function Skills() {
	return (
		<GridSection>
			<Grid>
				<div>
					<Text type="h2">技能</Text>

					<Text type="h3">網頁前端</Text>
					<Text>Next.js, React, TypeScript, SWR, SCSS</Text>
					<Text type="h3">版本控制</Text>
					<Text>Git, GitHub, GitLab</Text>
					<Text type="h3">介面設計、使用者體驗</Text>
					<Text>Figma, FigJam, Miro</Text>
				</div>

				<div>
					<Text type="h2">證書</Text>

					<Text>參加{' '}
						<Text type="link" href="https://growonairtw.withgoogle.com/events/digitaleducation">
						Google 數位人才探索計畫 </Text><br />
						於 2023/05 取得</Text>
					<Text type="ul">
						<li><Text type="link" href="https://www.credential.net/e8426561-bf2b-4951-816e-4bdfeeb6a6c7">Google Analytics (分析) 認證</Text></li>
						<li><Text type="link" href="https://oss.uppmkt.com/202305/kep/cer3/ga4/YHhGjM.png">Google 數位人才結業證書</Text></li>
					</Text>
					<Text type="h3">透過 GA4 收集到的<br />
						本網站使用者總數為{' '}
						<Text type="teal"><TotalUsers /></Text>
					</Text>
				</div>

				<div>
					<Text type="h2">認可</Text>

					<Text type="h3">放視大賞 - 入圍　2021/05</Text>
					<Text>畢業專題＂珍食力＂入圍<br />2021 放視大賞的行動應用類 -<br />軟體內容創意企劃組決賽。</Text>
					<Text type="ul">
						<li>使用者體驗、介面設計，<br />Miro + Figma</li>
					</Text>
					<Text>
						<Text type="link" href="https://www.dcaward-vgw.org.tw/tw/onlineExhibition/winningWorks/detail/31427">
							放視大賞得獎作品頁面</Text>
					</Text>
				</div>
			</Grid>
		</GridSection>
	)
}

function Education() {
	return (
		<TextSection>
			<Text type="h2">學歷</Text>

			<Text type="h3">
				<Text type="teal">國立台中教育大學 - 學士</Text>　2017/09 ~ 2021/06
			</Text>
			<Text>就讀數位內容科技學系。選修兩個群組課程：數位技術應用、數位設計。</Text>
		</TextSection>
	)
}

function Contact() {
	return (
		<GridSection>
			<Grid>
				<div>
					<Text type="h2">聯絡資訊</Text>

					<Text>居住地：台灣，台北市</Text>
					<Text>Email：
						<Text type="link" href="mailto:hahachentzuhan@gmail.com">hahachentzuhan@gmail.com</Text>
					</Text>
				</div>

				<div>
					<Text type="h2">網站連結</Text>

					<Text>
						<Text type="link" href="https://github.com/TzuHanChen">GitHub</Text>
					</Text>
					<Text>
						<Text type="link" href="https://vercel.com/tzuhanchen">Vercel</Text>
					</Text>
					<Text>
						<Text type="link" href="https://www.linkedin.com/in/tzuhanchen/">LinkedIn</Text>
					</Text>
				</div>

				<div>
					<Text type="h2">履歷</Text>

					<Text>
						<Button href="/TzuHanChen_Resume.pdf" newtab>履歷 PDF 檔案</Button>
					</Text>
					<br />
					<Text align="right">© 2023 陳子涵</Text>
				</div>
			</Grid>
		</GridSection>
	)
}

export default function About() {
	return (
		<>
			<SEO title="陳子涵 | 關於我"
				description="陳子涵的自我介紹"
				url="/about"
				image="/images/personal-website-preview.png" />

			<main>
				<Intro />
				<Experience />
				<Skills />
				<Education />
				<Contact />
			</main>
		</>
	)
}