import Image from "next/image";
import { Button } from "./ui/button";

const work = () => {
	return (
		<section
			id="portfolio"
			className="py-16 md:py-32 dark:bg-black container px-4 md:px-6"
		>
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center text-center">
					<div className="inline-block rounded-lg px-3 py-1 text-sm text-black/75 dark:text-white/75">
						Our Work
					</div>
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
						Showcasing Our Expertise
					</h2>
					<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
						Take a look at some of our past projects and see how
						we&apos;ve helped businesses like yours succeed.
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
		</section>
	);
};

export default work;
