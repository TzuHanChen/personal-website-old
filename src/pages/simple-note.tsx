import { useState } from 'react'

import SEO from '@/lib/seo'
import Text from '@/components/text'
import Button from '@/components/button'
import GridSection, { Grid } from '@/layouts/grid-section'
import styles from '@/design-tokens/utilities.module.scss'

import { GetData, PostData, UpdateData, DeleteData } from '@/lib/simple-note-data'

function CreateNote({ mutate }: { mutate: any }) {
	let [text, setText] = useState('');

	function handleCreate() {
		try {
			mutate(PostData({ text }));
			setText('')
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div className={`${styles.bgcw} ${styles.p12}`}>
			<Text>新增筆記</Text>
			<div className={styles.jcsb}>
				<input type="text" value={text} autoFocus
					onChange={(e) => setText(e.target.value)}
					className={`${styles.inputText} ${styles.mr12}`} />
				<Button onClick={handleCreate}>新增</Button>
			</div>
		</div>
	)
}

function UpdateNote({ id, mutate, setControl }:
	{ id: number, mutate: any, setControl: any }) {
	let [text, setText] = useState('');

	function handleUpdate() {
		try {
			mutate(UpdateData({ id, text }));
			setControl('options')
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<>
			<Text>編輯筆記</Text>
			<div className={styles.jcsb}>
				<input type="text" value={text} autoFocus
					onChange={(e) => setText(e.target.value)}
					className={styles.inputText} />
				<Button onClick={handleUpdate}>確定</Button>
			</div>
			<Button onClick={() => setControl('options')}>取消</Button>
		</>
	)
}

function DeleteNote({ id, mutate, setControl }:
	{ id: number, mutate: any, setControl: any }) {

	function handleDelete() {
		try {
			mutate(DeleteData({ id }));
			setControl('options')
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<>
			<Text>刪除筆記</Text>
			<div className={styles.jcsb}>
				<Text>要刪除這個筆記嗎？</Text>
				<Button onClick={handleDelete}>確定</Button>
			</div>
			<Button onClick={() => setControl('options')}>取消</Button>
		</>
	)
}

function ControlArea({ id, mutate }:
	{ id: number, mutate: any }) {
	let [control, setControl] = useState('options');
	let controlArea = <></>;

	if (control == 'options') {
		controlArea =
			<div className={styles.jcsb}>
				<Button onClick={() => setControl('delete')}>刪除</Button>
				<Button onClick={() => setControl('update')}>編輯</Button>
			</div>;
	}
	if (control == 'update') {
		controlArea = <UpdateNote id={id} mutate={mutate} setControl={setControl} />;
	}
	if (control == 'delete') {
		controlArea = <DeleteNote id={id} mutate={mutate} setControl={setControl} />;
	}

	return controlArea;
}

function Notes({ data, error, isLoading, mutate }:
	{ data: any, error: any, isLoading: boolean, mutate: any }) {
	if (error) {
		return (<Text>讀取筆記失敗，請稍候再試</Text>)
	}
	if (isLoading) {
		return (<Text>載入中，請稍候...</Text>)
	}

	if (data.length > 0) {
		return data.map((item: { id: number, text: string; }) => {
			return (
				<div key={item.id}
					className={`${styles.bgcw} ${styles.p12}`}>
					<Text>{item.id}　{item.text}</Text>
					<ControlArea id={item.id} mutate={mutate} />
				</div>
			)
		});
	} else {
		return <Text>目前沒有任何筆記</Text>
	}
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
						<Notes data={data} error={error} isLoading={isLoading} mutate={mutate} />
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
							Update 已完成，Delete 已完成
						</Text>
						<Text>後端：Next.js{' '}
							<Text type="link" href="/api/note" newtab>API Route</Text><br />
							GET 已完成，POST 已完成，<br />
							PATCH 已完成，DELETE 已完成
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