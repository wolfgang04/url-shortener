import React from "react";
import Button from "./Button";
import UrlShortener from "../UrlShortener";
import Features from "./Features/Features";
import Footer from "./Footer/Footer";

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
					<Button roundness="rounded-full px-8 py-3">
						Get Started
					</Button>
				</div>
			</div>

			<div className="mt-32 bg-gray-bg">
				<div className="-translate-y-1/2 p-5">
					<UrlShortener />
				</div>

				<Features />
			</div>

			<div className="relative flex h-[250px] w-full flex-col items-center justify-center bg-dark-Violet">
				<img
					src={process.env.PUBLIC_URL + "/images/bg-boost-mobile.svg"}
					alt=""
					className="absolute inset-0 h-full w-full object-cover"
				/>

				<div className="relative z-40 flex flex-col items-center justify-center gap-5">
					<h1 className="text-2xl font-bold text-white">
						Boost your links today
					</h1>
					<Button roundness="rounded-full px-8 py-3 w-[144px]">
						Get Started
					</Button>
				</div>
			</div>

			{/* FOOTER */}
			<Footer />
		</div>
	);
};

export default Content;
