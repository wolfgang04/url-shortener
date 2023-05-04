import MobileNavigation from "./MobileNavigation";

const Header = () => {
	return (
		<header className="flex justify-between pt-10 px-5 pb-5">
			<div className="flex">
				<img
					src={process.env.PUBLIC_URL + "/images/logo.svg"}
					alt="logo"
					className=""
				/>
			</div>

			<MobileNavigation />
		</header>
	);
};

export default Header;
