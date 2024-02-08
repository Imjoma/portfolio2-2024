import { experience } from "@/constants";

const Experience = () => {
  return (
    <section id="experience">
      <h2 className="section-title">Experience</h2>
      <ul>
        {experience.map(({ title, company, location, duties }) => {
          const id =
            title.replaceAll(" ", "-").toLowerCase() +
            "+" +
            company.replaceAll(" ", "-").toLowerCase();

          const newTitle = title + " • " + company;

          return (
            <li key={id} className="">
              <div>
                <h4 className="font-semibold">{newTitle}</h4>
                <p className="text-sm text-textTertiary">{location}</p>
              </div>
              <div className="mt-5 space-y-2 text-base text-textTertiary">
                {duties.map((duty) => (
                  <p key={duty.replaceAll(" ", "-")} className="">
                    {"- " + duty}
                  </p>
                ))}
              </div>
            </li>
          );
        })}
      </ul>
      <div className="mt-8">
        <a
          href="https://drive.google.com/file/d/1k7Ew4qAPGgS4tuzDb94caRjvdVW3JBxg/view"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 font-semibold duration-200 ease-in-out rounded-md bg-themeColorDarker hover:bg-opacity-0 text-textSecondary hover:text-themeColorPrimary"
        >
          View resume
        </a>
      </div>
    </section>
  );
};

export default Experience;
