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
	return (
		<>
			<Card image="/images/medical-forum.png"
				alt="medical forum" title="醫療論壇"
				info="供使用者發文討論醫療相關議題的網站" button="作品說明"
				href="/medical-forum" />
			<Card image="/images/api-connection.png"
				alt="api connection" title="API 串接"
				info="利用三種方法隨機讀取三種資料" button="作品展示"
				href="/api-connection" newtab />
			<Card image="/images/medical-forum.png"
				alt="medical forum" title="醫療論壇"
				info="供使用者發文討論醫療相關議題的網站" button="作品說明"
				href="/medical-forum" />
			<Card image="/images/api-connection.png"
				alt="api connection" title="API 串接"
				info="利用三種方法隨機讀取三種資料" button="作品展示"
				href="/api-connection" newtab />
			<Card image="/images/medical-forum.png"
				alt="medical forum" title="醫療論壇"
				info="供使用者發文討論醫療相關議題的網站" button="作品說明"
				href="/medical-forum" />
			<Card image="/images/api-connection.png"
				alt="api connection" title="API 串接"
				info="利用三種方法隨機讀取三種資料" button="作品展示"
				href="/api-connection" newtab />
		</>
	)
}