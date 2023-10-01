import { getProductList } from "@/api/products";
import { Product } from "@/api/types";
import { ProductListItem } from "@/components/molecules/ProductListItem";

export default async function ProductsList({
	products,
}: {
	products: Product[];
}) {
	// const list = await getProductList();

	// const res = await fetch(
	// 	`https://naszsklep-api.vercel.app/api/products?offset=${offset}&take=${take}`,
	// );

	// const products = (await res.json()) as any[];
	// console.log(products[0].id);

	return (
		<ul
			data-testid="products-list"
			className={"flex flex-wrap justify-center"}
		>
			{products.map((product: Product) => (
				<ProductListItem
					data-testid="products-list"
					key={product.id}
					product={product}
				/>
			))}
		</ul>
	);
}
