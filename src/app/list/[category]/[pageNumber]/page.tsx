export async function generateStaticParams({
	params,
}: {
	params: { category: string };
}) {
	

	if (params.category === "t-shirts") {
		return [{ pageNumber: "1" }, {pageNumber: "2"}];
	} else if (params.category === "skirts") {
		return [{ pageNumber: "1" }];
	} else if (params.category === "dresses") {
        return [{ pageNumber: "1" }, { pageNumber: "2" }];
    }
	return [
		
	];
}

export default function CategoryProductsPage({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	return (
		<div>
			<h1>
				CategoryProductsPage {params.category} page{" "}
				{params.pageNumber}
			</h1>
		</div>
	);
}
