"use client";
import { ProductListItemFragment } from "@/gql/graphql";
import { Search as SearchIcon } from "lucide-react";
import Link from "next/link";
import debounce from "lodash.debounce";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

type SearchProps = {
	products: ProductListItemFragment[];
};

export default function Search({ products }: SearchProps) {
	const [query, setQuery] = useState("");

	const router = useRouter();

	const handleQueryChange = (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		setQuery(event.target.value);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		router.push(`/search?query=${encodeURIComponent(query)}`);
	};

	return (
		<form className="relative flex" onSubmit={handleSubmit}>
			<input
				type="search"
				placeholder="Search products"
				value={query}
				onChange={handleQueryChange}
				className="mb-4 rounded-md border border-gray-300 px-4 py-2"
			/>
			<Link
				className="absolute bottom-0 right-0 top-0 flex w-6 items-center justify-center rounded-r-md "
				href={`/search?query=${encodeURIComponent(query)}`}
			>
				<SearchIcon color="black" size={20} />
			</Link>

			<button type="submit" className="hidden">
				Search
			</button>
		</form>
	);
}
