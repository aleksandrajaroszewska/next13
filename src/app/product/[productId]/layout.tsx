export default function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="h-150 m-8 w-10/12 bg-fuchsia-600">{children}</div>
	);
}
