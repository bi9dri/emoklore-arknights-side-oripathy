import React from "react";

export default function Memo({ children }) {
	return (
		<p
			style={{
				color: "grey",
				fontSize: "0.9em",
				fontStyle: "italic",
				marginBottom: "3em",
			}}
		>
			{children}
		</p>
	);
}
