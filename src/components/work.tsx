"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

const Work = () => {
	const { theme } = useTheme();
	return (
		<section
			id="portfolio"
			className="py-16 md:py-32 dark:bg-black px-4 md:px-6"
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
					<div
						className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none text-white dark:text-black flex flex-col gap-2 text-xs xs:text-sm sm:text-xl"
						suppressHydrationWarning
					>
						<LogoIcon className="self-center w-20 h-20 sm:h-32 sm:w-32" />
						<h1 className="text-[#191970] dark:text-[#191970] font-bold">
							Solution Unlimited
						</h1>
						<p>Empowering Industries, Anytime, Anywhere</p>
					</div>
				</div>
			</div>
		</section>
	);
};

interface LogoProps {
	className?: string;
}

const LogoIcon = ({ className }: LogoProps) => (
	<svg
		xmlSpace="preserve"
		style={{
			maxHeight: 500,
		}}
		viewBox="460.0224971878515 228.95999999999998 999.9550056242971 622.0799999999999"
		y="0px"
		x="0px"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		xmlns="http://www.w3.org/2000/svg"
		id="Layer_1"
		width={999.9550056242971}
		height={622.0799999999999}
		className={className}
	>
		<g>
			<path
				d="M1029.2,549.51c-2.05,24.79-8.45,48.86-17.04,72.13l0.64,2.69l-0.71-1.75&#10;&#9;&#9;c-18.42,43.04-48.63,80.86-86.95,107.83c-17.51,11.85-36.37,21.52-56.04,29.2c-66.75,24.38-143.7,17.48-205.26-17.95&#10;&#9;&#9;c-64.35-37.11-110.56-104.5-120.09-178.38c-9.93-69.74,12.19-143.29,59.44-195.62c32.9-37.51,77.62-63.45,125.71-76.04&#10;&#9;&#9;c33.14-6.13,67.35-8.62,100.76-2.12c0.67-13.84,1.78-27.68,1.95-41.52c-28.79-0.81-57.49-3.57-86.28-4.61&#10;&#9;&#9;c-1.28,13.54-1.45,27.18-2.66,40.71c-7.21,3.06-15.29,3.44-22.8,5.69c-30.31,5.19-58.8,18.32-85.1,33.98&#10;&#9;&#9;c-9.43-10.94-19.33-21.45-28.59-32.53c-21.59,19.43-43.31,38.73-65.16,57.86c9.56,11.42,20,22.13,29.3,33.81&#10;&#9;&#9;c-23.71,29.4-39.77,64.62-48.22,101.3c-15.09-0.37-30.14-1.25-45.16-2.63c-1.72,29.06-3.77,58.09-4.95,87.15&#10;&#9;&#9;c15.09,0.57,30.14,2.16,45.26,2.46c4.88,37.45,17.51,73.72,37.18,105.98c-11.62,10.17-23,20.61-34.69,30.65&#10;&#9;&#9;c19.5,21.59,38.83,43.34,57.96,65.23c11.52-10,22.56-20.58,34.35-30.27c20.54,13.64,41.08,28.29,64.62,36.57&#10;&#9;&#9;c11.69,5.25,24.01,8.72,36.34,12.12c-0.94,15.09-1.52,30.24-2.96,45.33c29.03,2.22,58.09,3.77,87.19,5.22&#10;&#9;&#9;c0.61-15.02,1.95-30.01,2.59-44.99c27.58-3.06,54.56-10.57,79.98-21.65c9.09-4.34,18.05-9.03,26.67-14.28&#10;&#9;&#9;c10.41,10.61,20.04,21.92,29.87,33.14c11.92-10.94,23.94-21.75,36.17-32.33c9.53-8.55,18.99-17.24,28.86-25.39&#10;&#9;&#9;c-9.19-11.08-18.79-21.75-28.46-32.36c16.91-23.2,32.97-47.82,41.56-75.43c3.97-8.86,6.6-18.22,9.19-27.55&#10;&#9;&#9;c13.87,0.71,27.75,1.31,41.59,2.49c0.91-11.48,1.92-23,2.29-34.52c1.31-17.38,1.95-34.82,3.03-52.23&#10;&#9;&#9;c-13.71-0.98-27.41-1.99-41.15-2.59C1029.84,526.04,1029.81,537.76,1029.2,549.51z"
				className={`dark:fill-black fill-white`}
			/>
			<path
				d="M689.72,643.47c-25.8-22.56-44.42-53.28-52-86.75c-10.81-47.25,0.61-99.07,31.12-136.86&#10;&#9;&#9;c25.83-33.44,65.3-54.66,106.85-60.75c-53.17,1.15-104.93,29.3-135.38,72.77c-27.04,37.55-37.82,86.21-29.53,131.71&#10;&#9;&#9;c7.51,43.37,32.36,83.25,67.72,109.38c37.52,27.48,86.65,40.38,132.48,30.95c22.66-1.92,43.95-11.92,63.48-23.1&#10;&#9;&#9;c27.58-17.28,50.21-42.3,64.35-71.63c6.94-14.65,13.3-30.11,13.54-46.57c-11.89,49.64-50.14,90.66-97.19,109.41&#10;&#9;&#9;c-11.18,4.55-23.27,6.16-34.62,9.93C774.01,687.75,725.28,674.42,689.72,643.47z"
				className={`dark:fill-black fill-white`}
			/>
			<g>
				<path
					d="M1193.85,412.52c33.51,16.57,61.66,44.08,77.25,78.26c25.12,52.47,18.66,118.41-16.4,164.91&#10;&#9;&#9;&#9;c-25.59,35.46-66.34,59.44-109.85,64.39c55.16,0.71,107.93-31.25,138.17-76.55c32.4-48.16,38.05-112.71,14.62-165.79&#10;&#9;&#9;&#9;c-17.34-41.25-51.79-73.82-92.58-91.67l-1.38,0.47c-58.73-26.33-131.44-13.17-179.66,28.73c-29.26,26.03-52,61.93-56.54,101.36&#10;&#9;&#9;&#9;c12.29-46.41,46.34-86.11,90.25-105.41C1100.5,391.57,1151.28,393.02,1193.85,412.52z"
					className={`fill-[#191970]`}
				/>
				<path
					d="M1402.71,508.6c-5.02-37.04-16.8-73.51-37.14-105.07c11.08-10.94,23.34-20.68,34.59-31.45&#10;&#9;&#9;&#9;c-19.4-21.49-38.59-43.14-57.72-64.89c-11.99,9.9-23,20.88-35.06,30.65c-12.06-9.36-24.68-18.05-38.16-25.26&#10;&#9;&#9;&#9;c-19.6-10.91-40.98-17.98-62.4-24.28c1.25-15.09,1.82-30.21,3.06-45.26c-29-1.58-57.99-3.5-86.99-5.02&#10;&#9;&#9;&#9;c-0.61,14.99-2.09,29.94-2.59,44.96c-31.15,3.64-61.49,12.63-89.68,26.33c-5.83,3.27-11.62,6.53-17.41,9.9&#10;&#9;&#9;&#9;c-9.8-11.08-19.5-22.23-29.6-33.04c-21.62,19.3-43.38,38.42-64.83,57.89c8.72,10.78,18.86,20.37,27.38,31.32&#10;&#9;&#9;&#9;c-0.1,3.97-3.6,6.8-5.46,10.07c-21.18,27.61-35.39,60.01-44.15,93.55c-14.08-0.88-28.12-1.82-42.16-2.39&#10;&#9;&#9;&#9;c-1.28,29.03-3.77,57.99-4.68,87.05c13.64,0.51,27.24,1.21,40.85,2.09c-1.78-29.26,2.26-58.46,9.87-86.72&#10;&#9;&#9;&#9;c19.2-62.5,64.32-115.78,122.08-146.19c50.78-25.9,110.59-33.71,166.16-20.68c33.2,6.84,63.38,22.87,91.57,41.08l-0.1,1.72&#10;&#9;&#9;&#9;c52.33,37.45,87.32,97.73,96.11,161.34c7.81,55.36-3.97,113.39-33.34,161.04c-32.26,52.8-85.03,93.01-145.01,108.81&#10;&#9;&#9;&#9;c-35.02,9.09-71.9,10.81-107.53,4.38c-0.71,13.67-1.52,27.34-2.19,41.05c28.86,2.22,57.75,3.5,86.68,5.22&#10;&#9;&#9;&#9;c0.81-13.74,1.89-27.45,2.12-41.22c9.73-2.22,19.53-4.07,29.37-6.03c27.45-6.74,53.58-17.95,77.83-32.46&#10;&#9;&#9;&#9;c11.55,8.22,19.53,21.38,29.67,31.59c21.89-19.16,43.51-38.63,65.3-57.92c-9.8-10.98-19.67-21.86-29.3-32.94&#10;&#9;&#9;&#9;c23.2-30.11,39.8-65.13,48.32-102.21c15.02,0.74,30.01,2.02,45.06,2.69c1.48-29.06,3.91-58.09,4.78-87.19&#10;&#9;&#9;&#9;C1432.88,510.65,1417.76,509.91,1402.71,508.6z"
					className={`fill-[#191970]`}
				/>
			</g>
		</g>
	</svg>
);

export default Work;
