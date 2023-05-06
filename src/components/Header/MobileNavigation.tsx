import { Menu } from "@headlessui/react";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "../Button";

const MobileNavigation = () => {
	return (
		<Menu as="div" className="absolute right-[40px] z-50 md:hidden">
			<Menu.Button>
				<MenuIcon />
			</Menu.Button>

			<Menu.Items
				className="fixed left-1/2 flex w-[85%] -translate-x-1/2 translate-y-[20px] transform flex-col items-center justify-center
										gap-2 rounded-lg bg-dark-Violet p-6 text-lg text-white shadow-lg"
			>
				<Menu.Item>
					{({ active }) => (
						<a
							href="#"
							className={`${
								active
									? "bg-blue-500 text-white"
									: "text-gray-900"
							} block rounded px-4 py-2 hover:bg-blue-500`}
						>
							Features
						</a>
					)}
				</Menu.Item>
				<Menu.Item>
					{({ active }) => (
						<a
							href="#"
							className={`${
								active
									? "bg-blue-500 text-white"
									: "text-gray-900"
							} block rounded px-4 py-2 hover:bg-blue-500`}
						>
							Pricing
						</a>
					)}
				</Menu.Item>
				<Menu.Item>
					{({ active }) => (
						<a
							href="#"
							className={`${
								active
									? "bg-blue-500 text-white"
									: "text-gray-900"
							} block rounded px-4 py-2 hover:bg-blue-500`}
						>
							Resources
						</a>
					)}
				</Menu.Item>
				<hr className="w-full border-[1px] text-sm outline-none" />
				<Menu.Item>
					{({ active }) => (
						<a
							href="#"
							className={`${
								active
									? "bg-blue-500 text-white"
									: "text-gray-900"
							} block rounded px-4 py-2 hover:bg-blue-500 `}
						>
							Login
						</a>
					)}
				</Menu.Item>
				<Menu.Item>
					{({ active }) => (
						<a
							href="#"
							className={`${
								active
									? "bg-blue-500 text-white"
									: "text-gray-900"
							} block rounded px-4 py-2 hover:bg-blue-500 `}
						>
							<Button roundness="rounded-full">Signup</Button>
						</a>
					)}
				</Menu.Item>
			</Menu.Items>
		</Menu>
	);
};

export default MobileNavigation;
