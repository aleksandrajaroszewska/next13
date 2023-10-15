import {
	getProductList,
	getProductsByCategorySlug,
} from "@/api/products";
import ProductList from "@/ui/organisms/ProductList";

import { notFound, usePathname } from "next/navigation";
import { Pagination } from "@/ui/molecules/Pagination";
import { Metadata } from "next";
import { ProductListItemFragment } from "@/gql/graphql";

export const metadata: Metadata = {
	title: "search",
};

export default async function SearchPage({
	searchParams,
}: {
	searchParams?: { [key: string]: string | string[] | undefined };
}) {
	const products = await getProductList();
	const query = searchParams?.query as string;
	// const filteredProducts = products.filter((product) =>
	// 	product.name.toLowerCase().includes(query.toLowerCase()),
	// );
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
	console.log(filteredProducts);

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

// type SearchProps = {
// 	products: ProductListItemFragment[];
// };

// export default function Search({ products }: SearchProps) {
// 	const [query, setQuery] = useState("");

// 	const handleQueryChange = (
// 		event: React.ChangeEvent<HTMLInputElement>,
// 	) => {
// 		setQuery(event.target.value);
// 	};

// 	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
// 		event.preventDefault();
// 		const url = `/search?query=${encodeURIComponent(query)}`;
// 		window.location.href = url;
// 	};

// 	return (
// 		<div role="searchbox">
// 			<form onSubmit={handleSubmit}>
// 				<input
// 					type="text"
// 					placeholder="Search products"
// 					value={query}
// 					onChange={handleQueryChange}
// 					className="mb-4 rounded-md border border-gray-300 px-4 py-2"
// 				/>
// 				<button type="submit" className="hidden">
// 					Search
// 					<SearchIcon color="white" size={20} />
// 				</button>
// 			</form>
// 			{query.length > 0 && (
// 				<ul className="absolute right-0 top-full z-10  rounded-md border bg-white p-2 shadow-md">
// 					{filteredProducts.map((product) => (
// 						<li key={product.id}>
// 							<Link
// 								href={`/search?query=${encodeURIComponent(query)}`}
// 							>
// 								{product.name}
// 							</Link>
// 						</li>
// 					))}
// 				</ul>
// 			)}
// 		</div>
// 	);
// }
