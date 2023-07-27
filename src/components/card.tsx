import Image from 'next/image';

import Text from './text';
import Button from './button';
import styles from './card.module.scss';

export default function Card({ ...props }) {
	return (
		<div className={styles.card}>
			<Image src={props.image} alt={props.alt}
				width={300} height={213}
				className={styles.image} />

			<div className={styles["text-area"]}>
				<Text type="h3">{props.title}</Text>
				<Text type="p">{props.info}</Text>
			</div>

			<div className={styles["button-area"]}>
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
	info="展示專案、文章與經歷的網站" button="作品說明"
	href="/records/ssg-ssr" />;
	
	return (
		<>
			{ oneCard }{ oneCard }{ oneCard }
			{ oneCard }{ oneCard }{ oneCard }
		</>
	)
}