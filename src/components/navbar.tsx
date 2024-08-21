"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ToggleButton from "./mode-toggle";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu as MenuIcon } from "lucide-react";

type IconProps = React.SVGProps<SVGSVGElement>;

const mobileItems = [
	{
		name: "Services",
		link: "#services",
	},
	{
		name: "Portfolio",
		link: "#portfolio",
	},
	{
		name: "Contact",
		link: "#contact",
	},
];

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const router = useRouter();
	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<header className="px-4 lg:px-6 h-14 flex items-center dark:bg-black border-b">
				<Link
					href="#home"
					className="flex gap-2 items-center justify-center"
					prefetch={false}
				>
					<BuildingIcon className="h-6 w-6" />
					<span className="hidden sm:flex uppercase font-bold">
						Solution Unlimited
					</span>
				</Link>
				<nav className="ml-auto flex gap-4 sm:gap-6 items-center">
					<div className="hidden sm:flex gap-6">
						{mobileItems.map((item, index) => (
							<Link
								key={index}
								href={item.link}
								className="text-sm font-medium hover:underline underline-offset-4"
							>
								{item.name}
							</Link>
						))}
					</div>

					<ToggleButton />
					<SheetTrigger asChild>
						<Button
							variant="ghost"
							size="icon"
							className="sm:hidden"
						>
							<MenuIcon />
						</Button>
					</SheetTrigger>
					<SheetContent side="right">
						<div className="mt-5 flex flex-col items-start gap-6">
							{mobileItems.map((item, index) => (
								<Button
									variant="ghost"
									size="icon"
									key={index}
									className="w-full p-2"
									onClick={() => {
										setOpen(false);
										router.push(item.link);
									}}
								>
									{item.name}
								</Button>
							))}
						</div>
					</SheetContent>
				</nav>
			</header>
		</Sheet>
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

export default Navbar;
