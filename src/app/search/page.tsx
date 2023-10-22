import { getProductsList } from "@/api/products";
import ProductList from "@/ui/organisms/ProductList";

import { Metadata } from "next";
import { ProductListItemFragment } from "@/gql/graphql";

export const metadata: Metadata = {
	title: "search",
};

type SearchPageParams = {
	searchParams: {
		query: string;
	};
};

export default async function SearchPage({
	searchParams,
}: SearchPageParams) {
	// const products = await getProductsList({
	// 	query: searchParams?.query,
	// });
	const query = searchParams?.query as string;

	// function filterProducts(
	// 	products: ProductListItemFragment[],
	// 	query: string,
	// ): ProductListItemFragment[] {
	// 	const normalizedQuery = query.toLowerCase().trim();
	// 	if (!normalizedQuery) {
	// 		return products;
	// 	}
	// 	return products.filter((product) =>
	// 		product.name.toLowerCase().includes(normalizedQuery),
	// 	);
	// }

	// const filteredProducts = filterProducts(products, query);

	const response = await getProductsList({ query });
	const { products, productsConnection } = response;
	const totalItems = productsConnection.pageInfo.pageSize || 0;

	return (
		<>
			{products.length > 0 ? (
				<div>
					<h1>Search results</h1>

					<ProductList products={products} />
				</div>
			) : (
				<div>
					<h1>No results found</h1>
				</div>
			)}
		</>
	);
}
