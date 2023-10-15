// export default function Loading() {
// 	return (
// 		<div
// 			aria-busy="true"
// 			className="my-16 flex h-full w-full items-center justify-center"
// 		>
// 			<div className="h-16 w-16 animate-spin rounded-full border-b-2 border-t-2 border-fuchsia-100"></div>
// 		</div>
// 	);
// }

export default async function SearchLoading() {
	return (
		<main className="mx-auto min-h-screen max-w-7xl">
			<h1
				className="pb-20 text-4xl font-extrabold first-letter:uppercase"
				role="heading"
			>
				Search Results
			</h1>
			<p
				className="pb-20 text-2xl font-extrabold first-letter:uppercase"
				role="heading"
			>
				Loading...
			</p>
		</main>
	);
}
