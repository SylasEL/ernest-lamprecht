/**
 * @copyright 2024 Ernest Lamprecht
 * @license Apache-2.0
 */

import React from "react";
import Tools from "./Tools";
import { useTheme } from "./../Theme";

// Array of skills with both normal and special descriptions
const skillItems = [
  {
    iconScroll: "/images/figma.svg",
    label: "Figma",
    normalEssence: "A collaborative design tool for wireframes and prototypes.",
    specialEssence: "Crystalline Realm of Visual Conjuring",
  },
  {
    iconScroll: "/images/postgresql.svg",
    label: "PostgreSQL",
    normalEssence: "A powerful open-source relational database system.",
    specialEssence: "Abyssal Vault of Infinite Memory",
  },
  {
    iconScroll: "/images/css3.svg",
    label: "CSS",
    normalEssence: "A language for styling web pages with layout and design.",
    specialEssence: "Tidal Enchantment of Interface Shaping",
  },
  {
    iconScroll: "/images/javascript.svg",
    label: "JavaScript",
    normalEssence: "A versatile programming language for interactive websites.",
    specialEssence: "Whirlpool of Dynamic Transformation",
  },
  {
    iconScroll: "/images/nodejs.svg",
    label: "NodeJS",
    normalEssence: "A runtime for building server-side JavaScript applications.",
    specialEssence: "Oceanic Web Summoning Chamber",
  },
  {
    iconScroll: "/images/expressjs.svg",
    label: "ExpressJS",
    normalEssence: "A web application framework for Node.js.",
    specialEssence: "Swift Currents of Digital Realm",
  },
  {
    iconScroll: "/images/python.svg",
    label: "Python",
    normalEssence: "A versatile programming language known for its readability.",
    specialEssence: "Serpentine Wisdom of Deep Waters",
  },
  {
    iconScroll: "/images/react.svg",
    label: "React",
    normalEssence: "A JavaScript library for building user interfaces.",
    specialEssence: "Celestial Wave of Interface Weaving",
  },
  {
    iconScroll: "/images/typescript.svg",
    label: "TypeScript",
    normalEssence: "A strongly typed superset of JavaScript.",
    specialEssence: "Runic Tide of Structured Sorcery",
  },
  {
    iconScroll: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    normalEssence: "A utility-first CSS framework for rapid UI development.",
    specialEssence: "Mystical Maelstrom of Visual Harmony",
  },
];

// Toggle Header for the skill section
const SkillHeader = {
  normal: "Technical Skills",
  special: "Magical Tools of Crafting",
};

// Toggle Paragraph for the skill section
const SkillParagraph = {
  normal: "Explore my technical proficiencies and the tools I use to build and design modern applications.",
  special: "Behold the mystical artifacts with which I summon digital realms, weaving spells of code that ripple through the cosmic web of technology!",
};

/**
 * Skill component to showcase technical proficiencies with a toggleable theme.
 *
 * @returns {JSX.Element} A styled section presenting tools and their descriptions.
 */
const Skill = () => {
  const { isSpecialMode } = useTheme();

  return (
    <section className="section" id="skills">
      <div className="container">
        {/* Section Heading */}
        <h2 className="headline-2 reveal-up">
          {isSpecialMode ? SkillHeader.special : SkillHeader.normal}
        </h2>
        <p className="text-cyan-200/70 mt-3 mb-8 max-w-[50ch] reveal-up">
          {isSpecialMode ? SkillParagraph.special : SkillParagraph.normal}
        </p>

        {/* Skills Grid */}
        <div className="grid gap-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {skillItems.map(
            ({ iconScroll, label, normalEssence, specialEssence }, index) => (
              <Tools
                key={index}
                iconScroll={iconScroll}
                label={label}
                normalEssence={normalEssence}
                specialEssence={specialEssence}
                classes="reveal-up"
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Skill;

