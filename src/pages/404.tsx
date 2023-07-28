import Head from "next/head"

import FullSection from "@/layouts/full-sectoin"
import Text from "@/components/text"
import Button from "@/components/button"

export default function Custom404() {
	return (
		<>
			<Head>
				<meta name="robots" content="noindex" />
			</Head>
			<main>
				<FullSection>
					<Text type="h1">404 Not Found</Text>
					<Text>此頁面不存在，也許是手動輸入的網址有誤。你可以編輯網址，或者</Text>
					<Button href="/">回到首頁</Button>
				</FullSection>
			</main>
		</>
	)
}