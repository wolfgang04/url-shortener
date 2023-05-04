import React from "react";

type Props = {
	children: React.ReactNode;
	roundness: string;
};

const Button: React.FC<Props> = (props) => {
	return (
		<button className={`bg-cyan px-8 py-3 text-white ${props.roundness}`}>
			{props.children}
		</button>
	);
};

export default Button;
