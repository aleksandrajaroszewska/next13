import { ProductListItemFragment } from "@/gql/graphql";
import { ProductCoverImage } from "../atoms/ProductCoverImage";
import { ProductListItemDescription } from "../atoms/ProductListItemDescription";
import { Route } from "next";
import Link from "next/link";

type ProductListItemProps = {
	product: ProductListItemFragment;
};

export const ProductListItem = ({
	product,
}: ProductListItemProps) => {
	const productUrl = `/product/${product.id}` as Route<"productId">;
	return (
		<li key={product.id} className="m-4 list-none">
			<Link
				className="group mb-6 block w-56 cursor-pointer bg-white shadow transition duration-300 ease-in-out hover:shadow-lg md:mb-0 lg:mb-0 xl:mb-0"
				href={productUrl}
			>
				<ProductCoverImage
					productUrl={productUrl}
					images={product.images}
				/>
				<ProductListItemDescription product={product} />
			</Link>
		</li>
	);
};
