import styles from './full-section.module.scss'

export default function FullSection({ ...props }) {
	return (
		<section className={styles["full-section"]}>
			{ props.children }
		</section>
	)
}