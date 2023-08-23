import Image from 'next/image';

import Text from './text';
import Button from './button';
import styles from './card.module.scss';

export function CardImage({ ...props }) {
	return (
		<Image src={`/images/${props.image}`} alt={props.alt}
			width={300} height={213}
			className={styles["image-area"]} />
	)
}

export function CardText({ ...props }) {
	return (
		<div className={styles["text-area"]}>
			{props.children}
		</div>
	)
}

export function CardButton({ ...props }) {
	return (
		<div className={styles["button-area"]}>
			{ props.children }
		</div>
	)
}

export default function Card({ ...props }) {
	return (
		<div className={styles.card}>
			{props.children}
		</div>
	)
}

export function CardShowcase() {
	const oneCard = <Card>
		<CardImage image="personal-website.png"
			alt="個人網站" />
		<CardText>
			<Text type="h3">個人網站</Text>
			<Text type="p">展示專案、文章與經歷的網站</Text>
			<Text><Text type="teal">Next.js, TypeScript, SCSS, SWR, GA4, SEO</Text></Text>
		</CardText>
		<CardButton>
			<Text><Text type="verdigris">#專案</Text></Text>
			<Button href={'/'}>作品說明</Button>
		</CardButton>
	</Card>;

	return (
		<>
			{oneCard}{oneCard}{oneCard}
			{oneCard}{oneCard}{oneCard}
		</>
	)
}