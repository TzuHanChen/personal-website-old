import Image from 'next/image';

import Text from './text';
import Button from './button';
import styles from './card.module.scss';

export default function Card({ ...props }) {
	return (
		<div className={styles.card}>
			{(props.image) ?
				<Image src={props.image} alt={props.alt}
					width={300} height={213}
					className={styles.image} /> : null
			}

			<div className={styles["text-area"]}>
				<Text type="h3">{props.title}</Text>
				<Text type="p">{props.info}</Text>
				<Text><Text type="teal">{props.tag}</Text></Text>
			</div>

			<div className={styles["button-area"]}>
				{/* <span>{props.type}</span> */}
				<Button href={props.href} newtab={props.newtab}>
					{props.button}
				</Button>
			</div>
		</div>
	)
}

export function CardShowcase() {
	const oneCard = <Card image="/images/personal-website.png"
		alt="personal website" title="個人網站"
		info="展示專案、文章與經歷的網站" tag="Next.js"
		button="作品說明"
		href="/records/ssg-ssr" />;

	return (
		<>
			{oneCard}{oneCard}{oneCard}
			{oneCard}{oneCard}{oneCard}
		</>
	)
}