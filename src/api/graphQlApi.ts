import { TypedDocumentString } from "@/gql/graphql";

export const executeGraphql = async <TQuery, TVariables>(
	query: TypedDocumentString<TQuery, TVariables>,
	variables: TVariables,
): Promise<TQuery> => {
	if (!process.env.GRAPHQL_URL) {
		throw new Error("GRAPHQL_URL is not defined");
	}
	const res = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ query, variables }),
	});

	type GraphqlResponse<T> =
		| { data: T; errors: undefined }
		| { data: undefined; errors: { message: string }[] };

	const graphqlResponse =
		(await res.json()) as GraphqlResponse<TQuery>;

	if (graphqlResponse.errors) {
		throw new Error("GraphQL Error", {
			cause: graphqlResponse.errors,
		});
	}
	return graphqlResponse.data;
};
