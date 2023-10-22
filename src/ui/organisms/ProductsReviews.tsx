import { ProductListItemFragment } from "@/gql/graphql";
import { ProductItemReviewForm } from "../molecules/ProductItemReviewForm";
import { ProductItemReviewList } from "../molecules/ProductItemReviewList";

export const ProductItemReview = async (props: {
	product: ProductListItemFragment;
}) => {
	const { product } = props;

	return (
		<div className="container mx-auto py-4">
			<div className="flex flex-wrap gap-4">
				<div className="flex-1">
					<ProductItemReviewForm product={product} />
				</div>
				<div className="flex-1">
					<ProductItemReviewList product={product} />
				</div>
			</div>
		</div>
	);
};
