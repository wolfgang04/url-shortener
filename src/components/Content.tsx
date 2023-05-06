import React from "react";
import Button from "./Button";

const Content = () => {
	const working = process.env.PUBLIC_URL + "/images/illustration-working.svg";

	return (
		<div className="flex flex-col items-center justify-center">
			<img src={working} className="translate-x-10" alt="working-img" />

			<div className="p-5">
				<div className="flex flex-col items-center justify-center gap-5 text-center ">
					<h1 className="text-[2em] font-bold">
						More than just shorter links
					</h1>
					<p className="text-gray">
						Build your brand's recognition and get detailed insights
						on how your links are performing
					</p>
					<Button roundness="rounded-full">Get Started</Button>
				</div>
			</div>
		</div>
	);
};

export default Content;
