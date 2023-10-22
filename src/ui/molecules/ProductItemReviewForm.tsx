import { revalidateTag } from "next/cache";
import { SubmitButton } from "./SubmitButton";

import {
	type Stage,
	type ProductListItemFragment,
	type ReviewItemFragment,
} from "@/gql/graphql";

import { publishProduct } from "@/actions/products";
import { ReviewsFormData } from "@/mocks/ReviewsFormData";
import { createReview, publishReview } from "@/actions/reviews";

export const ProductItemReviewForm = async (props: {
	product: ProductListItemFragment;
}) => {
	const { product } = props;

	const addReviewAction = async (formData: FormData) => {
		"use server";

		console.log(formData);

		const reviews = product.reviews;
		const review: ReviewItemFragment = {
			id: product.id,
			name: String(formData.get("name")),
			headline: String(formData.get("headline")),
			email: String(formData.get("email")),
			content: String(formData.get("content")),
			rating: Number(formData.get("rating")),
			stage: "DRAFT" as Stage,
		};

		const allReviews = [...reviews, review];

		const newReview = await createReview(review);

		console.log(newReview, "newReview");

		if (!newReview.createReview) {
			throw new Error("Failed to create review");
		}

		await publishReview(newReview.createReview.id);

		await publishProduct(product.id);
		revalidateTag("product");
	};

	return (
		<form
			className="flex flex-col gap-4"
			data-testid="add-review-form"
			action={addReviewAction}
		>
			{ReviewsFormData.map((input, index) => (
				<div key={index} className="flex flex-col">
					<label
						className="mb-1 text-sm font-medium"
						htmlFor={input.name}
					>
						{input.label}
					</label>
					<input
						id={input.name}
						className="border border-gray-900"
						name={input.name}
						type={input.type}
						min={input.min}
						max={input.max}
					/>
				</div>
			))}
			<SubmitButton data-testid="add-to-review">
				Submit Review
			</SubmitButton>
		</form>
	);
};
