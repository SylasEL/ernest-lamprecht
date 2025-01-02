/**
 * @copyright 2024 Ernest Lamprecht
 * @license Apache-2.0
*/

import Projects from "./Projects";

const exp = [
    {
      imgSrc: '/images/project - 1.jpeg',
      title: 'Office Airconsitioning Web App',
      tags: ['API', 'Development'],
      projectLink: ''
    },
    {
      imgSrc: '/images/project - 2.jpeg',
      title: 'Collaborative note-taking Web App',
      tags: ['API', 'Development'],
      projectLink: ''
    },
  ];

/**
 * @description A component to display a list of projects
 * @returns {JSX.Element} A section with a headline, a paragraph, and a grid of projects
 * @example
 * <Experience />
 */

const Experience = () => {
    return (
        <section
            id="exp"
            className="section"
        >
            <div className="container">

                <h2 className="headline-2 mb-6">
                    Some projects
                </h2>

                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {exp.map(({ imgSrc, title, tags, projectLink }, key) => (
                        <Projects
                            key={key}
                            imgSrc={imgSrc}
                            title={title}
                            tags={tags}
                            projectLink={projectLink}
                            classes="reveal-up"
                        />
                    ))}
                </div>

            </div>

        </section>
    )
}

export default Experience