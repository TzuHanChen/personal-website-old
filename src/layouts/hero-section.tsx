import styles from './hero-section.module.scss';

export default function HeroSection({ ...props }) {
	return (
		<section className={styles["hero-section"]}>
			{ props.children }
		</section>
	);
}