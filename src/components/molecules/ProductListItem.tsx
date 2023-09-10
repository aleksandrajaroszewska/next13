import { ProductCoverImage } from "../atoms/ProductCoverImage";
import { ProductListItemDescription } from "../atoms/ProductListItemDescription";

type ProductListItemProps = {
	product: {
		title: string;
		price: number;
		salePrice: number;
		category: string;
	};
};

export const ProductListItem = ({
	product,
}: ProductListItemProps) => {
	return (
		<li className="w-96 p-4">
			<article className="group mb-6 cursor-pointer shadow transition duration-300 ease-in-out hover:shadow-lg md:mb-0 lg:mb-0 xl:mb-0">
				<ProductCoverImage
					alt=""
					src="https://klbtheme.com/shopwise/fashion/wp-content/uploads/2020/04/product_img10-1.jpg"
				/>
				<ProductListItemDescription product={product} />
			</article>
		</li>
	);
};
