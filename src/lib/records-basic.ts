export default async function GetAllRecordsBasic() {
	const endpoint = "https://tzuhanchen-website.hasura.app/v1/graphql";
	const headers = {
		"content-type": "application/json",
		"x-hasura-admin-secret": "g9hbGctVU0h9PAsNkwduoWTbaMn4ztJVvb8zPhqxkN5CILiw9yuUuDRoaJuNJZQa"
	};
	const queryAllRecordsBasic =
		`query AllRecordsBasic {
			records_basic {
				id
				image
				name
				shortIntro
				highlight
				type
				internalPage
			}
		}`;

	const res = await fetch(endpoint, {
		method: "POST",
		headers: headers,
		body: JSON.stringify({
			operationName: "queryAllRecordsBasic",
			query: queryAllRecordsBasic,
			variables: {}
		})
	});
	const data = await res.json();
	return data;
}