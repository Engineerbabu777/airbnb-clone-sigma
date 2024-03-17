import React, { useState } from "react";
import Counter from "./Counter";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

type Props = {};

export default function SearchBar({}: Props) {
	const [isSearchFocused, setIsSearchFocused] = useState(false);
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(undefined);

	const handleSelect = (ranges: any) => {
		if (ranges.selection.startDate !== startDate) {
			setStartDate(ranges.selection.startDate);
		}
		if (ranges.selection.endDate !== endDate) {
			setEndDate(ranges.selection.endDate);
		}
	};

	const selectionRange = {
		startDate: startDate,
		endDate: endDate,
		key: "selection",
	};

	return (
		<>
			<div className="flex flex-row self-center rounded-full border p-2 mt-8 gap-x-3">
				<button
					className="border-r px-4 text-left"
					onClick={() => setIsSearchFocused(true)}
				>
					<p className="font-bold">Where</p>
					{isSearchFocused ? (
						<>
							<input
								type="text"
								placeholder="search Destination"
								className="border-none bg-transparent outline-none text-slate-800"
							/>
						</>
					) : (
						<>
							<p className="text-slate-600">Search Destination</p>
						</>
					)}
				</button>
				<div className="dropdown dropdown-end px-4 border-r">
					<label className="" tabIndex={1}>
						<p className="font-bold">Dates</p>
						<p className="text-slate-600">Select Ranges</p>
					</label>
					<label
						className="dropdown-content  menu p-2 shadow bg-base-100 rounded-box w-52"
						tabIndex={1}
					>
						<DateRangePicker
							ranges={[selectionRange]}
							minDate={new Date()}
							onChange={handleSelect}
							rangeColors={["#FF385C"]}
						/>
					</label>
				</div>
				<div className="dropdown dropdown-end px-4 border-r">
					<label tabIndex={2}>
						<p className="font-bold">Who</p>
						<p className="text-slate-600">Add guest</p>
					</label>
					<div
						tabIndex={2}
						className="dropdown-content  menu p-2 shadow bg-base-100 rounded-box w-52"
					>
						<Counter label={"Adults"} />
					</div>
				</div>

				<Link href="/search/results" className="px-4 text-white rounded-full bg-primary flex gap-x-3 items-center">
					<MagnifyingGlassIcon className="w-5 h-5 text-white" />
					<span>Search</span>
				</Link >
			</div>
		</>
	);
}
