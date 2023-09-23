import ProductList from "@/components/organisms/ProductList";
import { ReactNode, Suspense } from "react";

export async function generateStaticParams() {
	// pobierz kategorie z API
	return [
		{ category: "t-shirts" },
		{ category: "skirts" },
		{ category: "dresses" },
	];
}

export default  function CategoryPage({
	children,
}: {
	children: ReactNode;
}) {
	return  children

}
