import {
	ProductsGetByIdDocument,
	ProductListItemFragment,
	ProductsGetByCategorySlugDocument,
	ProductsGetListDocument,
	ProductGetByPageDocument,
	ProductsCountDocument,
	CollectionsGetListDocument,
} from "@/gql/graphql";
import { executeGraphql } from "./graphQlApi";

export const getProductList = async () => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetListDocument,
		variables: {},
		next: {
			revalidate: 15,
		},
	});

	return graphqlResponse.products;
};

export const getCollectionsList = async () => {
	const graphqlResponse = await executeGraphql({
		query: CollectionsGetListDocument,
		variables: {},
	});

	return graphqlResponse.collections;
};

export const getProductCount = async () => {
	const graphqlResponse = await executeGraphql({
		query: ProductsCountDocument,
		variables: {},
	});

	return graphqlResponse.productsConnection.aggregate.count;
};

export const getProductsByPage = async (page: number) => {
	const productsPerPage = 6;
	const offset = (page - 1) * productsPerPage;

	const graphqlResponse = await executeGraphql({
		query: ProductGetByPageDocument,
		variables: {
			skip: offset,
			first: productsPerPage,
		},
	});

	return graphqlResponse.products;
};

export const getProductsByCategorySlug = async (
	categorySlug: string,
	page: number,
) => {
	const productsPerPage = 4;
	const offset = (page - 1) * productsPerPage;
	const categories = await executeGraphql({
		query: ProductsGetByCategorySlugDocument,
		variables: {
			slug: categorySlug,
			skip: offset,
			first: productsPerPage,
		},
	});

	return categories.categories[0]?.products;
};

export const getProductsById = async (
	productId: ProductListItemFragment["id"],
) => {
	const product = await executeGraphql({
		query: ProductsGetByIdDocument,
		variables: {
			id: productId,
		},
		next: {
			revalidate: 1,
		},
	});
	return product.product;
	throw new Error("Not implemented");
};

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
