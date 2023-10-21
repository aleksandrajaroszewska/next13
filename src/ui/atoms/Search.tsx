"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

export const Search = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [query, setQuery] = useState(searchParams.get("query") || "");
	const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

	useEffect(() => {
		return () => {
			if (timer) {
				clearTimeout(timer);
			}
		};
	}, [timer]);

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;

		if (timer) clearTimeout(timer);

		setQuery(value);
		setTimer(
			setTimeout(() => {
				router.push(`/search?query=${value}`);
			}, 500),
		);
	};

	return (
		<input
			className="mb-4 rounded-md border border-gray-300 px-4 py-2"
			value={query}
			onChange={onChange}
			type="search"
			placeholder="Search products"
			data-role="searchbox"
		/>
	);
};
