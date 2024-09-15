"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import Logo from "./logo";
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
	const { theme } = useTheme();

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<header className="px-4 lg:px-6 h-14 flex items-center dark:bg-black border-b">
				<Link
					href="#home"
					className="flex gap-2 items-center justify-center"
				>
					<Logo
						fillLeft={theme === "dark" ? "#fff" : "#000"}
						fillRight="red"
						className="h-16 w-16"
					/>
					<span className="hidden sm:flex uppercase font-bold whitespace-nowrap">
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

export default Navbar;
