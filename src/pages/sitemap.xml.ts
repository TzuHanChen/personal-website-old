import { GetServerSideProps } from 'next';
import { getRecordsIds } from "../lib/records";

const DEPLOYMENT_URL = 'https://tzuhanchen.vercel.app/';

function generateSiteMap(recordsIds: { params: { id: string } }[]) {
	return `<?xml version="1.0" encoding="UTF-8"?>
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
			<!-- Manually set the URLs I already know -->
			<url>
				<loc>${DEPLOYMENT_URL}</loc>
			</url>
			<url>
				<loc>${DEPLOYMENT_URL}about</loc>
			</url>
			<url>
				<loc>${DEPLOYMENT_URL}simple-note</loc>
			</url>
			
			<!-- Dynamically set the URLs of records -->
			${recordsIds.map((item: { params: { id: string } }) => {
				return `<url>
					<loc>${DEPLOYMENT_URL}records/${item.params.id}</loc>
				</url>`;
			})
			.join('')
			}
		</urlset>
	`;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
	// Get all records ids
	const recordsIds = await getRecordsIds();
	// Generate the XML sitemap
	const sitemap = generateSiteMap(recordsIds);

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