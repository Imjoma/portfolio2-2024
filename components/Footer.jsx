import { Antonio } from "next/font/google";

const antonio = Antonio({ subsets: ["latin"] });

const Footer = () => {
  return (
    <footer className={antonio.className + " text-textTertiary"}>
      <p>
        Built with <span>Next.js</span> and <span>Tailwind CSS</span>, deployed
        with <span>Vercel</span>.
      </p>
      <p>
        © 2025{" "}
        <a
          className=" text-textPrimary hover:text-themeColorPrimary"
          href="/github"
          target="_blank"
          rel="noreferrer noopener"
        >
          Jose Maria Ipio
        </a>
      </p>
    </footer>
  );
};

export default Footer;
