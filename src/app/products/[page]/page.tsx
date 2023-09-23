"use client";

import { Pagination } from "@/components/molecules/Pagination";
import ProductList from "@/components/organisms/ProductList";
import { useParams } from "next/navigation";

export default function Page() {
	const { page } = useParams();
	const currentPage = parseInt(page as string);
	console.log(page, "page");

	return (
		<main className={"flex flex-col justify-around bg-fuchsia-800"}>
			<ProductList limit={10} page={currentPage} />
			<Pagination currentPage={currentPage} totalPages={10} />
		</main>
	);
}
