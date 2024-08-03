import Link from "next/link";
import Image from "next/image";

const home = () => {
	return (
		<section id="home" className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white text-black">
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
							<Link
								href="#"
								className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-primary text-primary-foreground px-8 text-sm font-medium shadow-sm transition-colors hover:bg-primary-foreground/90 hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
								prefetch={false}
							>
								Learn More
							</Link>
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
