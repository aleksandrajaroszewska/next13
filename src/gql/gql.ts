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
    "mutation CartAddProduct($cartId: ID!, $productId: ID!, $total: Int!, $quantity: Int!, $orderItemId: ID) {\n  upsertOrderItem(\n    upsert: {create: {quantity: $quantity, total: $total, product: {connect: {id: $productId}}, order: {connect: {id: $cartId}}}, update: {quantity: $quantity, total: $total, product: {connect: {id: $productId}}, order: {connect: {id: $cartId}}}}\n    where: {id: $orderItemId}\n  ) {\n    id\n  }\n}": types.CartAddProductDocument,
    "mutation CartCreate {\n  createOrder(data: {total: 0}) {\n    ...Cart\n  }\n}": types.CartCreateDocument,
    "query CartGetById($id: ID!) {\n  order(where: {id: $id}, stage: DRAFT) {\n    ...Cart\n  }\n}": types.CartGetByIdDocument,
    "fragment Cart on Order {\n  id\n  total\n  orderItems {\n    id\n    quantity\n    total\n    product {\n      ...ProductListItem\n    }\n  }\n}": types.CartFragmentDoc,
    "mutation cartRemoveProduct($itemId: ID!) {\n  deleteOrderItem(where: {id: $itemId}) {\n    id\n  }\n}": types.CartRemoveProductDocument,
    "mutation CartSetProductQuantity($itemId: ID!, $quantity: Int!) {\n  updateOrderItem(where: {id: $itemId}, data: {quantity: $quantity}) {\n    id\n    quantity\n  }\n}": types.CartSetProductQuantityDocument,
    "query CollectionsGetListBySlug($slug: String!) {\n  collections(where: {slug: $slug}) {\n    id\n    name\n    slug\n    description\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.CollectionsGetListBySlugDocument,
    "query CollectionsGetList {\n  collections {\n    id\n    name\n    slug\n    description\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.CollectionsGetListDocument,
    "fragment ProductListItem on Product {\n  id\n  name\n  description\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n  reviews {\n    ...ReviewItem\n  }\n  averageRating\n}": types.ProductListItemFragmentDoc,
    "mutation ProductPublish($id: ID!) {\n  publishProduct(where: {id: $id}, to: PUBLISHED) {\n    ...ProductListItem\n  }\n}": types.ProductPublishDocument,
    "query ProductsCount {\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsCountDocument,
    "query ProductsGetByCategorySlug($slug: String!, $skip: Int!, $first: Int!) {\n  categories(where: {slug: $slug}) {\n    products(skip: $skip, first: $first) {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetByCategorySlugDocument,
    "query ProductsGetById($id: ID!) {\n  product(where: {id: $id}) {\n    ...ProductListItem\n  }\n}": types.ProductsGetByIdDocument,
    "query ProductGetByPage($skip: Int!, $first: Int!) {\n  products(skip: $skip, first: $first) {\n    ...ProductListItem\n  }\n}": types.ProductGetByPageDocument,
    "query ProductsGetList($first: Int, $skip: Int, $query: String, $orderBy: ProductOrderByInput) {\n  products(\n    where: {name_contains: $query}\n    first: $first\n    skip: $skip\n    orderBy: $orderBy\n  ) {\n    ...ProductListItem\n  }\n  productsConnection(where: {name_contains: $query}) {\n    pageInfo {\n      pageSize\n    }\n  }\n}": types.ProductsGetListDocument,
    "query ProductsGetByRecommendedCategory($slug: String!) {\n  categories(where: {slug: $slug}) {\n    products(first: 5) {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetByRecommendedCategoryDocument,
    "query ProductsRelated {\n  products(first: 4) {\n    id\n    name\n    description\n    categories(first: 1) {\n      name\n    }\n    images(first: 1) {\n      url\n    }\n    price\n    reviews {\n      ...ReviewItem\n    }\n  }\n}": types.ProductsRelatedDocument,
    "mutation ReviewCreate($id: ID!, $headline: String!, $name: String!, $email: String!, $content: String!, $rating: Int!) {\n  createReview(\n    data: {headline: $headline, name: $name, email: $email, content: $content, rating: $rating, product: {connect: {id: $id}}}\n  ) {\n    ...ReviewItem\n  }\n}": types.ReviewCreateDocument,
    "fragment ReviewItem on Review {\n  id\n  name\n  headline\n  email\n  content\n  rating\n  stage\n}": types.ReviewItemFragmentDoc,
    "mutation ReviewPublish($id: ID!) {\n  publishReview(where: {id: $id}, to: PUBLISHED) {\n    ...ReviewItem\n  }\n}": types.ReviewPublishDocument,
    "mutation ReviewUpdateAverageRating($id: ID!, $averageRating: Int) {\n  updateProduct(where: {id: $id}, data: {averageRating: $averageRating}) {\n    id\n  }\n}": types.ReviewUpdateAverageRatingDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartAddProduct($cartId: ID!, $productId: ID!, $total: Int!, $quantity: Int!, $orderItemId: ID) {\n  upsertOrderItem(\n    upsert: {create: {quantity: $quantity, total: $total, product: {connect: {id: $productId}}, order: {connect: {id: $cartId}}}, update: {quantity: $quantity, total: $total, product: {connect: {id: $productId}}, order: {connect: {id: $cartId}}}}\n    where: {id: $orderItemId}\n  ) {\n    id\n  }\n}"): typeof import('./graphql').CartAddProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartCreate {\n  createOrder(data: {total: 0}) {\n    ...Cart\n  }\n}"): typeof import('./graphql').CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  order(where: {id: $id}, stage: DRAFT) {\n    ...Cart\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Cart on Order {\n  id\n  total\n  orderItems {\n    id\n    quantity\n    total\n    product {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').CartFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation cartRemoveProduct($itemId: ID!) {\n  deleteOrderItem(where: {id: $itemId}) {\n    id\n  }\n}"): typeof import('./graphql').CartRemoveProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartSetProductQuantity($itemId: ID!, $quantity: Int!) {\n  updateOrderItem(where: {id: $itemId}, data: {quantity: $quantity}) {\n    id\n    quantity\n  }\n}"): typeof import('./graphql').CartSetProductQuantityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetListBySlug($slug: String!) {\n  collections(where: {slug: $slug}) {\n    id\n    name\n    slug\n    description\n    products {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').CollectionsGetListBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetList {\n  collections {\n    id\n    name\n    slug\n    description\n    products {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').CollectionsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  name\n  description\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n  reviews {\n    ...ReviewItem\n  }\n  averageRating\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ProductPublish($id: ID!) {\n  publishProduct(where: {id: $id}, to: PUBLISHED) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductPublishDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsCount {\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductsCountDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategorySlug($slug: String!, $skip: Int!, $first: Int!) {\n  categories(where: {slug: $slug}) {\n    products(skip: $skip, first: $first) {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetById($id: ID!) {\n  product(where: {id: $id}) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetByPage($skip: Int!, $first: Int!) {\n  products(skip: $skip, first: $first) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductGetByPageDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($first: Int, $skip: Int, $query: String, $orderBy: ProductOrderByInput) {\n  products(\n    where: {name_contains: $query}\n    first: $first\n    skip: $skip\n    orderBy: $orderBy\n  ) {\n    ...ProductListItem\n  }\n  productsConnection(where: {name_contains: $query}) {\n    pageInfo {\n      pageSize\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByRecommendedCategory($slug: String!) {\n  categories(where: {slug: $slug}) {\n    products(first: 5) {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByRecommendedCategoryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsRelated {\n  products(first: 4) {\n    id\n    name\n    description\n    categories(first: 1) {\n      name\n    }\n    images(first: 1) {\n      url\n    }\n    price\n    reviews {\n      ...ReviewItem\n    }\n  }\n}"): typeof import('./graphql').ProductsRelatedDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ReviewCreate($id: ID!, $headline: String!, $name: String!, $email: String!, $content: String!, $rating: Int!) {\n  createReview(\n    data: {headline: $headline, name: $name, email: $email, content: $content, rating: $rating, product: {connect: {id: $id}}}\n  ) {\n    ...ReviewItem\n  }\n}"): typeof import('./graphql').ReviewCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ReviewItem on Review {\n  id\n  name\n  headline\n  email\n  content\n  rating\n  stage\n}"): typeof import('./graphql').ReviewItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ReviewPublish($id: ID!) {\n  publishReview(where: {id: $id}, to: PUBLISHED) {\n    ...ReviewItem\n  }\n}"): typeof import('./graphql').ReviewPublishDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ReviewUpdateAverageRating($id: ID!, $averageRating: Int) {\n  updateProduct(where: {id: $id}, data: {averageRating: $averageRating}) {\n    id\n  }\n}"): typeof import('./graphql').ReviewUpdateAverageRatingDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
