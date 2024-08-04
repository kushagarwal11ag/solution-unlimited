"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
	name: z.string().min(3).max(20),
	email: z.string().email(),
	message: z.string().min(10).max(500),
});

const Contact = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
	});
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		console.log(values);
	}
	return (
		<section id="contact" className="pb-20 dark:bg-black container px-4 md:px-6">
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
						Fill out the form below and one of our experts will be
						in touch.
					</p>
				</div>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-8 dark:bg-black"
					>
						<div className="flex gap-2">
							<div className="w-full">
								<FormField
									control={form.control}
									name="name"
									render={({ field }) => (
										<FormItem>
											<FormLabel
												className={
													form.formState.errors.email
														? "dark:text-red-500"
														: ""
												}
											>
												Name
											</FormLabel>
											<FormControl>
												<Input
													placeholder="John Doe"
													{...field}
												/>
											</FormControl>
											<FormMessage
												className={
													form.formState.errors.email
														? "dark:text-red-500"
														: ""
												}
											/>
										</FormItem>
									)}
								/>
							</div>
							<div className="w-full">
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel
												className={
													form.formState.errors.email
														? "dark:text-red-500"
														: ""
												}
											>
												Email
											</FormLabel>
											<FormControl>
												<Input
													placeholder="john@example.com"
													{...field}
												/>
											</FormControl>
											<FormMessage
												className={
													form.formState.errors.email
														? "dark:text-red-500"
														: ""
												}
											/>
										</FormItem>
									)}
								/>
							</div>
						</div>
						<FormField
							control={form.control}
							name="message"
							render={({ field }) => (
								<FormItem>
									<FormLabel
										className={
											form.formState.errors.email
												? "dark:text-red-500"
												: ""
										}
									>
										Message
									</FormLabel>
									<FormControl>
										<Input
											placeholder="I want to"
											{...field}
										/>
									</FormControl>
									<FormMessage
										className={
											form.formState.errors.email
												? "dark:text-red-500"
												: ""
										}
									/>
								</FormItem>
							)}
						/>
						<Button
							type="submit"
							variant="default"
						>
							Submit
						</Button>
					</form>
				</Form>
			</div>
		</section>
	);
};

export default Contact;
