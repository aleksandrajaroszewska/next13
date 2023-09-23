
import ProductList from "@/components/organisms/ProductList";


export default function Page() {

	return (
		<main className={"flex flex-col justify-around bg-fuchsia-800"}>
            <ProductList  limit={20} page={1} />
		</main>
	);
}
