const endpoint = 'https://tzuhanchen-website.hasura.app/v1/graphql';
const headers = {
	'Content-Type': 'application/json; charset=UTF-8',
	"x-hasura-admin-secret": "g9hbGctVU0h9PAsNkwduoWTbaMn4ztJVvb8zPhqxkN5CILiw9yuUuDRoaJuNJZQa"
};

const body1 = {
	"query": `query recordsCards {
		records_basic(order_by: {id: desc}, where: {public: {_eq: true}}) {
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
};

export async function getRecordsCards() {
	const res = await fetch(endpoint, {
		method: 'POST',
		headers: headers,
		body: JSON.stringify(body1)
	});
	const data = await res.json();
	return data.data.records_basic;
}