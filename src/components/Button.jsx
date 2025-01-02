/**
 * @copyright 2024 Ernest Lamprecht
 * @license Apache-2.0
*/
import React from "react";
import PropTypes from "prop-types";

/**
 * Renders a primary button that can either be an anchor link or a button element.
 *
 * @param {string} href - The URL that the link points to. If provided, renders an anchor element.
 * @param {string} [target="_self"] - Specifies where to open the linked document. Defaults to "_self".
 * @param {string} label - The text to display on the button.
 * @param {string} icon - The name of the icon to display alongside the label.
 * @param {string} classes - Additional CSS classes to apply to the button.
 * @returns {JSX.Element} A JSX element representing the primary button.
 */

const ButtonPrimary = ({
    href,
    target = "_self",
    label,
    icon,
    classes,
    onClick
}) => {
    if (href) {
        return (
            <a
                href={href}
                target={target}
                className={"btn btn-primary " + classes}
            >
                {label}
                {icon ?
                    <span className="material-symbols-rounded"
                    aria-hidden="true">
                        {icon}
                    </span>
                    : undefined
                }
            </a>
        )
    } else {
        return (
            <button className={"btn btn-primary " + classes} onClick={onClick}>
                {label}
                {icon ?
                    <span className="material-symbols-rounded"
                    aria-hidden="true">
                        {icon}
                    </span>
                    : undefined
                }
            </button>
        )
    }
}

ButtonPrimary.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}

/**
 * Renders an outline button that can either be an anchor link or a button element.
 *
 * @param {string} href - The URL that the link points to. If provided, renders an anchor element.
 * @param {string} [target="_self"] - Specifies where to open the linked document. Defaults to "_self".
 * @param {string} label - The text to display on the button.
 * @param {string} icon - The name of the icon to display alongside the label.
 * @param {string} classes - Additional CSS classes to apply to the button.
 * @returns {JSX.Element} A JSX element representing the outline button.
 */
const ButtonOutline = ({
    href,
    target = "_self",
    label,
    icon,
    classes
}) => {
    if (href) {
        return (
            <a
                href={href}
                target={target}
                className={"btn btn-outline " + classes}
            >
                {label}
                {icon ?
                    <span className="material-symbols-rounded"
                    aria-hidden="true">
                        {icon}
                    </span>
                    : undefined
                }
            </a>
        )
    } else {
        return (
            <button className={"btn btn-outline " + classes}>
                {label}
                {icon ?
                    <span className="material-symbols-rounded"
                    aria-hidden="true">
                        {icon}
                    </span>
                    : undefined
                }
            </button>
        )
    }
}

ButtonOutline.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}

export {
    ButtonPrimary,
    ButtonOutline
} 