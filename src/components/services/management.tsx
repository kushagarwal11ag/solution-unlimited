import Image from "next/image";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Management = () => {
	return (
		<div className="w-full grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
			<div className="flex flex-col justify-center order-2 lg:order-1">
				<div className="grid gap-2">
					<h3 className="text-xl font-bold">
						Project Handling and Management
					</h3>
					<p className="text-black/85 dark:text-white/85">
						We specialize in end-to-end project handling, from
						planning and coordination to execution and delivery. Our
						team ensures timely completion, efficient resource
						management, and adherence to quality standards, keeping
						your projects on track and within budget.
					</p>
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
							src="/project-management.jpg"
							layout="fill"
							objectFit="cover"
							alt="Image of teamwork"
						/>
					</CarouselItem>
				</CarouselContent>
			</Carousel>
		</div>
	);
};

export default Management;
