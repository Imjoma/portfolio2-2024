import { projects } from "@/constants";
import Image from "next/image";

import { FiGithub } from "react-icons/fi";
import { AiOutlineArrowUp } from "react-icons/ai";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <ul className="space-y-9 ">
        {projects.map(
          ({ title, alt, image, links, description, techStack }) => {
            return (
              <li
                key={title}
                className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row"
              >
                {/* title */}
                <h4 className="block p-1 font-semibold sm:hidden">{title}</h4>
                {/* thumbnail */}
                <div className="relative w-[240px] h-[135px] border-2 aspect-video border-themeColorPrimary border-opacity-40 rounded-lg">
                  <Image
                    src={`/assets/images/projects/${image}`}
                    fill
                    className="absolute object-cover w-full h-full rounded-lg"
                    alt={alt}
                    sizes="(max-width: 768px) 100vw"
                    loading="lazy"
                  />
                </div>
                {/* content */}
                <div className="ml-0 sm:ml-4">
                  {/* title */}
                  <h4 className="hidden font-semibold sm:block">{title}</h4>

                  {/* links */}
                  <div className="flex flex-row pl-1 space-x-3 sm:pl-0 sm:pt-1">
                    <a
                      href={links["dev-github"]}
                      className="flex items-center space-x-1 text-sm font-semibold duration-300 ease-in-out text-themeColorPrimary2 hover:text-themeColorPrimary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Github</span>
                      <FiGithub />
                    </a>
                    <a
                      href={links["production-link"]}
                      className="flex items-center space-x-1 text-sm font-semibold duration-300 ease-in-out text-themeColorPrimary2 hover:text-themeColorPrimary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Link</span>
                      <AiOutlineArrowUp className="rotate-45 " />
                    </a>
                  </div>

                  {/* desc */}
                  <p className="pt-6 text-sm indent-2 text-textSecondary">
                    {"- " + description}
                  </p>

                  {/* techStack */}
                  <ul className="inline-flex flex-wrap gap-2 pt-3">
                    {techStack.map((i, idx) => (
                      <li
                        key={idx}
                        className="flex flex-row items-center p-[6px] px-[12px] space-x-2 text-xs rounded-full text-textTertiary bg-themeColorPrimary bg-opacity-15"
                      >
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          }
        )}
      </ul>
    </section>
  );
};

export default Projects;
