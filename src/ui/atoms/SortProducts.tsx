"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, type ChangeEvent } from "react";
import { SortOrderData } from "@/mocks/SortOrderData";

type SortProductsProps = {
	defaultOrderBy: string;
};

export const SortProducts = (props: SortProductsProps) => {
	const { defaultOrderBy } = props;
	const router = useRouter();
	const searchParams = useSearchParams();
	const [orderBy, setOrderBy] = useState(
		searchParams.get("product_list_order") || defaultOrderBy,
	);

	const sortByHandler = (event: ChangeEvent<HTMLSelectElement>) => {
		const value = event.target.value;

		setOrderBy(value);
		router.push(`?product_list_order=${value}`);
	};

	return (
		<select
			data-testid="sort-products"
			name="sort"
			value={orderBy}
			onChange={sortByHandler}
			className="w-36 text-gray-950"
		>
			{SortOrderData.map((item, index) => (
				<option
					key={index}
					value={item.value}
					data-testid={item.dataTestId}
				>
					{item.label}
				</option>
			))}
		</select>
	);
};
