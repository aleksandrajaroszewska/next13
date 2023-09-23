import Link from "next/link";

export const ProductCoverImage = ({ src, alt="alt", productId  }: { src: string; alt: string; className?: string, productId:string }) => {
    return (
        <Link  href={`/product/${productId}`}className="flex justify-center bg-white p-10 overflow-hidden relative">
            <img className="h-40 transition duration-700 ease-in-out group-hover:opacity-60" src={src} alt={alt} />
        </Link>
    );
}