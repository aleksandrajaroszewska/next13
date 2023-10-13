import { Route } from "next";
import NextImage from "next/image";
import Link from "next/link";

type ProductCoverImageProps<T extends string> = {
	productUrl: Route<T>;
	images: {
		url: string;
	}[];
};

export const ProductCoverImage = <T extends string>({
	images,
	productUrl,
}: ProductCoverImageProps<T>) => {
	return (
		<Link
			href={productUrl}
			className="aspect-square max-h-80 overflow-hidden rounded-md  border bg-slate-50  hover:bg-slate-100"
		>
			<NextImage
				width={320}
				height={320}
				alt="Product image"
				src={images[0]?.url || "/placeholder.png"}
				className="h-full w-full object-contain object-center p-4 transition-transform hover:scale-105"
			/>
		</Link>
	);
};
