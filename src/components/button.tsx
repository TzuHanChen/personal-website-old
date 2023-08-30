import Link from 'next/link';

import styles from './button.module.scss';

export default function Button({ ...props }) {
	let result = <></>;
	let type = props.type || "primary";
	let allClass = `${styles.button} ${styles[type]}`;
	if (props.href) {
		if (props.newTab) {
			result = (
				<Link href={props.href} target='_blank'>
					<button className={allClass}>
						{ props.children }
					</button>
				</Link>
			)
		} else {
			result = (
				<Link href={props.href}>
					<button className={allClass}>
						{ props.children }
					</button>
				</Link>
			)
		}
	} else if (props.onClick) {
		result = (
			<button className={allClass} onClick={props.onClick}>
				{ props.children }
			</button>
		)
	} else {
		result = (
			<button className={allClass}>
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
			<Button href="/" type="secondary">button</Button>
			<Button href="/" type="tertiary">button</Button>
			<Button href="https://tzuhanchen.github.io" newTab>
				tzuhanchen</Button>
		</>
	)
}