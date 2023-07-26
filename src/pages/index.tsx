import SEO from '@/lib/seo'

// import Nav from '@/components/nav'
import { TextShowcase } from '@/components/text'
// import { ButtonShowcase } from '@/components/button'
// import { CardShowcase } from '@/components/card'

export default function Home() {
	return (
		<>
			<SEO title="陳子涵 TzuHan_Chen"
				description="陳子涵的個人網站"
				url="/"
				image="/images/personal-website-preview.png" />

			<main>
				{/* <Nav /> */}
				<TextShowcase />
				{/* <ButtonShowcase /> */}
				{/* <CardShowcase /> */}
			</main>
		</>
	)
}