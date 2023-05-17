import FooterSection from "./FooterSection";

const Footer = () => {
	return (
		<footer className="flex w-full flex-col gap-10 bg-very-Dark-Violet py-10 text-center">
			<h1 className="text-[2em] font-bold text-white">Shortly</h1>

			{/* SECTIONS */}
			<FooterSection sectionName="Features">
				<p>Link Shortening</p>
				<p>Branded Links</p>
				<p>Analytics</p>
			</FooterSection>

			<FooterSection sectionName="Resources">
				<p>Blog</p>
				<p>Developers</p>
				<p>Support</p>
			</FooterSection>

			<FooterSection sectionName="Company">
				<p>About</p>
				<p>Our Team</p>
				<p>Careers</p>
				<p>Contact</p>
			</FooterSection>

			<div
				className="flex items-center justify-center gap-5"
				id="socials"
			>
				<a href="#">
					<img
						src={
							process.env.PUBLIC_URL + "/images/icon-facebook.svg"
						}
						alt=""
					/>
				</a>
				<a href="#">
					<img
						src={
							process.env.PUBLIC_URL + "/images/icon-twitter.svg"
						}
						alt=""
					/>
				</a>
				<a href="#">
					<img
						src={
							process.env.PUBLIC_URL +
							"/images/icon-pinterest.svg"
						}
						alt=""
					/>
				</a>
				<a href="#">
					<img
						src={
							process.env.PUBLIC_URL +
							"/images/icon-instagram.svg"
						}
						alt=""
					/>
				</a>
			</div>
		</footer>
	);
};

export default Footer;
