import { Product } from "@/app/list/page";
import { formatMoney } from "@/utils";

export const ProductListItemDescription = ({
	product,
}: {
	product: Product;
}) => {
	const { title, price, category } = product;
	return (
		<div className="bg-white px-4 py-3">
			<a href="#">
				<h3 className="text-lg font-semibold text-gray-800 transition duration-300 ease-in-out hover:text-red-500">
					{title}
				</h3>
			</a>
			<p className="mr-2 text-xs text-gray-800">{category}</p>
			<p className="text-sm text-gray-600">{product.description}</p>
			<div className="flex py-2">
				<p className="mr-2 text-xs text-gray-600">
					{formatMoney(price)}
				</p>
				<p className="mr-2 text-xs text-red-600 line-through">
					{formatMoney(price + 20)}
				</p>
			</div>
		</div>
	);
};
