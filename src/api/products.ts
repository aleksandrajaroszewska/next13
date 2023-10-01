import {
	ProductsGetByCategorySlugDocument,
	ProductsGetListDocument,
} from "@/gql/graphql";
import { executeGraphql } from "./graphQlApi";
import { Product } from "./types";

export const getProductList = async (): Promise<Product[]> => {
	const graphqlResponse = await executeGraphql(
		ProductsGetListDocument,
		{},
	);

	return graphqlResponse.products.map((product: Product) => ({
		id: product.id,
		name: product.name,
		description: product.description,
		price: product.price,
		categories: product.categories.map((category) => ({
			name: category.name,
		})),
		images: product.images.map((image) => ({
			url: image.url,
		})),
	}));
};

export const getProductsByCategorySlug = async (
	categorySlug: string,
): Promise<any> => {
	const categories = await executeGraphql(
		ProductsGetByCategorySlugDocument,
		{ slug: categorySlug },
	);
	const products = categories.categories[0]?.products;

	return products;
};
