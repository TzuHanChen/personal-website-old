import Image from 'next/image';

export default function ImageSection({ ...props }) {
	return (
		<section>
			<Image src={props.src} alt={props.alt}
				width={1440} height={1024} priority={true} />
		</section>
	)
}