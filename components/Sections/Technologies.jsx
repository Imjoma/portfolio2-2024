import { techStack } from "@/constants";

const Technologies = () => {
  return (
    <section id="technologies">
      <h2 className="section-title">Technologies</h2>
      <ul className="inline-flex flex-wrap gap-2">
        {techStack.map(({ name, Icon }) => (
          <li
            key={name}
            className="flex flex-row items-center p-2 px-4 space-x-2 rounded-full text-textTertiary bg-themeColorPrimary bg-opacity-15"
          >
            <span className="text-textPrimary">
              <Icon />
            </span>
            <span className="text-sm">{name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Technologies;
