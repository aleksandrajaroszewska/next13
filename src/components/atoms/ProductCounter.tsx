"use client";
 
import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";
import {  ReactNode, useState } from "react";


export const  ProductCounter = ({children}: {children: ReactNode}) => {
	const [count, setCount] = useState(0);
	const router = useRouter();
	
	const params = useParams();

	const searchParams = useSearchParams();
 
	const pathname = usePathname();
	
 
	return (
		<div className={"flex flex-col items-center justify-center "}>
		   <button className={"bg-fuchsia-50 h-10 text-fuchsia-950 p-2 m-4 rounded-md "} onClick={() => setCount(count - 1)}>Decrement</button>
			<p className={"h-8"}>Count: {count}</p>
			<button className={"bg-fuchsia-50 h-10 text-fuchsia-950 p-2 m-4 rounded-md "} onClick={() => setCount(count + 1)}>Increment</button>
			{children}	
				
		</div>
	);
}
