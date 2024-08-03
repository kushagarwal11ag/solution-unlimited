import Image from "next/image";
import { Button } from "./ui/button";

const services = () => {
	return (
		<section
			id="services"
			className="w-full py-12 md:py-24 lg:py-32 dark:bg-black"
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
							Solution Unlimited offers a wide range of services
							to meet your business needs, from property
							management to electrical installation and repair.
						</p>
					</div>
				</div>
				<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
					<div className="flex flex-col justify-center space-y-4">
						<div className="grid gap-2">
							<h3 className="text-xl font-bold">
								Property Management
							</h3>
							<p className="text-muted-foreground">
								Our experienced team handles all aspects of
								property management, from tenant screening to
								maintenance and repairs.
							</p>
							<Button variant="default">Learn More</Button>
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
						<div className="grid gap-2">
							<h3 className="text-xl font-bold">
								Electrical Services
							</h3>
							<p className="text-muted-foreground">
								Our licensed electricians provide top-quality
								electrical installation, maintenance, and repair
								services to keep your business running smoothly.
							</p>
							<Button variant="default">Learn More</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default services;
