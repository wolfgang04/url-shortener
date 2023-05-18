import axios from "axios";
import { useRef, useState } from "react";

interface Links {
	origLink: string;
	shortenedLink: string;
}

interface ApiResponse {
	result: {
		short_link: string;
		original_link: string;
	};
}

interface Props {
	shorten: (ApiData: Links) => void;
}

const UrlShortener: React.FC<Props> = (props) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [isEmpty, setIsEmpty] = useState(false);

	const emptyTextStyle = "border-rose-500 border-4";
	const apiUrl = "https://api.shrtco.de/v2/shorten?url=";

	async function handleShorten() {
		const link = inputRef.current?.value;

		if (!link) {
			setIsEmpty(true);
			return;
		}

		setIsEmpty(false);

		try {
			const response = await axios.get<ApiResponse>(apiUrl + link);

			const data = response.data;

			props.shorten({
				origLink: data.result.original_link,
				shortenedLink: data.result.short_link,
			});
		} catch (error) {
			console.error("Error occured.", error);
		}

		inputRef.current.value = "";
	}

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			handleShorten();
		}
	};

	return (
		<div>
			<div className="relative flex flex-col gap-10 rounded-md bg-dark-Violet p-5">
				<img
					src={
						process.env.PUBLIC_URL + "/images/bg-shorten-mobile.svg"
					}
					alt=""
					className=" absolute right-0 top-0"
				/>

				<div className="z-50">
					<input
						type="text"
						placeholder="Shorten a link here..."
						className={`m-0 h-10 w-full rounded-md pl-4 outline-none ${
							isEmpty ? emptyTextStyle : ""
						}`}
						ref={inputRef}
						id="link-holder"
						onKeyDown={handleKeyPress}
					/>
					{isEmpty && (
						<label
							htmlFor="link-holder"
							className="text-sm italic text-red-500"
						>
							please add a link
						</label>
					)}

					<button
						className="mt-4 h-10 w-full rounded-md bg-cyan text-white"
						onClick={handleShorten}
					>
						Shorten it!
					</button>
				</div>
			</div>
		</div>
	);
};

export default UrlShortener;
