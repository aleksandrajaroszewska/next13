import { graphql } from "@/gql";
import { ProductListItemFragment } from "@/gql/graphql";

import { formatMoney } from "@/utils";
import Link from "next/link";

type ProductListItemDescriptionProps = {
	product: ProductListItemFragment;
};

export const ProductListItemDescription = ({
	product,
}: ProductListItemDescriptionProps) => {
	return (
		<div className="bg-white px-4 py-3">
			<Link href={`/product/${product.id}`}>
				<h3 className="truncate text-lg font-semibold text-gray-800 transition duration-300 ease-in-out hover:text-red-500">
					{product.name}
				</h3>
			</Link>
			<p className="mr-2 text-xs text-gray-800">
				{product.categories[0]?.name}
			</p>
			<div className="flex py-2">
				<p className="mr-2 text-xs text-gray-600">
					{formatMoney(product.price)}
				</p>
			</div>
		</div>
	);
};
