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

export default function note(
	req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'GET') {
		res.status(200).json(data);
	}

	if (req.method === 'POST') {
		const id = data[data.length - 1].id + 1;
		const text = req.body.text;
		data = [...data, { id, text }];
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

	// if (req.method === 'DELETE') {
	// 	res.status(200).json(req.body);
	// } else {
	// 	res.status(200).json(req.body);
	// }
}