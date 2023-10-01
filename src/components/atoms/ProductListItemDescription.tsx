import { Product } from "@/api/types";
import { formatMoney } from "@/utils";

export const ProductListItemDescription = ({
	product,
}: {
	product: Product;
}) => {
	const { name, price, categories } = product;
	return (
		<div className="bg-white px-4 py-3">
			<h3 className="truncate text-lg font-semibold text-gray-800 transition duration-300 ease-in-out hover:text-red-500">
				{name}
			</h3>
			<p className="mr-2 text-xs text-gray-800">
				{categories[0]?.name}
			</p>
			<div className="flex py-2">
				<p className="mr-2 text-xs text-gray-600">
					{formatMoney(price)}
				</p>
			</div>
		</div>
	);
};
