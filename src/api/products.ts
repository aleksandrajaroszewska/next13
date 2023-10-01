import {
	ProductsGetByIdDocument,
	ProductListItemFragment,
	ProductsGetByCategorySlugDocument,
	ProductsGetListDocument,
} from "@/gql/graphql";
import { executeGraphql } from "./graphQlApi";

export const getProductList = async () => {
	const graphqlResponse = await executeGraphql(
		ProductsGetListDocument,
		{},
	);

	return graphqlResponse.products;
};

export const getProductsByCategorySlug = async (
	categorySlug: string,
) => {
	const categories = await executeGraphql(
		ProductsGetByCategorySlugDocument,
		{ slug: categorySlug },
	);
	const products = categories.categories[0]?.products;

	return products;
};

export const getProductsById = async (
	productId: ProductListItemFragment["id"],
) => {
	const product = await executeGraphql(ProductsGetByIdDocument, {
		id: productId,
	});
	return product.product;
	throw new Error("Not implemented");
};

// export const getProductsByPage = async (page: number) => {
// 	const offset = (page - 1) * productsPerPage;

// 	const graphqlResponse = await executeGraphql({
// 		query: ProductGetByPageDocument,
// 		variables: {
// 			skip: offset,
// 			first: productsPerPage,
// 		},
// 	});

// 	return graphqlResponse.products;
// };

// export const getProductsByCollectionSlug = async (collection: string, page: number) => {
// 	const offset = (page - 1) * productsPerPage;
// 	const graphqlResponse = await executeGraphql({
// 		query: ProductsGetByCollectionSlugDocument,
// 		variables: {
// 			slug: collection,
// 			skip: offset,
// 			first: productsPerPage,
// 		},
// 	});

// 	return graphqlResponse.collections[0]?.products;
// };

// export const getColorSizeVariantsByProductId = async (id: string) => {
// 	const graphqlResponse = await executeGraphql({
// 		query: ProductGetColorSizeVariantsByIdDocument,
// 		variables: {
// 			id,
// 		},
// 	});

// 	return graphqlResponse.product?.variants || [];
// };
