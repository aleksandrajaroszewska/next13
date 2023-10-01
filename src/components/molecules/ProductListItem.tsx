import { Product } from "@/api/types";
import { ProductCoverImage } from "../atoms/ProductCoverImage";
import { ProductListItemDescription } from "../atoms/ProductListItemDescription";

export const ProductListItem = ({
	product,
}: {
	product: Product;
}) => {
	return (
		<li key={product.id} className="m-4 list-none">
			<article className="group mb-6 w-56 cursor-pointer shadow transition duration-300 ease-in-out hover:shadow-lg md:mb-0 lg:mb-0 xl:mb-0">
				<ProductCoverImage
					alt={product.name}
					src={product.images[0]?.url || "/images/placeholder.png"}
					productId={product.id}
				/>
				<ProductListItemDescription product={product} />
			</article>
		</li>
	);
};
