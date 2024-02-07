import { socials } from "@/constants";

const Socials = () => {
  return (
    <div className="flex flex-row my-12 space-x-3 text-3xl lg:my-0">
      {socials.map(({ url, Icon }) => {
        const label = url.includes("mail") ? "email" : url.replace("/", "");
        return (
          <a
            href=""
            key={label}
            target="_blank"
            rel="noopener"
            aria-label={label}
            className="text-themeColorPrimary2 hover:text-themeColorPrimary"
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
