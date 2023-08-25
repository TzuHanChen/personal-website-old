import { NextApiRequest, NextApiResponse } from "next";

let data = [
	{
		id: 1,
		text: 'hi'
	},
	{
		id: 2,
		text: 'hello'
	},
	{
		id: 3,
		text: 'welcome'
	},
	{
		id: 4,
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sit repellendus vitae possimus odio quasi. Culpa in ipsa voluptas rerum laudantium! Dicta vel esse possimus natus adipisci necessitatibus illo expedita!'
	}
];

const endpoints = {
	'readNotes': 'https://tzuhanchen-website.hasura.app/api/rest/readnotes',
	'createNote': 'https://tzuhanchen-website.hasura.app/api/rest/createnote',
	'updateNote': '',
	'deleteNote': ''
};
const headers = {
	'Content-Type': 'application/json; charset=UTF-8',
	'x-hasura-admin-secret': 'g9hbGctVU0h9PAsNkwduoWTbaMn4ztJVvb8zPhqxkN5CILiw9yuUuDRoaJuNJZQa'
};

export default function simpleNote(
	req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'GET') {
		res.status(200).json(data);
	}

	if (req.method === 'POST') {
		let id = 0;
		const text = req.body.text;
		if (data.length == 0) {
			id++;
			data = [{ id, text }];
		} else {
			id = data[data.length - 1].id + 1;
			data = [...data, { id, text }];
		}
		res.status(200).json(data);
	}

	if (req.method === 'PATCH') {
		const id = req.body.id;
		const text = req.body.text;
		for (const item of data) {
			if (item.id == id) {
				item.text = text;
				break;
			}
		}
		res.status(200).json(data);
	}

	if (req.method === 'DELETE') {
		const id = req.body.id;
		for (let i = 0; i < data.length; i++) {
			if (data[i].id == id) {
				data.splice(i, 1);
				break;
			}
		}
		res.status(200).json(data);
	}
}