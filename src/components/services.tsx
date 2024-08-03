import Image from "next/image";
import Link from "next/link";

const services = () => {
	return (
		<section
			id="services"
			className="w-full py-12 md:py-24 lg:py-32 bg-muted"
		>
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-muted-foreground">
							Our Services
						</div>
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
							Tailored Solutions for Your Business
						</h2>
						<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							Solution Unlimited offers a wide range of services to
							meet your business needs, from property management
							to electrical installation and repair.
						</p>
					</div>
				</div>
				<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
					<div className="flex flex-col justify-center space-y-4">
						<div className="grid gap-1">
							<h3 className="text-xl font-bold">
								Property Management
							</h3>
							<p className="text-muted-foreground">
								Our experienced team handles all aspects of
								property management, from tenant screening to
								maintenance and repairs.
							</p>
							<Link
								href="#"
								className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-black/90 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
								prefetch={false}
							>
								Learn More
							</Link>
						</div>
					</div>
					<Image
						src="/property.jpg"
						width="550"
						height="310"
						alt="Property Management"
						className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
					/>
				</div>
				<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
					<Image
						src="/electric.jpg"
						width="550"
						height="310"
						alt="Electrical Services"
						className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
					/>
					<div className="flex flex-col justify-center space-y-4">
						<div className="grid gap-1">
							<h3 className="text-xl font-bold">
								Electrical Services
							</h3>
							<p className="text-muted-foreground">
								Our licensed electricians provide top-quality
								electrical installation, maintenance, and repair
								services to keep your business running smoothly.
							</p>
							<Link
								href="#"
								className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
								prefetch={false}
							>
								Learn More
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default services;
