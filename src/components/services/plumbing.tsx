import Image from "next/image";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";

const Plumbing = () => {
	return (
		<div className="grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
			<div className="flex flex-col justify-center order-2 lg:order-1">
				<div className="grid gap-2">
					<h3 className="text-xl font-bold">Plumbing Services</h3>
					<p className="text-black/85 dark:text-white/85">
						We deliver comprehensive plumbing services, from
						installations and upgrades to repairs and maintenance.
						Our skilled team ensures efficient, safe, and reliable
						plumbing systems, addressing issues promptly.
					</p>

					<Button variant="default">Read More</Button>
				</div>
			</div>
			<Carousel
				className="overflow-hidden order-1 lg:order-2 rounded-xl"
				plugins={[
					Autoplay({
						delay: 3000,
					}),
				]}
			>
				<CarouselContent>
					<CarouselItem className="relative h-64">
						<Image
							src="/plumbing.jpg"
							layout="fill"
							objectFit="cover"
							alt="Plumbing pipes"
						/>
					</CarouselItem>
					<CarouselItem className="relative h-64">
						<Image
							src="/plumbing-2.jpg"
							layout="fill"
							objectFit="cover"
							alt="Plumbing pipes construction"
						/>
					</CarouselItem>
				</CarouselContent>
			</Carousel>
		</div>
	);
};

export default Plumbing;
