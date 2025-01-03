/**
 * @copyright 2024 Ernest Lamprecht
 * @license Apache-2.0
 */

import React from 'react';
import Navbar from "./Navbar";
import { useState } from "react";

/**
 * @description Header component with a mystical theme, containing the logo and a menu of links.
 * @returns {JSX.Element} A fixed header with a logo, a menu button, and a "Contact Me" button.
 * @example
 * <Header />
 */
const Header = () => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-midnight-black to-nightshade-transparent">
            <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:frid md:grid-cols-[1fr,3fr,1fr]">
                <h1 className="text-2xl font-bold">
                    <a href="/" className="logo">
                        <img
                            src="/images/logo-4.svg"
                            width={40}
                            height={40}
                            alt="Ernest Lamprecht - Herald of the Digital Realms"
                        />
                    </a>
                </h1>

                {/* Menu button */}
                <div className="relative md:justify-self-center">
                    <button
                        className="menu-btn md:hidden"
                        onClick={() => setNavOpen((prev) => !prev)}
                        aria-label={navOpen ? "Close Mystic Gateway" : "Open Mystic Gateway"}
                    >
                        <span className="material-symbols-rounded">
                            {navOpen ? "close" : "menu"}
                        </span>
                    </button>
                    <Navbar navOpen={navOpen} />
                </div>

                {/* Contact Me */}
                <a
                    href="#contact"
                    className="btn btn-secondary max-md:hidden md:justify-self-end"
                >
                    Contact Me
                </a>
            </div>
        </header>
    );
};

export default Header;
