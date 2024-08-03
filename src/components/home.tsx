import Image from "next/image";
import { Button } from "./ui/button";

const home = () => {
	return (
		<section id="home" className="w-full py-12 md:py-24 lg:py-32 xl:py-48 dark:bg-black">
			<div className="container px-4 md:px-6">
				<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
					<div className="flex flex-col justify-center space-y-4">
						<div className="space-y-2">
							<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
								Trusted Solutions for Your Business
							</h1>
							<p className="max-w-[600px] text-primary-foreground/80 md:text-xl">
								Solution Unlimited provides top-notch property
								management, electrical installation, and repair
								services to help your business thrive.
							</p>
						</div>
						<div className="flex flex-col gap-2 min-[400px]:flex-row">
							<Button variant="default">Learn More</Button>
						</div>
					</div>
					<Image
						src="/hero.jpg"
						width="550"
						height="310"
						alt="Hero"
						className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
					/>
				</div>
			</div>
		</section>
	);
};

export default home;
