import React from "react";
import Feature from "./Feature";

const Features = () => {
	return (
		<div className="flex flex-col items-center justify-center gap-5 text-center ">
			<h1 className="text-[2em] font-bold">Advanced Statistics</h1>

			<p className="text-gray">
				Track how your links are performing across the web with our
				advanced statistics dashboard
			</p>

			<Feature
				h1="Brand Recognition"
				p="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content."
				img=""
			/>
			<Feature
				h1="Detailed Records"
				p="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions"
				img=""
			/>
			<Feature
				h1="Fully Customizable"
				p="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
				img=""
			/>
		</div>
	);
};

export default Features;
