import styles from './grid-section.module.scss';

export default function GridSection({ ...props }) {
	return (
		<section className={styles["grid-section"]}>
			{ props.children }
		</section>
	)
}

export function Grid({ ...props }) {
	return (
		<div className={styles.grid}>
			{ props.children }
		</div>
	)
}