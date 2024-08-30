"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Fabrication = () => {
	const [expanded, setExpanded] = useState(false);

	const toggleReadMore = () => {
		setExpanded(!expanded);
	};

	return (
		<div className="grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
			<div className="flex flex-col justify-center order-2 lg:order-1">
				<div className="grid gap-2">
					<h3 className="text-xl font-bold">
						Design and PEB Fabrication
					</h3>

					<div
						className={`gutter overflow-hidden ${
							expanded ? "overflow-y-auto" : ""
						} transition-all duration-500 text-black/85 dark:text-white/85 max-h-24`}
					>
						<p>
							We offer design, fabrication, installation,
							upgrades, repairs, and maintenance of Pre-Engineered
							Building (PEB) structures. Our durable, compliant
							solutions extend the lifespan and functionality of
							your buildings.
						</p>
						<ul
							className={`${
								expanded ? "block" : "hidden"
							} list-disc list-inside`}
						>
							<li>Steel Building Solutions</li>
							<li>
								Industrial and Commercial Building Construction
							</li>
							<li>Roofing and Cladding Solutions</li>
							<li>Structural Steel Fabrication</li>
							<li>Pre-Engineered Building Systems</li>
						</ul>
					</div>

					<Button variant="default" onClick={toggleReadMore}>
						{expanded ? "Read less" : "Read more"}
					</Button>
				</div>
			</div>
			<div className="relative overflow-hidden h-64 order-1 lg:order-2">
				<Image
					src="/fabrication.jpg"
					layout="fill"
					objectFit="cover"
					alt="PEB Fabrication"
					className="rounded-xl"
				/>
			</div>
		</div>
	);
};

export default Fabrication;
