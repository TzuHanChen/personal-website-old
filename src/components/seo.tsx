import Head from "next/head"

export default function SEO({ ...props }) {
	const title = props.title;
	const description = props.description;
	const DEPLOYMENT_URL = "https://tzuhanchen.vercel.app";
	const url = `${DEPLOYMENT_URL}${props.url}`;
	const image = `${DEPLOYMENT_URL}${props.image}`;

	return (
		<Head>
			{/* Primary Meta Tags */}
			<title>{title}</title>
			<meta name="title" content={title} />
			<meta name="description" content={description} />

			{/* Open Graph / Facebook */}
			<meta property="og:type" content="website" />
			<meta property="og:url" content={url} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />

			{/* Twitter */}
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content={url} />
			<meta property="twitter:title" content={title} />
			<meta property="twitter:description" content={description} />
			<meta property="twitter:image" content={image} />

			{/* Meta Tags Generated with https://metatags.io */}
		</Head>
	)
}