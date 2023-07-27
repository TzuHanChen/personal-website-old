import styles from './text-section.module.scss';

export default function TextSection({ ...props }) {
	return (
		<section className={styles["text-section"]}>
			{ props.children }
		</section>
	);
}