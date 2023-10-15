import { getProductCount, getProductsByPage } from "@/api/products";
import { Pagination } from "@/ui/molecules/Pagination";
import ProductList from "@/ui/organisms/ProductList";

export default async function ProductsPage({
	params,
}: {
	params: { pageNumber: string };
}) {
	const productsByPage = await getProductsByPage(
		Number(params.pageNumber) || 1,
	);

	const totalPages = await getProductCount();

	return (
		<main
			className={"flex w-full flex-col justify-center bg-fuchsia-800"}
		>
			<ProductList products={productsByPage} />
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
