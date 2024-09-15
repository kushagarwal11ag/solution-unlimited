"use client";
import { useState } from "react";
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

const Electric = () => {
	const [expanded, setExpanded] = useState(false);

	const toggleReadMore = () => {
		setExpanded(!expanded);
	};

	return (
		<div className="grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
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
							src="/electric.jpg"
							layout="fill"
							objectFit="cover"
							alt="Working on electrical switch board"
						/>
					</CarouselItem>
					<CarouselItem className="relative h-64">
						<Image
							src="/electric-2.jpg"
							layout="fill"
							objectFit="cover"
							alt="Man working on switch board"
						/>
					</CarouselItem>
					<CarouselItem className="relative h-64">
						<Image
							src="/electric-3.jpg"
							layout="fill"
							objectFit="cover"
							alt="Working on electric board illustration"
						/>
					</CarouselItem>
					<CarouselItem className="relative h-64">
						<Image
							src="/electric-4.jpg"
							layout="fill"
							objectFit="cover"
							alt="Working on electric board illustration"
						/>
					</CarouselItem>
				</CarouselContent>
			</Carousel>
			<div className="flex flex-col justify-center order-2">
				<div className="grid gap-2">
					<h3 className="text-xl font-bold">Electrical Services</h3>

					<div
						className={`gutter overflow-hidden ${
							expanded ? "overflow-y-auto" : ""
						} transition-all duration-500 text-black/85 dark:text-white/85 max-h-24`}
					>
						<p>
							We provide end-to-end electrical services, including
							installations, upgrades, repairs, and maintenance.
							Our team ensures efficient, safe, and minimally
							disruptive electrical systems tailored to your
							needs.
						</p>
						<ul
							className={`${
								expanded ? "block" : "hidden"
							} p-4 list-disc list-inside`}
						>
							<div className="flex">
								<li></li>
								Residential and Commercial Wiring
							</div>
							<div className="flex">
								<li></li>
								Industrial Electrical Services
							</div>
							<div className="flex">
								<li></li>
								New Installations and Upgrades
							</div>
							<div className="flex">
								<li></li>
								Electromechanical Installation and Maintenance
							</div>
							<div className="flex">
								<li></li>
								Industrial Automation Solutions
							</div>
							<div className="flex">
								<li></li>
								Electrical and Mechanical machine Installation
								and Maintenance
							</div>
							<div className="flex">
								<li></li>
								Electrical Inspections and testing
							</div>
						</ul>
					</div>

					<Button variant="default" onClick={toggleReadMore}>
						{expanded ? "Read less" : "Read more"}
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Electric;
