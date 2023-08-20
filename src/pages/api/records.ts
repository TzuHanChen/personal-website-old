import { NextApiRequest, NextApiResponse } from "next";

export default async function records(
	req: NextApiRequest, res: NextApiResponse) {
	const endpoint = "https://tzuhanchen-website.hasura.app/v1/graphql";
	const headers = {
		"content-type": "application/json",
		"x-hasura-admin-secret": "g9hbGctVU0h9PAsNkwduoWTbaMn4ztJVvb8zPhqxkN5CILiw9yuUuDRoaJuNJZQa"
	};

	let graphqlQuery = {};
	if (req.body.query == 'getAllRecordsBasic') {
		graphqlQuery = {
			"query": `query getAllRecordsBasic {
				records_basic {
					id
					image
					name
					shortIntro
					highlight
					type
					internalPage
				}
			}`,
			"variables": {}
		}
	} else if (req.body.query == 'getAllRecordsPath') {
		graphqlQuery = {
			"query": `query getAllRecordsBasic {
				records_basic {
					internalPage
				}
			}`,
			"variables": {}
		}
	}

	const options = {
		method: 'POST',
		headers: headers,
		body: JSON.stringify(graphqlQuery)
	};

	const response = await fetch(endpoint, options);
	const data = await response.json();
	res.status(200).json(data);
}