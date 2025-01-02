/**
 * @copyright 2024 Ernest Lamprecht
 * @license Apache-2.0
 */

import PropTypes from "prop-types";

/**
 * @description A React component to display a project with an image, title, tags, and a link.
 * @param {string} imgSrc - The source URL of the project's image.
 * @param {string} title - The title of the project.
 * @param {string[]} tags - An array of tags associated with the project.
 * @param {string} projectLink - The URL link to the project's details.
 * @param {string} [classes] - Additional CSS classes for custom styling.
 * @returns {JSX.Element} A styled div containing the project details.
 * @example
 * <Projects 
 *   imgSrc="/images/example.jpg" 
 *   title="Example Project" 
 *   tags={['React', 'JavaScript']} 
 *   projectLink="https://example.com" 
 * />
 */

const Projects = ({
  imgSrc,
  title,
  tags,
  projectLink,
  classes = "",
}) => {
  return (
    <div
      className={`relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors ${classes}`}
    >
      {/* Project Image */}
      <figure className="img-box aspect-square rounded-lg mb-4">
        <img
          src={imgSrc}
          alt={title}
          loading="lazy"
          className="img-cover"
        />
      </figure>

      {/* Project Info */}
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="title-1 mb-3">{title}</h3>
          <div className="flex flex-wrap items-center gap-2">
            {tags.map((label, index) => (
              <span
                key={index}
                className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Project Link Icon */}
        <div className="w-11 h-11 rounded-lg grid place-items-center bg-[#5af1d3] text-zinc-50 shrink-0">
          <span
            className="material-symbols-rounded"
            aria-hidden="true"
          >
            arrow_outward
          </span>
        </div>
      </div>

      {/* Invisible Link Overlay */}
      <a
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0"
        aria-label={`View details of ${title}`}
      />
    </div>
  );
};

Projects.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  projectLink: PropTypes.string,
  classes: PropTypes.string,
};

export default Projects;
