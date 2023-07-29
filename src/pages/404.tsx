import Head from "next/head"

import FullSection from "@/layouts/full-section"
import Text from "@/components/text"
import Button from "@/components/button"

export default function Custom404() {
	return (
		<>
			<Head>
				<title>404</title>
				<meta name="robots" content="noindex" />
			</Head>
			<main>
				<FullSection>
					<Text type="h1" align="center">404 Not Found</Text>
					<Text align="center">此頁面不存在。<br />
					你可以編輯網址，或者</Text>
					<Button href="/">回到首頁</Button>
				</FullSection>
			</main>
		</>
	)
}