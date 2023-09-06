import styles from './block-section.module.scss';

export default function BlockSection({ ...props }) {
	return (
		<section id={props.id} className={styles["block-section"]}>
			{ props.children }
		</section>
	)
}

export function BlockArea({ ...props }) {
	const type = (props.type == 'flex') ? styles['flex'] : styles['grid'];
	const marginTop = (props.marginTop) ? styles['margin-top'] : null;
	const column = (props.column == 3) ? styles['grid-3'] : null;
	const allClass = `${type} ${marginTop} ${column}`;
	return (
		<div className={allClass}>
			{ props.children }
		</div>
	)
}