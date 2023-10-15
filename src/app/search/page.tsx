import { getProductList } from "@/api/products";
import ProductList from "@/ui/organisms/ProductList";

import { Metadata } from "next";
import { ProductListItemFragment } from "@/gql/graphql";

export const metadata: Metadata = {
	title: "search",
};

export default async function SearchPage({
	searchParams,
}: {
	searchParams: {
		query: string;
	};
}) {
	const products = await getProductList();
	const query = searchParams?.query as string;

	function filterProducts(
		products: ProductListItemFragment[],
		query: string,
	): ProductListItemFragment[] {
		const normalizedQuery = query.toLowerCase().trim();
		if (!normalizedQuery) {
			return products;
		}
		return products.filter((product) =>
			product.name.toLowerCase().includes(normalizedQuery),
		);
	}

	const filteredProducts = filterProducts(products, query);

	return (
		<>
			{filteredProducts.length > 0 ? (
				<div>
					<h1>Search results</h1>
					<ProductList products={filteredProducts} />
				</div>
			) : (
				<div>
					<h1>No results found</h1>
				</div>
			)}
		</>
	);
}
