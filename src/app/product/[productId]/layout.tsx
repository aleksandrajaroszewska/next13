export default function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="m-8 w-10/12 h-100 bg-fuchsia-600">
			<p>layout in layout</p>
			{children}
		</div>
	);
}
