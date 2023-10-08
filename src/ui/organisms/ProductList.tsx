import { getProductList } from "@/api/products";
import { ProductListItem } from "@/ui/molecules/ProductListItem";
import { ProductListItemFragment } from "@/gql/graphql";

export default async function ProductsList({
	products,
}: {
	products: ProductListItemFragment[];
}) {
	return (
		<ul className={"flex w-full flex-wrap  justify-center"}>
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
