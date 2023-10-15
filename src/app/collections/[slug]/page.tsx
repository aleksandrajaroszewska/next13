import Link from "next/link";
import { getCollectionsList } from "@/api/products";
import { Metadata } from "next";

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

export default async function CollectionsList() {
	const collections = await getCollectionsList();

	return (
		<div>
			<ul>
				<h1 role="heading" className="">
					collections
				</h1>

				{collections.map((collection) => {
					return (
						<li key={collection.slug}>
							<Link href={`/collections/${collection.slug}`}>
								{collection.name}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
