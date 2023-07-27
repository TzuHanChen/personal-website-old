import { GetServerSideProps } from 'next';
// import { getSortedRecordsData } from "../lib/records";

const DEPLOYMENT_URL = 'https://tzuhanchen.vercel.app';

function generateSiteMap() {
	return `<xml version="1.0" encoding="UTF-8">
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
			<!-- Manually set the URLs I already know -->
			<url>
				<loc>${DEPLOYMENT_URL}</loc>
			</url>
			<url>
				<loc>${DEPLOYMENT_URL}/about</loc>
			</url>
			<url>
				<loc>${DEPLOYMENT_URL}/sitemap.xml</loc>
			</url>
		</urlset>
	</xml>`;
}

function InProgress() {
	return `
	<url>
				<loc>${DEPLOYMENT_URL}/robots.txt</loc>
			</url>
			<url>
				<loc>${DEPLOYMENT_URL}/500</loc>
			</url>
			<url>
				<loc>${DEPLOYMENT_URL}/api-practice</loc>
			</url>
			<url>
				<loc>${DEPLOYMENT_URL}/404</loc>
			</url>
			<url>
				<loc>${DEPLOYMENT_URL}/clsx-practice</loc>
			</url>
	  `
			// <!-- Dynamically set the URLs of posts -->
			// 
			// ${
				// records.map(({ id }) => {
		// return `
					// <url>
						// <loc>${DEPLOYMENT_URL}/posts/${id}</loc>
					// </url>
				// `;
	// })
			// .join('')
		// }
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
	// Get all post ids
	// const recordsIds = getSortedRecordsData();

	// Generate the XML sitemap with the posts data
	// const sitemap = generateSiteMap(recordsIds);
	const sitemap = generateSiteMap();

	res.setHeader('Content-Type', 'text/xml');
	// Send the XML to the browser
	res.write(sitemap);
	res.end();

	return {
		props: {},
	};
}

export default function SiteMap() {
	// getServerSideProps will do the heavy lifting
}