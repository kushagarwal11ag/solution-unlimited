import Image from "next/image";
import { Button } from "./ui/button";

const work = () => {
	return (
		<section
			id="portfolio"
			className="py-16 md:py-32 dark:bg-black container px-4 md:px-6"
		>
			<div className="flex flex-col items-center justify-center text-center">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center text-center">
						<div className="inline-block rounded-lg px-3 py-1 text-sm text-black/75 dark:text-white/75">
							Our Work
						</div>
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
							Showcasing Our Expertise
						</h2>
						<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							Join our many satisfied clients and experience the
							convenience and reliability of a partner dedicated
							to your success.
						</p>
					</div>
					<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-8">
						<div className="relative overflow-hidden rounded-xl h-40">
							<Image
								src="/fabrication.jpg"
								layout="fill"
								objectFit="cover"
								alt="Project 1"
							/>
							<div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 transition-opacity hover:opacity-100">
								<Button variant="default">View Project</Button>
							</div>
						</div>
						<div className="relative overflow-hidden rounded-xl h-40">
							<Image
								src="/plumbing.jpg"
								layout="fill"
								objectFit="cover"
								alt="Project 2"
							/>
							<div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 transition-opacity hover:opacity-100">
								<Button variant="default">View Project</Button>
							</div>
						</div>
						<div className="relative overflow-hidden rounded-xl h-40">
							<Image
								src="/electric.jpg"
								layout="fill"
								objectFit="cover"
								alt="Project 3"
							/>
							<div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 transition-opacity hover:opacity-100">
								<Button variant="default">View Project</Button>
							</div>
						</div>
					</div>
				</div>

				<div className="relative">
					<div className="tk-blob fill-black dark:fill-white w-48 h-48 xs:w-64 xs:h-64 sm:w-96 sm:h-96">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 747.2 726.7"
						>
							<path d="M539.8 137.6c98.3 69 183.5 124 203 198.4 19.3 74.4-27.1 168.2-93.8 245-66.8 76.8-153.8 136.6-254.2 144.9-100.6 8.2-214.7-35.1-292.7-122.5S-18.1 384.1 7.4 259.8C33 135.6 126.3 19 228.5 2.2c102.1-16.8 213.2 66.3 311.3 135.4z"></path>
						</svg>
					</div>
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none text-white dark:text-black flex flex-col gap-5 text-xs xs:text-sm sm:text-xl">
						<span className="font-bold">Solution Unlimited</span>Empowering Industries, Anytime,
						Anywhere
					</div>
				</div>
			</div>
		</section>
	);
};

export default work;
