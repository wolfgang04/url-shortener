import React from "react";

type Props = {
	children: React.ReactNode;
	roundness: string;
};

const Button: React.FC<Props> = (props) => {
	return (
		<button className={`bg-cyan text-white ${props.roundness}`}>
			{props.children}
		</button>
	);
};

export default Button;
