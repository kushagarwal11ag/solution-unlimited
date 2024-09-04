"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Contact = () => {
	return (
		<section
			id="contact"
			className="pb-20 dark:bg-black container px-4 md:px-6"
		>
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center text-center">
					<div className="inline-block rounded-lg px-3 py-1 text-sm">
						Contact Us
					</div>
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
						Get in Touch
					</h2>
					<p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
						Have a project in mind or need help with your business?
					</p>
				</div>
				<section className="mx-auto w-fit pt-4 flex flex-col gap-10 sm:flex-row">
					<div>
						<p>Manoj Kumar</p>
						<Link
							href="tel:+919512063666"
							className="flex items-center gap-2 w-fit"
						>
							<i className="fa-solid fa-phone"></i>+91 95120 63666
						</Link>
						<Link
							href="mailto:solutionunlimited1991@gmail.com"
							className="flex items-center gap-2 w-fit"
						>
							<i className="fa-solid fa-envelope"></i>
							<span className="text-xs xs:text-base">solutionunlimited1991@gmail.com</span>
						</Link>
					</div>
					<div>
						<p>Mukesh Vaghela</p>
						<Link
							href="tel:+919723025633"
							className="flex items-center gap-2 w-fit"
						>
							<i className="fa-solid fa-phone"></i>+91 97230 25633
						</Link>
						<Link
							href="mailto:solutionunlimited1991@gmail.com"
							className="flex items-center gap-2 w-fit"
						>
							<i className="fa-solid fa-envelope"></i>
							<span className="text-xs xs:text-base">solutionunlimited1991@gmail.com</span>
						</Link>
					</div>
				</section>
			</div>
		</section>
	);
};

export default Contact;
