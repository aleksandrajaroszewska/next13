import { ProductListItem } from "@/components/molecules/ProductListItem";
import ProductList from "@/components/organisms/ProductList";



export type Product = {
	id: string;
	title: string;
	price: number;
	category: string;
	rating: {	
		rate: number;	
		count: number;
	};
	image: string;
	description: string;
}	



export default async function ProductsPage() {


	return (
		<main className={"bg-fuchsia-800 flex justify-around" }>
		<ProductList limit={20} page={1} />
		</main>
	);
}

