const Footer = () => {
  return (
    <footer className="text-sm text-textTertiary">
      <p>
        Built with <span className="text-textPrimary">Next.js</span> and{" "}
        <span className="text-textPrimary">Tailwind CSS</span>, deployed with{" "}
        <span className="text-textPrimary">Vercel</span>.
      </p>
      <p>
        © 2024{" "}
        <a
          className="text-textPrimary"
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
