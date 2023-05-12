interface Props {
	sectionName: string;
	children: React.ReactNode;
}

const FooterSection: React.FC<Props> = (props) => {
	return (
		<div className="flex flex-col items-center justify-center gap-5">
			<p className="text-lg text-white">{props.sectionName}</p>
			<span className="flex flex-col gap-2 text-gray">
				{props.children}
			</span>
		</div>
	);
};

export default FooterSection;
