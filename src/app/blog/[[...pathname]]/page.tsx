export default function BlogPage({ params }: { params: { pathname: string[] } }) {
	const pathname = params?.pathname?.join("/");
	return (
		<div className="flex min-h-screen flex-col items-center justify-center py-2">
			<h2>Blog {pathname}</h2>;
		</div>
	);
}
