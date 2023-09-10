import { formatMoney } from "@/utils";

type ProductListItemProps = {
	product: {
		title: string;
		price: number;
		salePrice: number;
		category: string;
	};
};

export const ProductListItemDescription = ({
	product,
}: ProductListItemProps) => {
	const { title, price, salePrice, category } = product;
	return (
		<div className="bg-white px-4 py-3">
			<a href="#">
				<h1 className="text-lg font-semibold text-gray-800 transition duration-300 ease-in-out hover:text-red-500">
					{title}
				</h1>
			</a>
			<p className="mr-2 text-xs text-gray-800">{category}</p>
			<div className="flex py-2">
				<p className="mr-2 text-xs text-gray-600">
					{formatMoney(price)}
				</p>
				<p className="mr-2 text-xs text-red-600 line-through">
					{formatMoney(salePrice)}
				</p>
			</div>
		</div>
	);
};
