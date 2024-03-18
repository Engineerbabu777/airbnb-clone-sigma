import React from "react";
import ResultsList from "./ResultsList";

type Props = {};

export default async function ResultsPage({}: Props) {
	const result = await fetch("http://localhost:3000/api/search");
	const data = await result.json();
	console.log(data);

	return (
		<>
			<ResultsList data={data} />
		</>
	);
}
