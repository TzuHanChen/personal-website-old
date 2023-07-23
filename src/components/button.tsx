import Link from 'next/link';

import styles from './button.module.scss';

export default function Button({ ...props }) {
	const inside = <button className={styles.button}>
		{ props.children }</button>;
	let outside = <></>;
	if (props.external) {
		outside = <Link href={props.href} target='_blank'>
			{ inside }</Link>
	} else {
		outside = <Link href={props.href}>
			{ inside }</Link>
	}
	return (outside)
}

export function ButtonShowcase() {
	return (
		<>
			<Button href="/">button</Button>
			<Button href="https://tzuhanchen.github.io" external>button</Button>
		</>
	)
}