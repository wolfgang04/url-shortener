import React from "react";
import Feature from "./Feature";

const Features = () => {
	return (
		<div className="mb-20 flex flex-col items-center justify-center gap-20 bg-gray-bg text-center">
			<div className="p-5">
				<h1 className="text-[2em] font-bold">Advanced Statistics</h1>
				<br />

				<p className="text-gray">
					Track how your links are performing across the web with our
					advanced statistics dashboard
				</p>
			</div>

			<div className="gap--24 flex flex-col items-center justify-center">
				<Feature
					h1="Brand Recognition"
					p="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content."
					img={
						process.env.PUBLIC_URL +
						"/images/icon-brand-recognition.svg"
					}
				/>
				<div className="h-20 border-r-8 border-cyan" />
				<Feature
					h1="Detailed Records"
					p="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions"
					img={
						process.env.PUBLIC_URL +
						"/images/icon-detailed-records.svg"
					}
				/>
				<div className="h-20 border-r-8 border-cyan" />
				<Feature
					h1="Fully Customizable"
					p="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
					img={
						process.env.PUBLIC_URL +
						"/images/icon-fully-customizable.svg"
					}
				/>
			</div>
		</div>
	);
};

export default Features;
