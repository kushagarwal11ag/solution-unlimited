import Image from "next/image";
import { Button } from "@/components/ui/button";

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
			<div className="relative overflow-hidden h-64 order-1 lg:order-2">
				<Image
					src="/plumbing.jpg"
					layout="fill"
					objectFit="cover"
					alt="Plumbing Services"
					className="rounded-xl"
				/>
			</div>
		</div>
	);
};

export default Plumbing;
