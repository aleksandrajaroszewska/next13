import { ProductListItemFragment } from "@/gql/graphql";
import { Heading } from "../atoms/Heading";

export const ProductItemReviewList = (props: {
	product: ProductListItemFragment;
}) => {
	const { product } = props;
	const { reviews } = product;

	return (
		<div>
			<Heading title="Reviews" tag="h2" />
			<div className="flex flex-col gap-4">
				{reviews.map((review) => (
					<div key={review.id} className="flex flex-col gap-2">
						<p>{review.headline}</p>
						<p>{review.content}</p>
						<p>{review.email}</p>
						<p>{review.name}</p>
						<p>{review.rating}</p>
					</div>
				))}
			</div>
		</div>
	);
};
