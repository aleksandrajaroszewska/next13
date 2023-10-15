"use client";
import { ProductListItemFragment } from "@/gql/graphql";
import { Search as SearchIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type SearchProps = {
	products: ProductListItemFragment[];
};

export default function Search({ products }: SearchProps) {
	const [query, setQuery] = useState("");

	const handleQueryChange = (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		setQuery(event.target.value);
	};

	// const filteredProducts = products.filter((product) =>
	// 	product.name.toLowerCase().includes(query.toLowerCase()),
	// );

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const url = `/search?query=${encodeURIComponent(query)}`;
		window.location.href = url;
	};

	return (
		<div role="searchbox">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Search products"
					value={query}
					onChange={handleQueryChange}
					className="mb-4 rounded-md border border-gray-300 px-4 py-2"
				/>
				<button type="submit" className="hidden">
					Search
					<SearchIcon color="black" size={30} />
				</button>
			</form>
			{/* {query.length > 0 && (
				<ul className="absolute right-0 top-full z-10  rounded-md border bg-white p-2 shadow-md">
					{filteredProducts.map((product) => (
						<li key={product.id}>
							<Link
								href={`/search?query=${encodeURIComponent(query)}`}
							>
								{product.name}
							</Link>
						</li>
					))}
				</ul>
			)} */}
		</div>
	);
}
