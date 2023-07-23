import Link from 'next/link';
import styles from './text.module.scss';

export default function Text({ ...props }) {
	const type = props.type || "p";
	const href = props.href;
	const children = props.children;
	let result = <></>;

	switch (type) {
		case "h1":
			result = <h1 className={styles.h1}>
				{children}</h1>;
			break;
		case "h2":
			result = <h2 className={styles.h2}>
				{children}</h2>;
			break;
		case "h3":
			result = <h3 className={styles.h3}>
				{children}</h3>;
			break;
		case "ol":
			result = <ol className={styles.ol}>
				{children}</ol>;
			break;
		case "ul":
			result = <ul className={styles.ul}>
				{children}</ul>;
			break;
		case "link":
			result = <p className={styles.p}>
				<Link className={styles.link} href={href} target='_blank'>
					{children}</Link></p>;
			break;
		case "teal":
			result = <span className={styles.teal}>
				{children}</span>;
			break;
		case "p":
		default:
			result = <p className={styles.p}>
				{children}</p>;
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

			<Text type="link" href="https://tzuhanchen.github.io">link</Text>

			<Text type="p">
				<Text type="teal">teal</Text>
			</Text>

			<Text type="p">p</Text>
			<Text>p</Text>
		</>
	)
}