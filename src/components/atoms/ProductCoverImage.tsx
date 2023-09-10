/* eslint-disable @next/next/no-img-element */
export const ProductCoverImage = ({ src, alt="alt",  }: { src: string; alt: string; className?: string }) => {
    return (
        <div className="overflow-hidden relative">
            <img className="w-full transition duration-700 ease-in-out group-hover:opacity-60" src={src} alt={alt} />
        </div>
    );
}