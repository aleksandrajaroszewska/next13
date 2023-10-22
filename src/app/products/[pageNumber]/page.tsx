import {
	getProductCount,
	getProductsByPage,
	getProductsList,
} from "@/api/products";
import { ProductOrderByInput } from "@/gql/graphql";
import { SortProducts } from "@/ui/atoms/SortProducts";
import { Pagination } from "@/ui/molecules/Pagination";
import ProductList from "@/ui/organisms/ProductList";

type ProductsPageParams = {
	params: { pageNumber: string };
	searchParams: {
		product_list_order: string;
	};
};

export default async function ProductsPage({
	params,
	searchParams,
}: ProductsPageParams) {
	const productsByPage = await getProductsByPage(
		Number(params.pageNumber) || 1,
	);

	const { product_list_order } = searchParams;
	const orderBy = (product_list_order ||
		"name_ASC") as ProductOrderByInput;
	const first = 6;
	const skip = (Number(params.pageNumber) - 1) * first;

	const response = await getProductsList({ first, skip, orderBy });
	const { products, productsConnection } = response;

	console.log(productsConnection);

	const totalPages = await getProductCount();

	return (
		<main
			className={"flex w-full flex-col justify-center bg-fuchsia-800"}
		>
			<SortProducts defaultOrderBy={orderBy} />
			<ProductList products={products} />
			<Pagination
				currentPage={
					params.pageNumber ? Number(params.pageNumber) : 1
				}
				pageType="products"
				totalPages={totalPages / 4 + 1}
			/>
		</main>
	);
}
