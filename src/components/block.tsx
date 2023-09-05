import styles from './block.module.scss'

export default function Block({ ...props }) {
	const widthCard = (props.widthCard) ? styles['width-card'] : null;
	const minHeight = (props.minHeight) ? styles['min-height'] : null;
	const addPadding = (props.addPadding) ? styles['add-padding'] : null;
	const textAlignRight = (props.textAlignRight) ? styles['text-align-right'] : null;
	const allClass = `${styles.block} ${widthCard} ${minHeight} ${addPadding} ${textAlignRight}`;
	
	return (
		<div className={allClass}>
			{ props.children }
		</div>
	)
}