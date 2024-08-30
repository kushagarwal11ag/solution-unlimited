"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Electric = () => {
	const [expanded, setExpanded] = useState(false);

	const toggleReadMore = () => {
		setExpanded(!expanded);
	};

	return (
		<div className="grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
			<div className="relative overflow-hidden h-64 order-1 lg:order-1">
				<Image
					src="/electric.jpg"
					layout="fill"
					objectFit="cover"
					alt="Electrical Services"
					className="rounded-xl"
				/>
			</div>
			<div className="flex flex-col justify-center order-2 lg:order-2">
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
							} list-disc list-inside`}
						>
							<li> Residential and Commercial Wiring</li>
							<li> Industrial Electrical Services</li>

							<li> New Installations and Upgrades </li>
							<li>
								Electromechanical Installation and Maintenance
							</li>
							<li> Industrial Automation Solutions</li>
							<li>
								Electrical and Mechanical machine Installation
								and Maintenance
							</li>
							<li> Electrical Inspections and testing</li>
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
