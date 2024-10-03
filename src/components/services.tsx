import Fabrication from "./services/fabrication";
import Electric from "./services/electric";
import Plumbing from "./services/plumbing";
import Recycle from "./services/recycle";
import Management from "./services/management";

const services = () => {
	return (
		<section id="services" className="dark:bg-black px-4 md:px-6">
			<div className="flex flex-col items-center justify-center gap-16">
				<div className="flex flex-col gap-2 text-center">
					<div className="inline-block rounded-lg text-sm text-black/75 dark:text-white/75">
						Our Services
					</div>
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
						Tailored Solutions for Your Business
					</h2>
					<p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-justify">
						Our services include electrical and civil repairs,
						maintenance, new installations, and PEB shed
						fabrication. We also provide electrical inspections and
						testing to ensure your infrastructure meets all
						standards. With 24/7 emergency services, we minimize
						downtime and keep your operations running smoothly. Our
						skilled team delivers high-quality work tailored to your
						specific needs, eliminating the hassle of coordinating
						with multiple vendors.
					</p>
				</div>
				<Fabrication />
				<Electric />
				<Plumbing />
				<Recycle />
				<Management />
			</div>
		</section>
	);
};

export default services;
