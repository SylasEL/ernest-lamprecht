/**
 * @copyright 2024 Ernest Lamprecht
 * @license Apache-2.0
*/

import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

/**
 * A responsive navbar component.
 * 
 * This component takes a boolean prop, {@code navOpen}, which determines
 * whether the navbar is displayed or not. When {@code navOpen} is true, the
 * navbar is active and visible. When it is false, the navbar is inactive and
 * not visible.
 * 
 * The navbar contains a list of links, each with a label and a href. The
 * currently active link is highlighted by the {@code active} class. The
 * component also contains a "active box" which is a box that is positioned
 * and sized to match the currently active link.
 * 
 * The component listens for the {@code resize} event and updates the active
 * box whenever the window size changes.
 * 
 * @param {boolean} navOpen - Determines whether the navbar is displayed or not
 * @returns {JSX.Element} A responsive navbar component
 */
const Navbar = ( { navOpen }) => {
    const lastActiveLink = useRef();
    const activeBox = useRef();

    /**
     * Initializes the active box by setting its position and dimensions
     * to match the first link in the navbar.
     * @returns {void}
     */
    const initActiveBox = () => {
        // console.log(lastActiveLink.current)
        // console.log(activeBox.current)

        activeBox.current.style.top = lastActiveLink.current.
        offsetTop + "px";
        activeBox.current.style.left = lastActiveLink.current.
        offsetLeft + "px";
        activeBox.current.style.width = lastActiveLink.current.
        offsetWidth + "px";
        activeBox.current.style.height = lastActiveLink.current.
        offsetHeight + "px";
    }

    useEffect(initActiveBox, []);
    // Making sure that the menu updates as the window size change
    window.addEventListener("resize", initActiveBox);
    
    /**
     * Sets the currently active link and updates the active box.
     * @param {React.MouseEvent<HTMLAnchorElement>} event - Click event
     * @returns {void}
     */
    const activeCurrentLink = (event) => {
        lastActiveLink.current?.classList.remove("active");
        event.target.classList.add("active");
        lastActiveLink.current = event.target;

        activeBox.current.style.top = event.target.
        offsetTop + "px";
        activeBox.current.style.left = event.target.
        offsetLeft + "px";
        activeBox.current.style.width = event.target.
        offsetWidth + "px";
        activeBox.current.style.height = event.target.
        offsetHeight + "px";
    }

    // Nav items
    const navItems = [
        {
          label: 'Home',
          link: '#home',
          className: 'nav-link active',
          ref: lastActiveLink
        },
        {
          label: 'About',
          link: '#about',
          className: 'nav-link'
        },
        {
          label: 'Experience',
          link: '#exp',
          className: 'nav-link'
        },
        // {
        //   label: 'Reviews',
        //   link: '#reviews',
        //   className: 'nav-link'
        // },
        {
          label: 'Contact',
          link: '#contact',
          className: 'nav-link md:hidden'
        }
      ];
    return (
        <nav className={"navbar " + (navOpen ? "active" : "")}>
            {
                navItems.map(({ label, link, className, ref }, key) => (
                    <a 
                        href={link} 
                        key={key} 
                        ref={ref}
                        className={className}
                        onClick={activeCurrentLink}
                    >
                        {label}
                    </a>
                ))
            }
            <div 
                className="active-box"
                ref={activeBox}
            >
                
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    navOpen: PropTypes.bool.isRequired
}

export default Navbar
