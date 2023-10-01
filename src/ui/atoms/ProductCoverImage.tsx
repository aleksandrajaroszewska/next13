type ProductCoverImageProps = {
	images: {
		url: string;
	}[];
};

export const ProductCoverImage = ({
	images,
}: ProductCoverImageProps) => {
	return (
		<img
			className="h-40 transition duration-700 ease-in-out group-hover:opacity-60"
			src={images[0]?.url || "/images/placeholder.png"}
		/>
	);
};
