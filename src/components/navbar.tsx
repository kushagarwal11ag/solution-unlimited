import Link from "next/link";
import ToggleButton from "./mode-toggle"

type IconProps = React.SVGProps<SVGSVGElement>;

const navbar = () => {
	return (
		<header className="px-4 lg:px-6 h-14 flex items-center dark:bg-black border-b">
			<Link
				href="#home"
				className="flex gap-2 items-center justify-center"
				prefetch={false}
			>
				<BuildingIcon className="h-6 w-6" />
				<span className="hidden sm:flex uppercase font-bold">Solution Unlimited</span>
			</Link>
			<nav className="ml-auto flex gap-4 sm:gap-6 items-center">
				<Link
					href="#services"
					className="text-sm font-medium hover:underline underline-offset-4"
					prefetch={false}
				>
					Services
				</Link>
				<Link
					href="#portfolio"
					className="text-sm font-medium hover:underline underline-offset-4"
					prefetch={false}
				>
					Portfolio
				</Link>
				<Link
					href="#contact"
					className="text-sm font-medium hover:underline underline-offset-4"
					prefetch={false}
				>
					Contact
				</Link>
				<ToggleButton />
			</nav>
		</header>
	);
};

const BuildingIcon: React.FC<IconProps> = (props) => (
	<svg
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
		<path d="M9 22v-4h6v4" />
		<path d="M8 6h.01" />
		<path d="M16 6h.01" />
		<path d="M12 6h.01" />
		<path d="M12 10h.01" />
		<path d="M12 14h.01" />
		<path d="M16 10h.01" />
		<path d="M16 14h.01" />
		<path d="M8 10h.01" />
		<path d="M8 14h.01" />
	</svg>
);

export default navbar;
