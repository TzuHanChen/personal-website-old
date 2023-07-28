import styles from './text-section.module.scss';

export default function TextSection({ ...props }) {
	return (
		<section id={props.id} className={styles["text-section"]}>
			{ props.children }
		</section>
	)
}