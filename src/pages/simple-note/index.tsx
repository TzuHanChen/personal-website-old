import { useState } from 'react'

import SEO from '@/lib/seo'
import Text from '@/components/text'
import Button from '@/components/button'
import GridSection, { Grid } from '@/layouts/grid-section'
import styles from '@/design-tokens/utilities.module.scss'

import { GetData, PostData } from '../../lib/simple-note-data'

function CreateNote({ mutate }: { mutate: any }) {
	let [text, setText] = useState('');

	function handleClick() {
		try {
			mutate(PostData({ text }));
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div className={`${styles.bgcw} ${styles.p12}`}>
			<Text>新增筆記</Text>
			<div className={`${styles.jcsb}`}>
				<input type="text" value={text} autoFocus
					onChange={(e) => setText(e.target.value)}
					className={styles.inputText} />
				<Button onClick={handleClick}>新增</Button>
			</div>
		</div>
	)
}

function Notes({ data, error, isLoading }:
	{ data: any, error: any, isLoading: boolean }) {
	if (error) {
		return (<Text>Failed to read notes</Text>)
	}
	if (isLoading) {
		return (<Text>Loading...</Text>)
	}

	return data.map((item: { id: number, text: string; }) => {
		return (
			<div key={item.id}
				className={`${styles.bgcw} ${styles.p12}`}>
				<Text>{item.id}　{item.text}</Text>
				<div className={`${styles.jcsb}`}>
					{/* <Button onClick="">刪除</Button> */}
					{/* <Button onClick="">編輯</Button> */}
				</div>
			</div>
		)
	});
}

export default function MiniNote() {
	const { data, error, isLoading, mutate } = GetData();

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
						<Button href="#info">說明</Button>
						<CreateNote mutate={mutate} />
					</div>
					
					<Grid marginTop>
						<Notes data={data} error={error} isLoading={isLoading} />
					</Grid>
				</GridSection>

				<GridSection id="info">
					<Text type="h2">說明</Text>
					<div className={styles.jcsb}>
						<Text>新增、讀取、更新、刪除，你可在此編輯任何筆記。</Text>
						<Text>這個簡單筆記是串接 RESTful API 的練習。</Text>
					</div>
					<div className={styles.jcsb}>
						<Text>前端：Next.js page<br />
							Create 已完成，Read 已完成，<br />
							Update 開發中，Delete 開發中
						</Text>
						<Text>後端：Next.js{' '}
							<Text type="link" href="/api/note" newtab>API Route</Text><br />
							GET 已完成，POST 已完成，<br />
							PATCH 開發中，DELETE 開發中
						</Text>
						<Text>資料：並沒有串接到真的資料庫，<br />
							目前後端只是收到新資料、<br />
							編輯舊資料之後回傳前端
						</Text>
					</div>
				</GridSection>
			</main>
		</>
	)
}