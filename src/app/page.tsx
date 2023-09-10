/* eslint-disable @next/next/no-img-element */

import { ProductList } from "@/components/organisms/ProductList";

export default function Home() {
	return (
		<main className=" bg-pink-800">
			<title className="pt-4 text-center text-xl text-gray-100">
				base product list
			</title>
			<div>
				<ProductList />
			</div>
		</main>
	);
}
