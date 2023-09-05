import styles from './block-section.module.scss';

export default function BlockSection({ ...props }) {
	return (
		<section id={props.id} className={styles["grid-section"]}>
			{ props.children }
		</section>
	)
}

export function BlockArea({ ...props }) {
	const type = props.type || 'grid';
	const marginTop = (props.marginTop) ? styles['margin-top'] : null;
	const allClass = `${styles[type]} ${marginTop}`
	return (
		<div className={allClass}>
			{ props.children }
		</div>
	)
}