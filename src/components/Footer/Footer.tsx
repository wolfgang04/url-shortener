import FooterSection from "./FooterSection";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

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

			<div className="flex items-center justify-center gap-5">
				<FacebookIcon className="h-20 w-20 text-4xl text-white" />
				<TwitterIcon className="text-4xl text-white" />
				<PinterestIcon className="text-4xl text-white" />
				<InstagramIcon className="text-4xl text-white" />
			</div>
		</footer>
	);
};

export default Footer;
