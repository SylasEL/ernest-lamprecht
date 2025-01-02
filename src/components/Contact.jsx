/**
 * @copyright 2024 Ernest Lamprecht
 * @license Apache-2.0
 */

const socialLinks = [
	// GitHub here
	{
		href: 'https://www.linkedin.com/in/ernest-lamprecht-169269328',
		icon: (
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M5.75 3C4.24011 3 3 4.24011 3 5.75V18.25C3 19.7599 4.24011 21 5.75 21H18.25C19.7599 21 21 19.7599 21 18.25V5.75C21 4.24011 19.7599 3 18.25 3H5.75ZM5.75 4.5H18.25C18.9491 4.5 19.5 5.05089 19.5 5.75V18.25C19.5 18.9491 18.9491 19.5 18.25 19.5H5.75C5.05089 19.5 4.5 18.9491 4.5 18.25V5.75C4.5 5.05089 5.05089 4.5 5.75 4.5ZM7.75 6.5C7.41848 6.5 7.10054 6.6317 6.86612 6.86612C6.6317 7.10054 6.5 7.41848 6.5 7.75C6.5 8.08152 6.6317 8.39946 6.86612 8.63388C7.10054 8.8683 7.41848 9 7.75 9C8.08152 9 8.39946 8.8683 8.63388 8.63388C8.8683 8.39946 9 8.08152 9 7.75C9 7.41848 8.8683 7.10054 8.63388 6.86612C8.39946 6.6317 8.08152 6.5 7.75 6.5ZM7 10C6.7235 10 6.5 10.2235 6.5 10.5V17C6.5 17.2765 6.7235 17.5 7 17.5H8.5C8.7765 17.5 9 17.2765 9 17V10.5C9 10.2235 8.7765 10 8.5 10H7ZM10.5 10C10.2235 10 10 10.2235 10 10.5V17C10 17.2765 10.2235 17.5 10.5 17.5H12C12.2765 17.5 12.5 17.2765 12.5 17V13.25C12.5 12.5605 13.0605 12 13.75 12C14.4395 12 15 12.5605 15 13.25V17C15 17.2765 15.2235 17.5 15.5 17.5H17C17.2765 17.5 17.5 17.2765 17.5 17V13C17.5 11.3455 16.1545 10 14.5 10C13.731 10 13.0315 10.293 12.5 10.7705V10.5C12.5 10.2235 12.2765 10 12 10H10.5Z"
					fill="currentColor"
				/>
			</svg>
		),
		alt: 'LinkedIn',
	},
	// {
	//   href: 'https://www.instagram.com/codewithsadee',
	//   icon: <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
	//     <path d="M8.75 2.5C5.58319 2.5 3 5.08319 3 8.25V15.75C3 18.9164 5.5831 21.5 8.75 21.5H16.25C19.4165 21.5 22 18.9165 22 15.75V8.25C22 5.0831 19.4164 2.5 16.25 2.5H8.75ZM8.75 4H16.25C18.6056 4 20.5 5.8939 20.5 8.25V15.75C20.5 18.1055 18.6055 20 16.25 20H8.75C6.3939 20 4.5 18.1056 4.5 15.75V8.25C4.5 5.89381 6.39381 4 8.75 4ZM17.5 6C16.9475 6 16.5 6.4475 16.5 7C16.5 7.5525 16.9475 8 17.5 8C18.0525 8 18.5 7.5525 18.5 7C18.5 6.4475 18.0525 6 17.5 6ZM12.5 7C9.74759 7 7.5 9.24759 7.5 12C7.5 14.7524 9.74759 17 12.5 17C15.2524 17 17.5 14.7524 17.5 12C17.5 9.24759 15.2524 7 12.5 7ZM12.5 8.5C14.4416 8.5 16 10.0584 16 12C16 13.9416 14.4416 15.5 12.5 15.5C10.5584 15.5 9 13.9416 9 12C9 10.0584 10.5584 8.5 12.5 8.5Z" fill="currentColor" />
	//   </svg>,
	//   alt: 'Instagram'
	// },
];

/**
 * @description A component to display the contact form and social links
 * @returns {JSX.Element} A section with a headline, a paragraph, a grid of social links, and a form
 * @example
 * <Contact />
 */
const Contact = () => {
	return (
		<section id="contact" className="section">
			<div className="container lg:grid lg:grid-cols-2 lg:items-stretch">
				<div className="mb-12 lg:mb-0 lg:flex lg:flex-col">
					<h2 className="headline-2 lg:max-w-[16ch] reveal-up">
						Contact me for collaboration
					</h2>
					<p className="text-zinc-400 mt-3 mb-8 max-w-[60ch] lg:max-w-[40ch] reveal-up">
						Reach out today to discuss your project needs and start
						collaborating on something amazing!
					</p>
					<div className="flex items-center gap-3 lg:gap-4 mt-auto mb-8">
						{socialLinks.map(({ href, icon }, key) => (
							<a
								key={key}
								href={href}
								target="_blank"
								className="w-14 h-14 grid place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg transition-[background-color,color] hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80 reveal-up"
							>
								{icon}
							</a>
						))}
					</div>
					<form
						action="https://getform.io/f/bxoognja"
						method="POST"
						className="xl:pl-14 2xl:pl-24"
					>
						<div className="md:grid md:items-center md:grid-cols-2 md:gap-3">
							<div className="mb-5">
								<label
									htmlFor="name"
									className="label reveal-up"
								>
									Name
								</label>
								<input
									type="text"
									name="name"
									id="name"
									autoComplete="name"
									required
									placeholder="Ernest"
									className="text-field"
								/>
							</div>
							<div className="mb-5">
								<label htmlFor="email" className="label">
									Email
								</label>
								<input
									type="email"
									name="email"
									id="email"
									autoComplete="email"
									required
									placeholder="ernest@example.com"
									className="text-field reveal-up"
								/>
							</div>
						</div>
						<div className="mb-5">
							<label
								className="label reveal-up"
								htmlFor="message"
							>
								Message
							</label>
							<textarea
								name="message"
								id="message"
								placeholder="Write message here"
								required
								className="text-field resize-y min-h-40 max-h-96 reveal-up"
							></textarea>
						</div>
						<button
							type="submit"
							className="btn btn-primary [&]:max-w-full w-full justify-center mb-8 reveal-up"
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;

