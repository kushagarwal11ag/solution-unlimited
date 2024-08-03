const contact = () => {
	return (
		<section
			id="contact"
			className="w-full py-12 md:py-24 lg:py-32 dark:bg-black"
		>
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<div className="inline-block rounded-lg px-3 py-1 text-sm">
							Contact Us
						</div>
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
							Get in Touch
						</h2>
						<p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							Have a project in mind or need help with your
							business? Fill out the form below and one of our
							experts will be in touch.
						</p>
					</div>
				</div>
				<div className="mx-auto w-full max-w-2xl space-y-4 py-12">
					<form>
						<div className="grid gap-4">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div className="space-y-2 flex flex-col gap-2">
									<label htmlFor="name">Name</label>
									<input
										id="name"
										className="py-1 px-2 rounded border"
										placeholder="John Doe"
										required
									/>
								</div>
								<div className="space-y-2 flex flex-col gap-2">
									<label htmlFor="email">Email</label>
									<input
										id="email"
										type="email"
										className="py-1 px-2 rounded border"
										placeholder="john@example.com"
										required
									/>
								</div>
							</div>
							<div className="space-y-2 flex flex-col gap-2">
								<label htmlFor="message">Message</label>
								<textarea
									id="message"
									rows={5}
									className="py-1 px-2 rounded border"
									placeholder="How can we help you?"
									required
								/>
							</div>
							<button
								type="submit"
								className="p-2 w-full rounded"
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default contact;
