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
    </section>
  );
};

export default Experience;
