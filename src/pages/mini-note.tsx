import { JSX, useState } from 'react'
import useSWR from 'swr';

import SEO from '@/lib/seo'
import Text from '@/components/text'
import Button from '@/components/button'
import TextSection from '@/layouts/text-section';
import GridSection, { Grid } from '@/layouts/grid-section'
import styles from '../design-tokens/utilities.module.scss'

const url = "/api/note";

// function handler(text: object) {
// 	const createData = (url: string, text: object) =>
// 	fetch(url, {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json; charset=UTF-8',
// 		},
// 		body: JSON.stringify(text)
// 	}).then((res) => res.json());
// 	const { data, error } = useSWR(createData(url, text));
// 	if (error) {
// 		return ('Failed to read notes')
// 	}
// 	return data;
// }

// function CreateNote({ data, mutate }: { data: any, mutate: any }) {
// 	let [text, setText] = useState('');

// 	return (
// 		<div className={`${styles.bgcw} ${styles.p12}`}>
// 			<Text>新增筆記</Text>
// 			<div className={`${styles.jcsb}`}>
// 				<form>
// 					<input type="text" value={text} autoFocus
// 						onChange={(e) => setText(e.target.value)}
// 						className={styles.inputText} />
// 				</form>
// 				<Button onClick={async () => {
// 					try {
// 						const newNote = await handler({text});
// 						// await handler({text});
// 						mutate([...data, newNote]
// 						// 	,{
// 						// 	optimisticData: [...data, newNote],
// 						// 	populateCache: true,
// 						// 	revalidate: true,
// 						// 	rollbackOnError: true,
// 						// 	throwOnError: true
// 						// }
// 						);
// 					} catch (error) {
// 						console.error(error)
// 					}
// 				}}>新增</Button>
// 			</div>
// 		</div>
// 	)
// }

function ReadNotes(
	{ data, error, isLoading }:
		{ data: any, error: any, isLoading: boolean }) {
	if (error) {
		return (<Text>Failed to read notes</Text>)
	}
	if (isLoading) {
		return (<Text>Loading...</Text>)
	}

	let notes: JSX.Element[] = [];
	data.map((item: { id: number, text: string; }) => {
		const note =
			<div key={item.id}
				className={`${styles.bgcw} ${styles.p12}`}>
				<Text>{item.id}　{item.text}</Text>
				<div className={`${styles.jcsb}`}>
					{/* <Button onClick="">刪除</Button>
					<Button onClick="">編輯</Button> */}
				</div>
			</div>;
		notes.push(note);
	});
	return notes;
}

export default function MiniNote() {
	const readData = (url: string) =>
		fetch(url).then((res) => res.json());
	const { data, error, isLoading, mutate } = useSWR(url, readData);

	return (
		<>
			<SEO title="陳子涵 | 簡單筆記"
				description="新增、讀取、更新、刪除，你可在此編輯任何筆記"
				url="/mini-note"
				image="/images/in-progress.png" />

			<main>
				<GridSection>
					<div className={styles.jcsb}>
						<Text type="h1">簡單筆記</Text>
						<Text>新增、讀取、更新、刪除，<br />
							你可在此編輯任何筆記</Text>
						<Button href="#info">說明</Button>
					</div>

					<Grid marginTop>
						{/* <CreateNote data={data} mutate={mutate} /> */}
						<ReadNotes data={data} error={error} isLoading={isLoading} />
					</Grid>
				</GridSection>

				<GridSection id="info">
					<Text type="h2">說明</Text>
					<Text>這個簡單筆記是串接 RESTful API 的練習。</Text>
					<Grid>
						<Text>前端：Next.js page<br />
							Create 開發中，Read 已完成，<br />
							Update 開發中，Delete 開發中
						</Text>
						<Text>後端：Next.js{' '}
							<Text type="link" href="/api/note" newtab>API Route</Text><br />
							GET 已完成，POST 開發中，<br />
							PATCH 開發中，DELETE 開發中
						</Text>
						<Text>資料：？
						</Text>
					</Grid>
				</GridSection>
			</main>
		</>
	)
}