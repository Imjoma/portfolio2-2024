import { tags } from "@/constants";
export const SITE_URL = "jomaipio.vercel.app";
export const title = "Jose Maria Ipio";
export const author = "Joma Ipio";
export const description = "Jose Maria Ipio porfolio website.";

export const seo = {
  title,
  description,

  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  applicationName: title,

  creator: author,
  authors: [{ name: author, url: SITE_URL }],

  formatDetection: {
    telephone: false,
  },

  keywords: [
    { ...tags },
    "NextJs",
    "ReactJs",
    "Figma",
    "TailwindCSS",
    title,
    author,
    `${title} | Software Engineer`,
    `${title} | Front End Engineer`,
    `${title} | Web Developer`,
    `${title} | React Developer`,
    `${title} | UX/UI Designer`,
    `${author} | Software Engineer`,
    `${author} | Front End Engineer`,
    `${author} | Web Developer`,
    `${author} | React Developer`,
    `${author} | UX/UI Designer`,
  ],
};
