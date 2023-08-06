import useSWR from 'swr';

const url = "/api/simple-note";

export function GetData() {
	const handler = (url: string) =>
		fetch(url).then((res) => res.json());
	const { data, error, isLoading, mutate } = useSWR(url, handler);
	return { data, error, isLoading, mutate };
}

export function PostData(text: object) {
	const data = fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json; charset=UTF-8',
		},
		body: JSON.stringify(text)
	}).then((res) => res.json());
	return data;
}

export function UpdateData(note: object) {
	const data = fetch(url, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json; charset=UTF-8',
		},
		body: JSON.stringify(note)
	}).then((res) => res.json());
	return data;
}

// export function DeleteData(id: object) {
// 	const data = fetch(url, {
// 		method: 'DELETE',
// 		headers: {
// 			'Content-Type': 'application/json; charset=UTF-8',
// 		},
// 		body: JSON.stringify(id)
// 	}).then((res) => res.json());
// 	return data;
// }