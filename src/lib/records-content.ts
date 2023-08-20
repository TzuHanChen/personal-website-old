import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const url = 'api/records';
const recordsDirectory = path.join(process.cwd(), 'src/records/');

export async function getAllRecordsBasic() {
	const res = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json; charset=UTF-8',
		},
		body: 'getAllRecordsBasic'
	});
	const data = await res.json();
	return data;
}

// export function getAllRecordsPath() {
// 	// Returns an array that looks like this:
// 	// [
// 	//   {
// 	//     params: {
// 	//       id: 'ssg-ssr'
// 	//     }
// 	//   },
// 	//   {
// 	//     params: {
// 	//       id: 'pre-rendering'
// 	//     }
// 	//   }
// 	// ]

// 	const data = fetch(url, {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json; charset=UTF-8',
// 		},
// 		body: 'getAllRecordsPath'
// 	}).then((res) => res.json());

// 	return data.map((internalPage) => {
// 		return {
// 			params: {
// 				id: path.replace(/\.md$/, '')
// 			},
// 		};
// 	});
// }

export async function getRecordContent(name: string) {
	const fullPath = path.join(recordsDirectory, `${name}.md`);
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