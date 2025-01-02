/**
 * @copyright 2024 Ernest Lamprecht
 * @license Apache-2.0
*/
import PropTypes from "prop-types"

/**
 * Renders a Tool component, which displays an icon, a label, and a tool's essence.
 *
 * @param {string} iconScroll - The URL of the icon to display.
 * @param {string} label - The label to display for the tool.
 * @param {string} essence - The essence of the tool to display.
 * @param {string} [classes] - Any additional CSS classes to apply to the component.
 * @returns {JSX.Element} A JSX element representing the Tool component.
 */
const Tools = ({
    iconScroll,
    label,
    essence,
    classes
}) => {
    return (
        <div className={"flex items-center gap-3 ring-2 ring-inset ring-cyan-500/10 rounded-2xl p-3 hover:bg-[#1A2B3C]/50 transition-colors group shadow-md shadow-cyan-500/10 " + classes}>
            <figure className="bg-cyan-500/10 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-cyan-500/20 transition-colors">
                <img
                    src={iconScroll}
                    width={32}
                    height={32}
                    alt={label}
                    className="group-hover:scale-110 transition-transform"
                />
            </figure>
            <div>
                <h3 className="text-cyan-100 font-semibold">
                   { label }
                </h3>
                <p className="text-cyan-200/70 text-sm">
                    { essence }
                </p>
            </div>
        </div>
    )
}

Tools.propTypes = {
    iconScroll: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    essence: PropTypes.string.isRequired,
    classes: PropTypes.string
}

export default Tools