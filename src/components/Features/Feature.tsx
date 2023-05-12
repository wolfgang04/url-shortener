import React from "react";

interface Props {
	h1: string;
	p: string;
	img: string;
}

const Feature: React.FC<Props> = (props) => {
	return (
		<div>
			<div className="rounded-md bg-white p-4">
				<h1 className="text-[2em] font-bold">{props.h1}</h1>
				<p className="text-gray">{props.p}</p>
			</div>
		</div>
	);
};

export default Feature;
