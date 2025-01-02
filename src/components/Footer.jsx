/**
 * @copyright 2024 Ernest Lamprecht
 * @license Apache-2.0
 */
import React from "react";
import { ButtonPrimary } from "./Button";

const map = [
	{ label: "Home", href: "#home" },
	{ label: "About", href: "#about" },
	{ label: "Work", href: "#work" },
	// { label: "Reviews", href: "#reviews" },
	{ label: "Contact Me", href: "#contact" },
];

const socials = [
    // Add github later
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/ernest-lamprecht-169269328",
	},
];

/**
 * @description A component to display a footer
 * @returns {JSX.Element} A footer with a headline, a call-to-action, a map of portfolio and social links
 */
const Footer = () => {
	return (
		<footer className="section bg-zinc-900 min-h-[calc(80vh-80px)] text-zinc-300">
			<div className="container">
				<div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-10">
					{/* Call to Action */}
					<div className="mb-8 lg:mb-0">
						<h2 className="headline-1 mb-6 lg:max-w-[12ch] reveal-up">
							Let’s work together today!
						</h2>
						<ButtonPrimary
							href="mailto:ernestlamprecht1010@gmail.com"
							label="Start Project"
							icon="chevron_right"
							classes="reveal-up"
						/>
					</div>

					{/* Links Section */}
					<div className="grid grid-cols-2 gap-6 lg:gap-10">
						{/* Portfolio Map */}
						<div>
							<p className="mb-3 reveal-up">Map</p>
							<ul>
								{map.map(({ label, href }, key) => (
									<li key={key}>
										<a
											href={href}
											className="block text-sm py-1 text-zinc-400 transition-colors hover:text-zinc-200"
										>
											{label}
										</a>
									</li>
								))}
							</ul>
						</div>

						{/* Social Links */}
						<div>
							<p className="mb-3 reveal-up">Socials</p>
							<ul>
								{socials.map(({ label, href }, key) => (
									<li key={key}>
										<a
											href={href}
											target="_blank"
											rel="noopener noreferrer"
											className="block text-sm py-1 text-zinc-400 transition-colors hover:text-zinc-200 reveal-up"
										>
											{label}
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>

				{/* Footer Bottom */}
				<div className="flex flex-col items-center justify-center gap-4 pt-10 mt-12 border-t border-zinc-700">
					{/* Logo */}
					<a className="logo reveal-up lg:mb-0.2">
						<img
							src="/images/logo-4.svg"
							width={60}
							height={60}
							alt="Logo"
							className="transition-transform hover:scale-110"
						/>
					</a>

					{/* Rights Reserved Text */}
					<p className="text-sm text-zinc-400 reveal-up">
						&copy; 2024 <span className="text-zinc-200">Ernest Lamprecht</span>.
						All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;


