import Image from "next/image";
import Link from "next/link";

const work = () => {
	return (
		<section
			id="portfolio"
			className="w-full py-12 md:py-24 lg:py-32 bg-muted"
		>
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-muted-foreground">
							Our Work
						</div>
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
							Showcasing Our Expertise
						</h2>
						<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							Take a look at some of our past projects and see how
							we've helped businesses like yours succeed.
						</p>
					</div>
				</div>
				<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-8">
					<div className="relative overflow-hidden rounded-xl">
						<Image
							src="/fabrication.jpg"
							width="550"
							height="310"
							alt="Project 1"
							className="aspect-video object-cover"
						/>
						<div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 transition-opacity hover:opacity-100">
							<Link
								href="#"
								className="inline-flex h-9 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black shadow transition-colors hover:bg-black/90 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
								prefetch={false}
							>
								View Project
							</Link>
						</div>
					</div>
					<div className="relative overflow-hidden rounded-xl">
						<Image
							src="/plumbing.jpg"
							width="550"
							height="310"
							alt="Project 2"
							className="aspect-video object-cover"
						/>
						<div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 transition-opacity hover:opacity-100">
							<Link
								href="#"
								className="inline-flex h-9 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black shadow transition-colors hover:bg-black/90 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
								prefetch={false}
							>
								View Project
							</Link>
						</div>
					</div>
					<div className="relative overflow-hidden rounded-xl">
						<Image
							src="/electric.jpg"
							width="550"
							height="310"
							alt="Project 3"
							className="aspect-video object-cover"
						/>
						<div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 transition-opacity hover:opacity-100">
							<Link
								href="#"
								className="inline-flex h-9 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black shadow transition-colors hover:bg-black/90 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
								prefetch={false}
							>
								View Project
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default work;
