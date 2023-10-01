import { getProductList } from "@/api/products";
import { ProductListItem } from "@/ui/molecules/ProductListItem";
import { ProductListItemFragment } from "@/gql/graphql";

export default async function ProductsList({
	products,
}: {
	products: ProductListItemFragment[];
}) {
	return (
		<ul
			data-testid="products-list"
			className={"flex flex-wrap justify-center"}
		>
			{products.map((product: ProductListItemFragment) => (
				<ProductListItem
					data-testid="products-list"
					key={product.id}
					product={product}
				/>
			))}
		</ul>
	);
}
