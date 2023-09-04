import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const endpoint = 'https://tzuhanchen-website.hasura.app/v1/graphql';
const headers = {
	'Content-Type': 'application/json; charset=UTF-8',
	'x-hasura-admin-secret': 'g9hbGctVU0h9PAsNkwduoWTbaMn4ztJVvb8zPhqxkN5CILiw9yuUuDRoaJuNJZQa'
};
const recordsDirectory = path.join(process.cwd(), 'src/records');

export async function getRecordsCards() {
	const res = await fetch(endpoint, {
		method: 'POST',
		headers: headers,
		body: JSON.stringify({
			'query': `query recordsCards {
				records_basic(order_by: {order: desc}, where: {public: {_eq: true}}) {
					id
					image
					name
					type
					intro
					highlight
					records_links {
						outsideText
						outsideLink
						newTab
					}
				}
			}`
		})
	});
	const data = await res.json();
	return data.data.records_basic;
}

export async function getRecordsIds() {
	const res = await fetch(endpoint, {
		method: 'POST',
		headers: headers,
		body: JSON.stringify({
			'query': `query recordsIds {
				records_basic(order_by: {order: desc}) {
					id
				}
			}`
		})
	});
	const data = await res.json();
	return data.data.records_basic.map(
		(item: { id: string }) => {
			return {
				params: {
					id: item.id
				}
			}
		}
	);
}

export async function getRecordBasic(id: string) {
	const res = await fetch(endpoint, {
		method: 'POST',
		headers: headers,
		body: JSON.stringify({
			'query': `query recordBasic($id: String!) {
				records_basic(where: {id: {_eq: $id}}) {
					id
					image
					name
					type
					intro
					highlight
				}
			}`,
			'variables': { 'id': id }
		})
	})
	const data = await res.json();
	return data.data.records_basic[0];
}

export async function getRecordDetail(id: string) {
	const res = await fetch(endpoint, {
		method: 'POST',
		headers: headers,
		body: JSON.stringify({
			'query': `query recordDetail($id: String!) {
				records_detail_by_pk(id: $id) {
					start
					end
					position
					member
					output
					skill
				}
			}`,
			'variables': { 'id': id }
		})
	})
	const data = await res.json();
	return data.data.records_detail_by_pk;
}

export async function getRecordContent(id: string) {
	const fullPath = path.join(recordsDirectory, `${id}.md`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');

	// Use gray-matter to parse the post metadata section
	const matterResult = matter(fileContents);

	// Use remark to convert markdown into HTML string
	const processedContent = await remark()
    	.use(html)
    	.process(matterResult.content);
	const contentHtml = processedContent.toString();
	return contentHtml;
}