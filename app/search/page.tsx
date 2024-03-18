import React from "react";
import ResultsList from "./results/ResultsList";
import Link from "next/link";

type Props = {};

export default async function ResultsPage({}: Props) {
	const result = await fetch("http://localhost:3000/api/search");
	const data = await result.json();
	console.log(data);

	return (
		<>
      <div className="flex items-center justify-center w-screen bg-cover bg-center h-48 bg-[url('/images/booking-website-hero.png')]">
            <Link href="/search/results" className="rounded-full bg-[#673979] hover:bg-[#7B3C7D] px-4 py-2 text-white">Browse Stays</Link>
        </div>
			<ResultsList data={data} />
		</>
	);
}
