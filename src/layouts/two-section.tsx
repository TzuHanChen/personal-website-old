import styles from './two-section.module.scss'

export function OneSide({ ...props }) {
	const addPadding = (props.addPadding) ? styles['add-padding'] : null;
	const minHeight = (props.minHeight) ? styles['min-height'] : null;
	const textAlignRight = (props.textAlignRight) ? styles['text-align-right'] : null;
	const allClass = `${styles['one-side']} ${minHeight} ${addPadding} ${textAlignRight}`;
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