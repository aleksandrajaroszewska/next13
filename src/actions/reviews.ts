"use server";

import { executeGraphql } from "@/api/graphQlApi";
import {
	ReviewCreateDocument,
	ReviewPublishDocument,
	type ReviewItemFragment,
	ReviewUpdateAverageRatingDocument,
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

export const updateAverageRating = async (
	productId: string,
	reviews: ReviewItemFragment[],
) => {
	const averageRating = parseInt(
		(
			reviews.reduce((acc, review) => acc + review.rating, 0) /
			reviews.length
		).toFixed(0),
	);

	await executeGraphql({
		query: ReviewUpdateAverageRatingDocument,
		variables: {
			id: productId,
			averageRating: averageRating,
		},
	});
};
