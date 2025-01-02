/**
 * @copyright 2024 Ernest Lamprecht
 * @license Apache-2.0
*/

import React from "react";

/**
 * A wizardly introduction to Ernest Lamprecht, a software engineering
 * apprentice from Stellenbosch University, showcasing his coding skills
 * and passion for web development.
 *
 * @returns {JSX.Element} A React component containing a brief
 * autobiographical text and a logo.
 */
const About = () => {
    return (
        <section
            id="about"
            className="section"
        >
            <div
                className="container"
            >
                <div className="bg-zinc-800/50 p-7 rounded-2xl
                md:p-10 reveal-up">
                    <p className="text-zinc-300 mb-2 md:mb-2
                    md:text-xl">
                        Hail and well met, traveler! I am Ernest, a fledgling wizard in the arcane arts of software engineering, freshly initiated from the venerable halls of Stellenbosch University. With my enchanted keyboard and a spellbook of programming languages, I traverse the realms of digital creation, weaving spells of JavaScript and conjuring responsive designs that transcend the ordinary. Each project is a saga, every line of code a rune inscribed with purpose, striving to shape the fabric of the digital multiverse into realms of wonder and possibility. Though I stand at the dawn of my journey, my ambition burns brighter than a phoenix’s flame, ready to carve my legend into the stars of the digital cosmos.
                    </p>

                    <div className="flex justify-between items-center">
                        <img
                            src="/images/logo-4.svg"
                            alt="Ernest's Emblem"
                            width={40}
                            height={40}
                            className="ml-auto md:w-[50px] md:h-[50px]"
                        />

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
