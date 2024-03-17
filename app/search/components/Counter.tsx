import React, { useState } from "react";

type Props = {
	label: string;
};

const CountIcon = ({ icon, onClick }) => {
	return (
		<button onClick={onClick} className="border rounded-full w-5 h-5 flex items-center justify-center">
			<span>{icon}</span>
		</button>
	);
};

export default function Counter({ label }: Props) {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className="flex justify-between ">
				<p className="font-bold">{label}</p>
				<div className="flex items-center gap-x-1">
					{count > 0 && (
						<CountIcon icon={"-"} onClick={() => setCount(count - 1)} />
					)}
					<span>{count}</span>
					<span>
						<CountIcon icon={"+"} onClick={() => setCount(count + 1)} />
					</span>
				</div>
			</div>
		</>
	);
}
