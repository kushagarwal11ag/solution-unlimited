import Image from "next/image";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Recycle = () => {
	return (
		<div className="w-full grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <Carousel
				className="overflow-hidden order-1 rounded-xl"
				plugins={[
					Autoplay({
						delay: 3000,
					}),
				]}
			>
				<CarouselContent>
					<CarouselItem className="relative h-64">
						<Image
							src="/recycle.jpg"
							layout="fill"
							objectFit="cover"
							alt="Recycling symbol"
						/>
					</CarouselItem>
					<CarouselItem className="relative h-64">
						<Image
							src="/scapyard.jpg"
							layout="fill"
							objectFit="cover"
							alt="Image of a scapyard"
						/>
					</CarouselItem>
				</CarouselContent>
			</Carousel>
			<div className="flex flex-col justify-center order-2">
				<div className="grid gap-2">
					<h3 className="text-xl font-bold">
						Scrap Management and Recycling
					</h3>
					<p className="text-black/85 dark:text-white/85">
						We offer comprehensive scrap management services,
						handling the collection, sorting, and recycling of
						various materials. Our efficient process ensures safe
						disposal and maximum recovery of reusable resources,
						helping you reduce waste and contribute to a sustainable
						environment.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Recycle;
