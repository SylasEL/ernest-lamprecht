/**
 * @copyright 2024 Ernest Lamprecht
 * @license Apache-2.0
 */

import PropTypes from "prop-types";
import { useTheme } from "./../Theme";

/**
 * Renders a Tool component, which displays an icon, a label, and a tool's essence.
 *
 * @param {string} iconScroll - The URL of the icon to display.
 * @param {string} label - The label to display for the tool.
 * @param {string} normalEssence - The normal essence of the tool to display.
 * @param {string} specialEssence - The special essence of the tool to display in special mode.
 * @param {string} [classes] - Any additional CSS classes to apply to the component.
 * @returns {JSX.Element} A JSX element representing the Tool component.
 */
const Tools = ({ iconScroll, label, normalEssence, specialEssence, classes }) => {
  const { isSpecialMode } = useTheme();
  return (
    <div
      className={
        "flex items-start gap-4 ring-2 ring-inset ring-cyan-500/10 rounded-2xl p-4 hover:bg-[#1A2B3C]/50 transition-colors group shadow-md shadow-cyan-500/10 " +
        classes
      }
    >
      <figure className="bg-cyan-500/10 rounded-lg overflow-hidden w-14 h-14 p-2.5 flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
        <img
          src={iconScroll}
          width={36}
          height={36}
          alt={label}
          className="group-hover:scale-110 transition-transform"
        />
      </figure>
      <div className="flex-1 pt-1">
        <h3 className="text-cyan-100 font-semibold mb-1">{label}</h3>
        <p className="text-cyan-200/70 text-sm leading-tight">
          {isSpecialMode ? specialEssence : normalEssence}
        </p>
      </div>
    </div>
  );
};

Tools.propTypes = {
  iconScroll: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  normalEssence: PropTypes.string.isRequired,
  specialEssence: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default Tools;

