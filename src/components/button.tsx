import Link from 'next/link';

import styles from './button.module.scss';

export default function Button({ ...props }) {
	let result = <></>;
	if (props.href) {
		if (props.newtab) {
			result = (
				<Link href={props.href} target='_blank'>
					<button className={styles.button}>
						{ props.children }
					</button>
				</Link>
			)
		} else {
			result = (
				<Link href={props.href}>
					<button className={styles.button}>
						{ props.children }
					</button>
				</Link>
			)
		}
	} else if (props.onClick) {
		result = (
			<button className={styles.button} onClick={props.onClick}>
				{ props.children }
			</button>
		)
	} else {
		result = (
			<button className={styles.button}>
				{ props.children }
			</button>
		)
	}
	return (result)
}

export function ButtonShowcase() {
	return (
		<>
			<Button href="/">button</Button>
			<Button href="https://tzuhanchen.github.io" newtab>
				tzuhanchen</Button>
		</>
	)
}