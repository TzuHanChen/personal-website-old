import styles from './two-section.module.scss'

export default function TwoSection({ ...props }) {
	return (
		<section className={styles['two-section']}>
			{ props.children }
		</section>
	)
}