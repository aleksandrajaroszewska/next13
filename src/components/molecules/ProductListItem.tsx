import { Product } from "@/app/list/page";
import { ProductCoverImage } from "../atoms/ProductCoverImage";
import { ProductListItemDescription } from "../atoms/ProductListItemDescription";
import Link from "next/link";

export const ProductListItem = ({
	product,
}: {
	product: Product;
}) => {
	return (
		<li key={product.id} className="m-4">
			<article className="group mb-6 w-56 cursor-pointer shadow transition duration-300 ease-in-out hover:shadow-lg md:mb-0 lg:mb-0 xl:mb-0">
				<ProductCoverImage
					alt={product.title}
					src={product.image}
					productId={product.id}
				/>
				<ProductListItemDescription product={product} />
			</article>
		</li>
	);
};
