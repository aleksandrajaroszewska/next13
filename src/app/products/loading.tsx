export default function Loading() {
	return (
		<div
			aria-busy="true"
			className="my-16 flex h-full w-full items-center justify-center"
		>
			<div
				aria-busy="true"
				className="h-16 w-16 animate-spin rounded-full border-b-2 border-t-2 border-fuchsia-100"
			></div>
		</div>
	);
}
