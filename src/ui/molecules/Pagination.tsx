"use client";

import { Route } from "next";
import { ActiveLink } from "../atoms/ActiveLink";
import clsx from "clsx";

export const Pagination = ({
	currentPage,
	totalPages,
	pageType,
}: {
	currentPage: number;
	totalPages: number;
	pageType: `categories/${string}` | "products";
}) => {
	const pagesToMap = Array.from(
		{ length: totalPages },
		(_, i) => i + 1,
	);

	return (
		<div
			aria-label="pagination"
			className="flex justify-center space-x-2"
		>
			{pagesToMap.map((page, key) => (
				<ActiveLink
					key={key}
					href={`/${pageType}/${page}`}
					className="block h-8 w-8 rounded border border-gray-100 text-center leading-8 text-gray-900"
					activeClassName="border-blue-600 bg-blue-600 text-white"
				>
					{page}
				</ActiveLink>
			))}
		</div>
	);
};
