import { experience } from "@/constants";

const Experience = () => {
  return (
    <section id="experience">
      <h2 className="section-title">Experience</h2>
      <ul className="space-y-8">
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
      {/* On Hold: View Resume element */}
      {/* 
      <div className="mt-10">
        <a
          href="/assets/Jose Maria Ipio-FullstackDeveloper-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 font-semibold duration-200 ease-in-out rounded-md bg-themeColorPrimary bg-opacity-60 hover:bg-opacity-0 text-textPrimary hover:text-themeColorPrimary"
        >
          View resume
        </a>
      </div>
      */}
    </section>
  );
};

export default Experience;
