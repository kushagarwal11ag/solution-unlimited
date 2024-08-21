import Image from "next/image";
import Link from "next/link";

const home = () => {
	return (
		<section
			id="home"
			className="py-10 lg:py-0 min-h-screen flex items-center dark:bg-black"
		>
			<div className="container p-4 md:px-6">
				<div className="grid gap-6 grid-cols-1 lg:grid-cols-2 lg:gap-12">
					<div className="flex flex-col gap-5">
						<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
							Trusted Solutions for Your Business
						</h1>
						<p className="md:text-xl">
							Welcome to Solution Unlimited, your premier choice
							for comprehensive commercial and industrial
							services. Founded by Manoj Kumar and Mukesh Vaghela,
							we specialize in electrical, civil, and fabrication
							work, offering seamless, end-to-end solutions.
						</p>
						<Link
							href="#services"
							className="w-fit inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 h-10 px-4 py-2 bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90"
						>
							Learn More
						</Link>
					</div>
					<div className="relative overflow-hidden h-80">
						<Image
							src="/hero.jpg"
							layout="fill"
							objectFit="cover"
							alt="Hero"
							className="rounded-xl"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default home;
