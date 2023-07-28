import styles from './grid-section.module.scss';

export default function GridSection({ ...props }) {
	return (
		<section id={props.id} className={styles["grid-section"]}>
			{ props.children }
		</section>
	)
}

export function Grid({ ...props }) {
	const addSpace = (props.marginTop) ? styles.mt : '';
	const allClass = `${styles.grid} ${addSpace}`
	return (
		<div className={allClass}>
			{ props.children }
		</div>
	)
}