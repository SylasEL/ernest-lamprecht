/**
 * @copyright 2024 Ernest Lamprecht
 * @license Apache-2.0
 */

import React from "react";
import Tools from "./Tools";

// Array of skills with magical descriptions
const skillItems = [
  {
    iconScroll: "/images/figma.svg",
    label: "Figma",
    essence: "Crystalline Realm of Visual Conjuring",
  },
  {
    iconScroll: "/images/postgresql.svg",
    label: "PostgreSQL",
    essence: "Abyssal Vault of Infinite Memory",
  },
  {
    iconScroll: "/images/css3.svg",
    label: "CSS",
    essence: "Tidal Enchantment of Interface Shaping",
  },
  {
    iconScroll: "/images/javascript.svg",
    label: "JavaScript",
    essence: "Whirlpool of Dynamic Transformation",
  },
  {
    iconScroll: "/images/nodejs.svg",
    label: "NodeJS",
    essence: "Oceanic Web Summoning Chamber",
  },
  {
    iconScroll: "/images/expressjs.svg",
    label: "ExpressJS",
    essence: "Swift Currents of Digital Realm",
  },
  {
    iconScroll: "/images/python.svg",
    label: "Python",
    essence: "Serpentine Wisdom of Deep Waters",
  },
  {
    iconScroll: "/images/react.svg",
    label: "React",
    essence: "Celestial Wave of Interface Weaving",
  },
  {
    iconScroll: "/images/typescript.svg",
    label: "TypeScript",
    essence: "Runic Tide of Structured Sorcery",
  },
  {
    iconScroll: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    essence: "Mystical Maelstrom of Visual Harmony",
  },
];

/**
 * @description Skill component to showcase technical proficiencies with a mystical theme.
 * @returns {JSX.Element} A styled section presenting tools and their magical essences.
 */
const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        {/* Section Heading */}
        <h2 className="headline-2 reveal-up">Magical Tools of Crafting</h2>
        <p className="text-cyan-200/70 mt-3 mb-8 max-w-[50ch] reveal-up">
          Behold the mystical artifacts with which I summon digital realms, 
          weaving spells of code that ripple through the cosmic web of technology!
        </p>

        {/* Skills Grid */}
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItems.map(({ iconScroll, label, essence }, index) => (
            <Tools
              key={index}
              iconScroll={iconScroll}
              label={label}
              essence={essence}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
