import { ProductListItem } from "@/components/molecules/ProductListItem";

export type Product = {
	id: string;
	title: string;
	price: number;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
	description: string;
};

export default async function ProductsList({
	page,
	limit,
}: {
	page: number;
	limit: number;
}) {
	const take = limit;
	const offset = 10 * (page - 1);
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products?offset=${offset}&take=${take}`,
	);

	const products = (await res.json()) as any[];

	return (
		<ul
			data-testid="products-list"
			className={"flex flex-wrap justify-center"}
		>
			{products.map((product: Product) => (
				<ProductListItem data-testid="products-list" key={product.id} product={product} />
			))}
		</ul>
	);
}
