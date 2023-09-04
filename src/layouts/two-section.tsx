import styles from './two-section.module.scss'

export function OneSide({ ...props }) {
	const padding = (props.addPadding) ? styles['add-padding'] : null;
	const allClass = `${styles['one-side']} ${padding}`;
	return (
		<div className={allClass}>
			{ props.children }
		</div>
	)
}

export default function TwoSection({ ...props }) {
	return (
		<section className={styles['two-section']}>
			{ props.children }
		</section>
	)
}