import { ActiveLink } from "../atoms/ActiveLink";
import clsx from "clsx";

export const Pagination = ({
	currentPage,
	totalPages,
	target = "products",
}: {
	currentPage: number;
	totalPages: number;
	target: string;
}) => {
	const className = "flex border-2 rounded-md p-2 hover:bg-white-500";
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
					// <ActiveLink
					// 	key={page}
					// 	href={`/products`}
					// 	className={clsx(className, isActive && activeClassName)}
					// >
					// 	{page}
					// </ActiveLink>
					<ActiveLink
						href={`/products/${page}`}
						className="block h-8 w-8 rounded border border-gray-100 text-center leading-8 text-gray-900"
						activeClassName="border-blue-600 bg-blue-600 text-white"
					>
						{page}
					</ActiveLink>
				);
			})}
		</div>
	);
};
