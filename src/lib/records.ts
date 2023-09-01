const endpoint = 'https://tzuhanchen-website.hasura.app/v1/graphql';
const headers = {
	'Content-Type': 'application/json; charset=UTF-8',
	'x-hasura-admin-secret': 'g9hbGctVU0h9PAsNkwduoWTbaMn4ztJVvb8zPhqxkN5CILiw9yuUuDRoaJuNJZQa'
};

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