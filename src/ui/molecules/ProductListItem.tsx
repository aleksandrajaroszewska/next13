import { ProductListItemFragment } from "@/gql/graphql";
import { ProductCoverImage } from "../atoms/ProductCoverImage";
import { ProductListItemDescription } from "../atoms/ProductListItemDescription";
import { Route } from "next";

type ProductListItemProps = {
	product: ProductListItemFragment;
};

export const ProductListItem = ({
	product,
}: ProductListItemProps) => {
	const productUrl = `/product/${product.id}` as Route<"productId">;
	return (
		<li key={product.id} className="m-4 list-none">
			<article className="group mb-6 w-56 cursor-pointer bg-white shadow transition duration-300 ease-in-out hover:shadow-lg md:mb-0 lg:mb-0 xl:mb-0">
				<ProductCoverImage
					productUrl={productUrl}
					images={product.images}
				/>
				<ProductListItemDescription product={product} />
			</article>
		</li>
	);
};
