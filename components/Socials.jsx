import { socials } from "@/constants";

const Socials = () => {
  return (
    <div className="flex flex-row items-center my-12 space-x-3 text-3xl lg:my-0">
      {socials.map(({ url, Icon }) => {
        const label = url.includes("mail") ? "email" : url.replace("/", "");
        const isFacebook = url.includes("facebook");
        return (
          <a
            href={url}
            key={label}
            target="_blank"
            rel="noopener"
            aria-label={label}
            className={`text-themeColorPrimary2 hover:text-themeColorPrimary ${
              isFacebook && "text-2xl"
            }`}
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
