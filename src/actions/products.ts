"use server";

import { executeGraphql } from "@/api/graphQlApi";
import { ProductPublishDocument } from "@/gql/graphql";

export const publishProduct = async (productId: string) => {
	return executeGraphql({
		query: ProductPublishDocument,
		variables: {
			id: productId,
		},
	});
};
