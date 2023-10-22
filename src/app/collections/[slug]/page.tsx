import Link from "next/link";
import {
	getCollectionsList,
	getCollectionsListBySlug,
} from "@/api/products";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductListItem } from "@/ui/molecules/ProductListItem";
import ProductsList from "@/ui/organisms/ProductList";
import ProductList from "@/ui/organisms/ProductList";

// export const generateMetadata = async ({
// 	params,
// }: {
// 	params: { productId: string };
// }): Promise<Metadata> => {
// 	const collection = await getCollectionsList();
// 	if (!collection) {
// 		return {
// 			title: "Collection not found",
// 		};
// 	}

// 	return {
// 		title: `${collection[0]?.name}`,
// 	};
// };

export const metadata: Metadata = {
	title: "collections",
};

type CollectionsPageParams = {
	params: {
		slug: string;
	};
};

export default async function CollectionsList({
	params,
}: CollectionsPageParams) {
	const { slug } = params;
	const collections = await getCollectionsList();
	const collectionBySlug = await getCollectionsListBySlug({ slug });

	if (!collections[0]) throw notFound();

	return (
		<section className="flex flex-col">
			<h1 className="mx-16 py-4 text-xl" role="heading">
				collections
			</h1>
			<ul className="l mx-12 flex w-full border-slate-950">
				{collections.map((collection) => {
					return (
						<li className="p-4" key={collection.name}>
							<Link href={`/collections/${collection.slug}`}>
								{collection.name}
							</Link>
						</li>
					);
				})}
			</ul>
			<div className="flex w-full flex-col justify-around bg-fuchsia-800 p-8 text-xl">
				{collectionBySlug.map((collection) => {
					return (
						<ProductList
							key={collection.id}
							products={collection.products}
						/>
					);
				})}
			</div>
		</section>
	);
}
