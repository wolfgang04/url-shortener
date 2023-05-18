import { useState } from "react";
import Button from "./Button";
import UrlShortener from "./UrlShortener";
import Features from "./Features/Features";
import Footer from "./Footer/Footer";

interface Links {
	origLink: string;
	shortenedLink: string;
}

const Content = () => {
	const [shortenedLinks, setShortenedLinks] = useState<Links[]>([]);
	const working = process.env.PUBLIC_URL + "/images/illustration-working.svg";

	const handleShorten = (ApiData: Links) => {
		setShortenedLinks((prevLinks) => [
			...prevLinks,
			{
				origLink: ApiData.origLink,
				shortenedLink: ApiData.shortenedLink,
			},
		]);
		console.log(shortenedLinks);
	};

	return (
		<div className="flex flex-col items-center justify-center text-base">
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

			<div className="relative mt-32 bg-gray-bg">
				<div className="absolute -translate-y-1/2 p-5">
					<UrlShortener shorten={handleShorten} />
				</div>

				<div className="mt-20 flex flex-col gap-5 p-5">
					{shortenedLinks.map((link, idx) => (
						<div
							key={idx}
							className="flex flex-col gap-2 rounded-md bg-white p-5 text-base"
						>
							<div>
								<p className="p-1">{link.origLink}</p>
								<hr />

								<p className="p-1 text-cyan">
									{link.shortenedLink}
								</p>
							</div>

							<button className="h-10 w-full rounded-md bg-cyan text-white">
								Copy
							</button>
						</div>
					))}
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
