"use client";

import { useState } from "react";
import SearchBar from "./components/SearchBar";
import clsx from "clsx";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

export default function Header() {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleExpanded = () => {
		setIsExpanded(!isExpanded);
	};

	const headerClasses = clsx(
		"container",
		"mx-auto",
		"flex",
		"justify-between",
		"bg-white",
		"py-8",
		{
			"h-[7.5rem]": !isExpanded,
			"h-[13rem]": isExpanded,
		}
	);

	const searchContainerClasses = clsx(
		"search-container",
		"flex",
		"flex-row",
		"rounded-full",
		"p-4",
		"justify-center",
		"items-center",
		"drop-shadow-md",
		"bg-white",
		{
			"border-b-0": !isExpanded,
			"border-b-8": isExpanded,
		}
	);

	return (
		<header className="flex justify-between border-b bg-white z-50 fixed w-full">
			<div className={headerClasses}>
				<div className="text-red-500">airbnb</div>
				{isExpanded ? (
					<SearchBar />
				) : (
					<button onClick={toggleExpanded} className={searchContainerClasses}>
						<div className="input flex border-r px-4 items-center">
							<p>Anywhere</p>
						</div>
						<div className="input flex border-r px-4 items-center">
							<p>AnyDate</p>
						</div>
						<div className="input flex border-r px-4 items-center">
							<p>Add Guest</p>
						</div>
						<button className="px-4 text-white rounded-full bg-primary h-10 w-10 relative">
							<MagnifyingGlassIcon className="w-5 h-5 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
							{/* <span>Search</span> */}
						</button>
					</button>
				)}
				<div>user</div>
			</div>
		</header>
	);
}
