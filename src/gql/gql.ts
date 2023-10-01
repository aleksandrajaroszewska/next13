/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n\tfragment ProductListItem_ProductFragment on Product {\n\t\tid\n\t\tname\n\t\tdescription\n\t\tprice\n\t\tcategories {\n\t\t\tname\n\t\t}\n\t\timages {\n\t\t\turl\n\t\t}\n\t}\n": types.ProductListItem_ProductFragmentFragmentDoc,
    "fragment ProductListItem on Product {\n  id\n  name\n  description\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n}": types.ProductListItemFragmentDoc,
    "query ProductsGetByCategorySlug($slug: String!) {\n  categories(where: {slug: $slug}) {\n    products(first: 10) {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetByCategorySlugDocument,
    "query ProductsGetById($id: ID!) {\n  product(where: {id: $id}) {\n    ...ProductListItem\n  }\n}": types.ProductsGetByIdDocument,
    "query ProductsGetList {\n  products(first: 10) {\n    id\n    name\n    description\n    categories(first: 1) {\n      name\n    }\n    images(first: 1) {\n      url\n    }\n    price\n  }\n}": types.ProductsGetListDocument,
    "\n\tfragment ProductCoverImage_ProductFragment on Product {\n\t\timages(first: 1) {\n\t\t\turl\n\t\t}\n\t}\n": types.ProductCoverImage_ProductFragmentFragmentDoc,
    "\n\tfragment ProductListItemDescription_Product on Product {\n\t\tname\n\t\tdescription\n\t\tcategories(first: 1) {\n\t\t\tname\n\t\t}\n\t\tprice\n\t}\n": types.ProductListItemDescription_ProductFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment ProductListItem_ProductFragment on Product {\n\t\tid\n\t\tname\n\t\tdescription\n\t\tprice\n\t\tcategories {\n\t\t\tname\n\t\t}\n\t\timages {\n\t\t\turl\n\t\t}\n\t}\n"): typeof import('./graphql').ProductListItem_ProductFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  name\n  description\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategorySlug($slug: String!) {\n  categories(where: {slug: $slug}) {\n    products(first: 10) {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetById($id: ID!) {\n  product(where: {id: $id}) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList {\n  products(first: 10) {\n    id\n    name\n    description\n    categories(first: 1) {\n      name\n    }\n    images(first: 1) {\n      url\n    }\n    price\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment ProductCoverImage_ProductFragment on Product {\n\t\timages(first: 1) {\n\t\t\turl\n\t\t}\n\t}\n"): typeof import('./graphql').ProductCoverImage_ProductFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment ProductListItemDescription_Product on Product {\n\t\tname\n\t\tdescription\n\t\tcategories(first: 1) {\n\t\t\tname\n\t\t}\n\t\tprice\n\t}\n"): typeof import('./graphql').ProductListItemDescription_ProductFragmentDoc;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
