import React from "react";

interface Props {
	h1: string;
	p: string;
	img: string;
}

const Feature: React.FC<Props> = (props) => {
	return (
		<div className="w-80">
			<div className="relative flex flex-col items-center justify-center rounded-md bg-white p-5">
				<div className="absolute top-0 flex h-[80px] w-[80px] -translate-y-1/2 items-center justify-center rounded-full bg-dark-Violet">
					<img src={props.img} alt="" className="" />
				</div>

				<div className="mt-10">
					<h1 className="text-[28px] font-bold">{props.h1}</h1>
					<br />
					<p className="text-gray">{props.p}</p>
				</div>
			</div>
		</div>
	);
};

export default Feature;
