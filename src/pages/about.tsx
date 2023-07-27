import Image from 'next/image'

import SEO from '@/lib/seo'
import Text from '@/components/text'
import Button from '@/components/button'
import TextSection from '@/layouts/text-section'
import styles from '@/design-tokens/utilities.module.scss'

function Intro() {
	return (
		<TextSection>
			<Image src="/images/photo.png" alt="photo"
				width={120} height={120}
				className={`${styles.center} ${styles.circle}`} />

			<Text type="h2" align="center">你好，我是
				<Text type="teal">陳子涵</Text>
			</Text>
			<Text type="h3" align="center">之前是前端網頁實習生，現在的目標是成為前端工程師</Text>
			<Text>　　我目前使用 Next.js, React, Bootstrap, SCSS 等前端工具，完成實習、接案、新創的多項專案與任務。之前有接觸過介面設計、使用者體驗、後端開發，現在仍有持續利用這些經歷，與負責這些職位的夥伴討論、溝通與合作。我是一個冷靜、理性的人，遵循流程的同時保有調整的彈性。如果你想找我聊聊新的合作機會，請聯繫我！</Text>
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
			<Text>Teamie 是一個新創團隊，我們的目標是打造一個專案夥伴媒合平台。</Text>
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

export default function Home() {
	return (
		<>
			<SEO title="陳子涵 | 關於我"
				description="陳子涵的自我介紹"
				url="/about"
				image="/images/personal-website-preview.png" />

			<main>
				<Intro />
				<Experience />
				<Education />
			</main>
		</>
	)
}