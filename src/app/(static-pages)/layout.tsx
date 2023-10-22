export default function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="mx-24 w-full bg-fuchsia-100 text-center text-fuchsia-950">
			<p>Layout for static pages</p>
			{children}
		</section>
	);
}
2;
