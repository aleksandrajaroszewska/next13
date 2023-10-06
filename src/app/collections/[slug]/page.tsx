import Link from "next/link";
import { getCollectionsList } from "@/api/products";

export default async function CollectionsList() {
	const collections = await getCollectionsList();

	return (
		<div>
			<h1 className="">Collections List</h1>
			<ul>
				{collections.map((category) => {
					return (
						<li key={category.slug}>
							<Link href={`/collections/${category.slug}`}>
								{category.name}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
