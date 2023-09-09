import { useState } from 'react'
import useSWR from 'swr'

import SEO from '@/components/seo'
import Text from '@/components/text'
import Button from '@/components/button'
import BlockSection, { BlockArea } from '@/layouts/block-section'
import styles from '@/design-tokens/utilities.module.scss'

// data

const url = "/api/simple-note";
const headers = {
	'Content-Type': 'application/json; charset=UTF-8'
};

function GetData(url: string) {
	return fetch(url).then((res) => res.json());
}

function PostData(text: object) {
	const data = fetch(url, {
		method: 'POST',
		headers: headers,
		body: JSON.stringify(text)
	}).then((res) => res.json());
	return data;
}

function UpdateData(note: object) {
	const data = fetch(url, {
		method: 'PATCH',
		headers: headers,
		body: JSON.stringify(note)
	}).then((res) => res.json());
	return data;
}

function DeleteData(id: object) {
	const data = fetch(url, {
		method: 'DELETE',
		headers: headers,
		body: JSON.stringify(id)
	}).then((res) => res.json());
	return data;
}

// layout

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
		<div className={`${styles.bgcw} ${styles.p12} ${styles.bdrd12}`}>
			<Text>新增筆記</Text>
			<input type="text" value={text} autoFocus
				onChange={(e) => setText(e.target.value)}
				className={`${styles.inputText} ${styles.mr12}`} />
			<Button onClick={handleCreate}>新增</Button>
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
			<div className={`${styles.jcsb} ${styles.mb12}`}>
				<input type="text" value={text} autoFocus
					onChange={(e) => setText(e.target.value)}
					className={styles.inputText} />
				<Button onClick={handleUpdate}>確定</Button>
			</div>
			<Button onClick={() => setControl('options')} type='secondary'>取消</Button>
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
			<Button onClick={() => setControl('options')} type='secondary'>取消</Button>
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
				<Button onClick={() => setControl('delete')} type='secondary'>刪除</Button>
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
					className={`${styles.bgcw} ${styles.p12} ${styles.bdrd12}`}>
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
	const { data, error, isLoading, mutate } = useSWR(url, GetData);

	return (
		<>
			<SEO title="陳子涵 | 簡單筆記"
				description="新增、讀取、更新、刪除，你可在此編輯任何筆記"
				url="/mini-note"
				image="/images/simple-note.png" />

			<main>
				<BlockSection>
					<div className={styles.jcsb}>
						<Text type="h1">簡單筆記</Text>
						{/* <Text type="h1">留言板 Bulletin board</Text> */}
						<CreateNote mutate={mutate} />
					</div>

					<BlockArea marginTop column={3}>
						<Notes data={data} error={error} isLoading={isLoading} mutate={mutate} />
					</BlockArea>
				</BlockSection>
			</main>
		</>
	)
}