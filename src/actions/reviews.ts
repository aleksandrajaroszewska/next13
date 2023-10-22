"use server";

import { executeGraphql } from "@/api/graphQlApi";
import {
	ReviewCreateDocument,
	ReviewPublishDocument,
	type ReviewItemFragment,
} from "@/gql/graphql";

export const createReview = async (review: ReviewItemFragment) => {
	return executeGraphql({
		query: ReviewCreateDocument,
		variables: {
			...review,
		},
	});
};

export const publishReview = async (reviewID: string) => {
	await executeGraphql({
		query: ReviewPublishDocument,
		variables: {
			id: reviewID,
		},
	});
};
