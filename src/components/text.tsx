import Link from 'next/link';
import styles from './text.module.scss';

export default function Text({ ...props }) {
	const type = props.type || "p";
	const align = props.align || '';
	const allClass = `${styles[type]} ${styles[align]}`;
	const children = props.children;
	let result = <></>;

	switch (type) {
		case "h1":
			result = <h1 className={allClass}>{children}</h1>;
			break;
		case "h2":
			result = <h2 className={allClass}>{children}</h2>;
			break;
		case "h3":
			result = <h3 className={allClass}>{children}</h3>;
			break;
		case "ol":
			result = <ol className={allClass}>{children}</ol>;
			break;
		case "ul":
			result = <ul className={styles.ul}>{children}</ul>;
			break;
		case "link":
			result = <Link className={styles.link} href={props.href}
				target='_blank'>{children}</Link>;
			break;
		case "teal":
			result = <span className={styles.teal}>{children}</span>;
			break;
		case "verdigris":
			result = <span className={styles.verdigris}>{children}</span>;
			break;
		case "mediumGray":
			result = <span className={styles.mediumGray}>{children}</span>;
			break;
		case "p":
		default:
			result = <p className={allClass}>{children}</p>;
	}

	return (result)
}

export function TextShowcase() {
	return (
		<>
			<Text type="h1">h1</Text>
			<Text type="h2">h2</Text>
			<Text type="h3">h3</Text>

			<Text type="ol">
				<li>li</li>
			</Text>
			<Text type="ul">
				<li>li</li>
			</Text>

			<Text type="p">
				<Text type="link" href="https://tzuhanchen.github.io">link</Text>
			</Text>

			<Text type="p">
				<Text type="teal">teal</Text>
			</Text>
			
			<Text type="p">
				<Text type="verdigris">verdigris</Text>
			</Text>

			<Text type="p">p</Text>
			<Text>p</Text>
			
			<Text align="center">p</Text>
			<Text align="right">p</Text>
		</>
	)
}