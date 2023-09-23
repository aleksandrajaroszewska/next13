"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ActiveLink } from "../atoms/ActiveLink";
import { Route } from "next";
import clsx from "clsx";

export const Pagination = ({
	currentPage,
	totalPages,
}: {
	currentPage: number;
	totalPages: number;
}) => {
	const className =
		"flex border-2  rounded-md p-2 hover:bg-white-500";
	const activeClassName = "font-bold border-5 bg-white-500";

	const pagesToMap = Array.from(
		{ length: totalPages },
		(_, i) => i + 1,
	);

	return (
		<div className="flex justify-center space-x-2">
			{pagesToMap.map((page) => {
				const isActive = currentPage === page;
				return (
					<ActiveLink
						key={page}
						href={`/products/${page}`}
						className={clsx(className, isActive && activeClassName)}
					>
						{page}
					</ActiveLink>
				);
			})}
		</div>
	);
};
