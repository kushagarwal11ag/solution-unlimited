import { Button } from "./ui/button";

const footer = () => {
	return (
		<footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t dark:bg-black">
			<p className="text-xs">
				&copy; 2024 Solution Unlimited. All rights reserved.
			</p>
			<nav className="sm:ml-auto flex gap-4 sm:gap-6">
				<Button variant="link"  className="text-xs font-normal">Terms of Service</Button>
				<Button variant="link" className="text-xs font-normal">Privacy Policy</Button>
			</nav>
		</footer>
	);
};

export default footer;
