/**
 * @copyright 2024 Ernest Lamprecht
 * @license Apache-2.0
 */
import React from "react";

// Get Primary Button
import { ButtonPrimary, ButtonOutline } from "./Button";

/**
 * @description Hero component for the homepage
 * @returns {JSX.Element} A section presenting the user with a call to action
 * @example
 * <Hero />
 */
const Hero = () => {

	const handleDownloadCV = () => {
		console.log("Download CV");
		const path = "/images/ErnestLamprecht_CV.pdf";
		const link = document.createElement("a");
		link.href = path;
		link.download = "ErnestLamprecht_CV.pdf";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link)
	};

	return (
		<section
			id="home"
			className="pt-28 lg:pt-36"
		>
			<div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
				<div>
					<div className="flex items-center gap-3">
						<figure className="img-box w-9 h-9 rounded-lg">
							<img
								src="/images/avatar - 1.png"
								width={40}
								height={40}
								alt="Ernest - Keeper of the Digital Realms"
								className="img-cover"
							/>
						</figure>

						<div className="flex items-center gap-1.5
                        text-zinc-400 text-sm tracking-wide">
							<span className="relative w-2 h-2 rounded-full bg-emerald-400">
								<span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
							</span>
							Available for Quests
						</div>
					</div>

					<h2 className="headline-1 max-w-[15ch] 
                    sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
						Forging Scalable, Modern Websites for a Boundless Future
					</h2>

					<div className="flex items-center gap-3">
						<ButtonPrimary 
                            label="Download CV"
                            icon="download"
							onClick={handleDownloadCV}
                        />

						<ButtonOutline 
                            href="#about"
                            label="Venture Below" 
                            icon="arrow_downward"   
                        />
					</div>
				</div>

                {/* Profile Picture */}
                <div className="hidden lg:block">
                    <figure className="w-full max-w-[480px] ml-auto
                    bg-gradient-to-t from-sky-400 via-25% via-sky-400/40
                    to-65% rounded-[60px] overflow-hidden">
                        <img 
                            src="/images/hero-banner.png"
                            height={800}
                            width={656}
                            alt="Ernest - Architect of Digital Wonders"
                            className="w-full"
                        />
                    </figure>
                </div>
			</div>
		</section>
	);
};

export default Hero;
