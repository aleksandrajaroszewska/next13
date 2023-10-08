import { TypedDocumentString } from "@/gql/graphql";

export const executeGraphql = async <TQuery, TVariables>(
	query: TypedDocumentString<TQuery, TVariables>,
	variables: TVariables,
	options?: RequestInit,
): Promise<TQuery> => {
	if (!process.env.GRAPHQL_URL) {
		throw new Error("GRAPHQL_URL is not defined");
	}
	const res = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			// Authorization: `Bearer ${process.env.GRAPHQL_TOKEN}`,
		},
		body: JSON.stringify({ query, variables }),
		...options,
	});

	type GraphqlResponse<T> =
		| { data: T; errors: undefined }
		| { data: undefined; errors: { message: string }[] };

	const graphqlResponse =
		(await res.json()) as GraphqlResponse<TQuery>;

	if (graphqlResponse.errors) {
		console.log(graphqlResponse.errors);
		throw new Error("GraphQL Error", {
			cause: graphqlResponse.errors,
		});
	}

	return graphqlResponse.data;
};

// export const executeGraphql = async <TResult, TVariables>({
// 	query,
// 	variables,
// 	next,
// 	cache,
// }: {
// 	query: TypedDocumentString<TResult, TVariables>;
// 	variables: TVariables;
// 	next?: NextFetchRequestConfig;
// 	cache?: RequestCache;
// }): Promise<TResult> => {
// 	if (!process.env.GRAPHQL_URL) {
// 		throw TypeError("GRAPHQL_URL is not defined");
// 	}

// 	const res = await fetch(process.env.GRAPHQL_URL, {
// 		method: "POST",
// 		cache,
// 		next,
// 		headers: {
// 			"Content-Type": "application/json",
// 			Authorization: `Bearer ${process.env.GRAPHQL_TOKEN}`,
// 		},
// 		body: JSON.stringify({ query, variables }),
// 	});

// 	type GraphQLResponse<T> =
// 		| { data: T; errors: undefined }
// 		| { data?: undefined; errors: { message: string }[] };

// 	const graphqlResponse =
// 		(await res.json()) as GraphQLResponse<TResult>;

// 	if (graphqlResponse.errors) {
// 		console.log(graphqlResponse);
// 		throw TypeError(`GraphQL Error`, {
// 			cause: graphqlResponse.errors,
// 		});
// 	}

// 	return graphqlResponse.data;
// };
