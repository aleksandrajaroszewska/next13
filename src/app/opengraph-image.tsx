import { ImageResponse } from "next/server";

export const runtime = "edge";

export const alt = "next13 masters sklep";
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/png";

export default async function og() {
	return new ImageResponse(
		(
			<div
				tw="w-full text-white h-full flex flex-col items-center justify-center text-8xl"
				style={{
					background: `
				    linear-gradient(
				      90deg,
				      rgb(120, 6, 77) 0%,
				      rgb(158, 11, 160) 20%,
				      rgb(39, 2, 33) 80%,
				      rgb(120, 6, 77) 100%
				    )`,
				}}
			>
				<p tw="font-sans uppercase m-0 p-0 text-[101px] leading-4">
					next13
				</p>
				<p tw="font-serif m-0 p-0 font-black">masters</p>
				<p tw="m-0 mt-2">Pink</p>
			</div>
		),
	);
}
